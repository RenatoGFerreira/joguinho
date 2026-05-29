"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Trophy, SaveData } from "./types/types";
import { SONGS, TROPHIES } from "./constants/constants";
import MusicCard from "./components/MusicCard";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import TrophyShelf from "./components/layout/TrophyShelf";
import Footer from "./components/Footer";

const STORAGE_KEY = "moviepops-save";

function getSavedGame(): SaveData | null {
  if (typeof window === "undefined") return null;
  try {
    const save = localStorage.getItem(STORAGE_KEY);
    return save ? JSON.parse(save) : null;
  } catch (err) {
    console.error("Erro ao carregar save:", err);
    return null;
  }
}

export default function MoviePops() {
  const [isMounted, setIsMounted] = useState(false);
  const [correctIds, setCorrectIds] = useState<Set<number>>(new Set());
  const [usedHintIds, setUsedHintIds] = useState<Set<number>>(new Set());
  const [dark, setDark] = useState(true);
  const [showTrophies, setShowTrophies] = useState(true);
  const [justUnlocked, setJustUnlocked] = useState<Set<string>>(new Set());
  const [justSilver, setJustSilver] = useState<Set<string>>(new Set());
  const [unlockNotifications, setUnlockNotifications] = useState<Trophy[]>([]);

  const handleUseHint = useCallback((songId: number) => {
    setUsedHintIds((prev) => new Set(prev).add(songId));
  }, []);

  const currentlyPlayingRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const save = getSavedGame();
    if (save) {
      setCorrectIds(new Set(save.correctIds));
      setUsedHintIds(new Set(save.usedHintIds || []));
      setDark(save.dark);
      setShowTrophies(save.showTrophies);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const saveData: SaveData = {
      version: 1,
      correctIds: Array.from(correctIds),
      usedHintIds: Array.from(usedHintIds),
      dark,
      showTrophies,
      lastPlayedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
  }, [correctIds, usedHintIds, dark, showTrophies, isMounted]);

  if (!isMounted) return null;

  const total = SONGS.length;
  const correctCount = correctIds.size;
  const pct = Math.round((correctCount / total) * 100);
  const isComplete = correctCount === total;

  const r = 24;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const bg = dark
    ? "linear-gradient(160deg,#020617 0%,#0b1120 50%,#020617 100%)"
    : "linear-gradient(160deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)";

  const handleCorrect = (songId: number) => {
    setCorrectIds((prev) => {
      const next = new Set(prev);
      next.add(songId);

      const newlyUnlocked = new Set<string>();
      const newlySilver = new Set<string>();

      TROPHIES.forEach((t) => {
        const prevCount = t.required.filter((id) => prev.has(id)).length;

        const nextCount = t.required.filter((id) => next.has(id)).length;

        const prevProgress = (prevCount / t.required.length) * 100;

        const nextProgress = (nextCount / t.required.length) * 100;

        const wasActive = prevProgress === 100;
        const isActive = nextProgress === 100;

        const wasSilver = prevProgress >= 50;

        const isSilver = nextProgress >= 50 && nextProgress < 100;

        // PRATA
        if (!wasSilver && isSilver) {
          newlySilver.add(t.id);
        }

        // OURO
        if (!wasActive && isActive) {
          newlyUnlocked.add(t.id);
        }
      });

      if (newlyUnlocked.size > 0 || newlySilver.size > 0) {
        setJustUnlocked(newlyUnlocked);
        setJustSilver(newlySilver);
        const unlockedTrophies = TROPHIES.filter(
          (t) =>
            newlyUnlocked.has(t.id) ||
            newlySilver.has(t.id)
        );
        setUnlockNotifications(unlockedTrophies);
        setTimeout(() => {
          setJustUnlocked(new Set());
          setUnlockNotifications([]);
        }, 3500);
      }
      return next;
    });
  };

  const isTrophyActive = (t: Trophy) =>
    t.required.every((id) => correctIds.has(id));

  const handleResetProgress = () => {
    if (window.confirm("Tem certeza que deseja limpar todo o progresso?")) {
      setCorrectIds(new Set());
      setJustUnlocked(new Set());
      setUsedHintIds(new Set());
      localStorage.removeItem(STORAGE_KEY);
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        fontFamily: "inherit",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        @keyframes pulse {
          from { opacity: 0.06; }
          to { opacity: 0.18; }
        }

        @keyframes badgePop {
          from {
            transform: scale(0) translateX(-50%);
            opacity: 0;
          }

          to {
            transform: scale(1) translateX(-50%);
            opacity: 1;
          }
        }

        @keyframes wave-0 {
          from { height: 5px; }
          to { height: 26px; }
        }

        @keyframes wave-1 {
          from { height: 9px; }
          to { height: 20px; }
        }

        @keyframes wave-2 {
          from { height: 3px; }
          to { height: 30px; }
        }

        @keyframes wave-3 {
          from { height: 12px; }
          to { height: 16px; }
        }

        @keyframes shimmer {
          0%,100% { opacity:1; }
          50% { opacity:0.6; }
        }

        @keyframes trophyExpand {
          from {
            opacity: 0;
            transform: translateY(-14px) scale(.96);
          }

          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        input::placeholder {
          color: #94a3b8;
        }

        input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px #3b82f620;
        }

        button:hover:not(:disabled) {
          opacity: 0.85;
        }

        .mp-grid {
          display: grid;

          grid-template-columns:
            repeat(auto-fit, minmax(230px, 230px));

          justify-content: center;

          gap: 25px;
        }

        .trophy-row {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 12px;
        }
      `}</style>

      {/* Navbar */}
      <Navbar
        dark={dark}
        setDark={setDark}
        pct={pct}
        isComplete={isComplete}
        r={r}
        circ={circ}
        offset={offset}
      />

      <HeroSection dark={dark} correctCount={correctCount} total={total} />

      {/* Main */}
      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "28px 20px 56px",
        }}
      >
        {/* HEADER TROFÉUS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 18,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 900,
                color: dark ? "#fff" : "#0f172a",
              }}
            >
              🏆 Troféus
            </h2>

            <span
              style={{
                fontSize: 13,
                color: dark ? "#94a3b8" : "#64748b",
              }}
            >
              {TROPHIES.filter(isTrophyActive).length} desbloqueados
            </span>
          </div>

          {/* BOTÃO MOSTRAR/ESCONDER */}
          <button
            onClick={() => setShowTrophies((prev) => !prev)}
            style={{
              height: 46,
              padding: "0 18px",
              borderRadius: 14,
              border: `1px solid ${dark ? "#334155" : "#cbd5e1"}`,
              background: dark
                ? "linear-gradient(180deg,#1e293b,#0f172a)"
                : "linear-gradient(180deg,#ffffff,#f1f5f9)",
              color: dark ? "#f8fafc" : "#0f172a",
              fontWeight: 800,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "all .25s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: dark
                ? "0 10px 24px rgba(0,0,0,.28)"
                : "0 10px 20px rgba(0,0,0,.08)",
            }}
          >
            <span
              style={{
                fontSize: 16,
              }}
            >
              {showTrophies ? "🙈" : "👀"}
            </span>
            {showTrophies ? "Esconder troféus" : "Mostrar troféus"}
          </button>
        </div>

        {/* TROPHY SHELF */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: showTrophies ? "1fr" : "0fr",
            opacity: showTrophies ? 1 : 0,
            transition:
              "grid-template-rows .45s cubic-bezier(.34,1.56,.64,1), opacity .28s ease",
            marginBottom: showTrophies ? 28 : 0,
          }}
        >
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <div
              style={{
                transform: showTrophies
                  ? "translateY(0px) scale(1)"
                  : "translateY(-18px) scale(.96)",
                filter: showTrophies ? "blur(0px)" : "blur(6px)",
                transition: "all .45s cubic-bezier(.34,1.56,.64,1)",
                transformOrigin: "top center",
              }}
            >
              <TrophyShelf
                trophies={TROPHIES}
                dark={dark}
                justUnlocked={justUnlocked}
                isTrophyActive={isTrophyActive}
                correctIds={correctIds}
              />

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: dark ? "#1e293b" : "#e2e8f0",
                  marginBottom: 28,
                  marginTop: 24,
                  opacity: showTrophies ? 1 : 0,
                  transition: "opacity .25s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mp-grid">
          {SONGS.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              currentlyPlayingRef={currentlyPlayingRef}
              onCorrect={handleCorrect}
              onUseHint={() => handleUseHint(song.id)}
              dark={dark}
              isCorrect={correctIds.has(song.id)}
              isHintUsed={usedHintIds.has(song.id)}
            />
          ))}
        </div>
      </main>

      {/* RESET */}
      {correctCount > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 12,
            marginBottom: 40,
            padding: "0 20px",
          }}
        >
          <button
            onClick={handleResetProgress}
            style={{
              height: 48,
              padding: "0 22px",
              border: "none",
              borderRadius: 14,
              cursor: "pointer",
              background: dark
                ? "linear-gradient(180deg,#7f1d1d 0%,#450a0a 100%)"
                : "linear-gradient(180deg,#f87171 0%,#ef4444 100%)",

              color: "#fff",
              fontSize: 14,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: dark
                ? "0 10px 24px rgba(239,68,68,0.35)"
                : "0 10px 20px rgba(239,68,68,0.25)",
            }}
          >
            <span
              style={{
                fontSize: 18,
                lineHeight: 1,
              }}
            >
              🗑
            </span>
            Reiniciar progresso
          </button>
        </div>
      )}

      {/* NOTIFICAÇÕES */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          zIndex: 9999,
        }}
      >
        {unlockNotifications.map((trophy) => {
  const isSilver = justSilver.has(trophy.id);

  return (
    <div
      key={trophy.id}
      style={{
        width: 300,
        padding: "14px 16px",
        borderRadius: 18,
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: dark
          ? `
            linear-gradient(
              180deg,
              ${trophy.colors.bgD},
              #0f172a
            )
          `
          : `
            linear-gradient(
              180deg,
              ${trophy.colors.bg},
              #ffffff
            )
          `,
        border: `2px solid ${
          isSilver
            ? "#cbd5e1"
            : trophy.colors.border
        }`,
        boxShadow: isSilver
          ? "0 12px 30px rgba(255,255,255,.25)"
          : `0 12px 30px ${trophy.colors.glow}55`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: isSilver
            ? "#e5e7eb"
            : trophy.colors.glow,
          opacity: 0.25,
          filter: "blur(24px)",
        }}
      />

      <div
        style={{
          width: 62,
          height: 62,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isSilver
            ? "rgba(255,255,255,.12)"
            : trophy.colors.border + "22",

          border: `2px solid ${
            isSilver
              ? "#cbd5e1"
              : trophy.colors.border
          }`,

          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={trophy.image}
          alt={trophy.name}
          width={54}
          height={54}
          style={{
            objectFit: "contain",

            filter: isSilver
              ? `
                grayscale(1)
                brightness(1.4)
                contrast(1.1)
              `
              : "none",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: "0.08em",
            color: isSilver
              ? "#e2e8f0"
              : trophy.colors.border,
          }}
        >
          {isSilver
            ? "🥈 TROFÉU PRATA"
            : "🏆 NOVO TROFÉU"}
        </span>

        <span
          style={{
            fontSize: 16,
            fontWeight: 900,
            color: dark ? "#fff" : "#0f172a",
          }}
        >
          {trophy.name}
        </span>

        <span
          style={{
            fontSize: 12,
            color: dark ? "#cbd5e1" : "#475569",
          }}
        >
          {isSilver
            ? "50% do troféu concluído!"
            : "Conquista desbloqueada!"}
        </span>
      </div>
    </div>
  );
})}
      </div>

      {/* Footer */}
      <footer>
        <Footer dark={dark} />
      </footer>
    </div>
  );
}
