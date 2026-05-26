"use client";

import { useState, useRef, useEffect } from "react";
import { Trophy } from "./types/types";
import { SONGS, TROPHIES } from "./constants/constants";
import MusicCard from "./components/MusicCard";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import TrophyShelf from "./components/layout/TrophyShelf";
import Image from "next/image";

const STORAGE_KEY = "moviepops-save";

type SaveData = {
  version: number;
  correctIds: number[];
  dark: boolean;
  lastPlayedAt: number;
};

function getSavedGame(): SaveData | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const save = localStorage.getItem(STORAGE_KEY);

    if (!save) {
      return null;
    }

    return JSON.parse(save);
  } catch (err) {
    console.error("Erro ao carregar save:", err);
    return null;
  }
}

export default function MoviePops() {
  const [justUnlocked, setJustUnlocked] = useState<Set<string>>(new Set());

  const currentlyPlayingRef = useRef<(() => void) | null>(null);

  const [correctIds, setCorrectIds] = useState<Set<number>>(() => {
    const save = getSavedGame();

    return new Set(save?.correctIds || []);
  });

  const [dark, setDark] = useState(() => {
    const save = getSavedGame();

    return typeof save?.dark === "boolean" ? save.dark : true;
  });
  const [unlockNotifications, setUnlockNotifications] = useState<Trophy[]>([]);

  const total = SONGS.length;
  const correctCount = correctIds.size;
  const pct = Math.round((correctCount / total) * 100);
  const isComplete = correctCount === total;

  const handleCorrect = (songId: number) => {
    setCorrectIds((prev) => {
      const next = new Set(prev);
      next.add(songId);
      const newlyUnlocked = new Set<string>();

      TROPHIES.forEach((t) => {
        const wasActive = t.required.every((id) => prev.has(id));
        const isActive = t.required.every((id) => next.has(id));

        if (!wasActive && isActive) {
          newlyUnlocked.add(t.id);
        }
      });

      if (newlyUnlocked.size > 0) {
        setJustUnlocked(newlyUnlocked);

        const unlockedTrophies = TROPHIES.filter((t) =>
          newlyUnlocked.has(t.id)
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

  const r = 24;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  const bg = dark
    ? "linear-gradient(160deg,#020617 0%,#0b1120 50%,#020617 100%)"
    : "linear-gradient(160deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)";

  useEffect(() => {
    const saveData: SaveData = {
      version: 1,
      correctIds: Array.from(correctIds),
      dark,
      lastPlayedAt: Date.now(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
  }, [correctIds, dark]);

  const handleResetProgress = () => {
    const confirmReset = window.confirm(
      "Tem certeza que deseja limpar todo o progresso?"
    );

    if (!confirmReset) {
      return;
    }

    setCorrectIds(new Set());
    setJustUnlocked(new Set());

    localStorage.removeItem(STORAGE_KEY);
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
        *, *::before, *::after { box-sizing: border-box; }

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

        input::placeholder {
          color: #94a3b8;
        }

        input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px #3b82f620;
        }

        button:hover:not(:disabled) {
          opacity: 0.85;
          transform: scale(0.975);
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

      {/* ── Navbar ── */}
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

      {/* ── Main content ── */}
      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "28px 20px 56px",
        }}
      >
        {/* Trophy shelf */}
        <TrophyShelf
          trophies={TROPHIES}
          dark={dark}
          justUnlocked={justUnlocked}
          isTrophyActive={isTrophyActive}
        />

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: dark ? "#1e293b" : "#e2e8f0",
            marginBottom: 28,
          }}
        />

        {/* Cards grid */}
        <div className="mp-grid">
          {SONGS.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              currentlyPlayingRef={currentlyPlayingRef}
              onCorrect={handleCorrect}
              dark={dark}
              isCorrect={correctIds.has(song.id)}
            />
          ))}
        </div>
      </main>
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

              transform: "perspective(800px) rotateX(3deg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "perspective(800px) rotateX(3deg) scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(800px) rotateX(3deg) scale(1)";
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
        {unlockNotifications.map((trophy) => (
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

              border: `2px solid ${trophy.colors.border}`,

              boxShadow: `
          0 12px 30px ${trophy.colors.glow}55
        `,

              animation: "unlockSlide 3.5s cubic-bezier(0.34,1.56,0.64,1)",

              overflow: "hidden",

              position: "relative",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,

                width: 80,
                height: 80,

                borderRadius: "50%",

                background: trophy.colors.glow,

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

                background: trophy.colors.border + "22",

                border: `2px solid ${trophy.colors.border}`,

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

                  filter: dark
                    ? "drop-shadow(0 0 10px rgba(255,255,255,.15))"
                    : "drop-shadow(0 0 10px rgba(0,0,0,.12))",
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

                  color: trophy.colors.border,
                }}
              >
                NOVO TROFÉU
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
                Conquista desbloqueada!
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
          padding: "16px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: dark ? "#334155" : "#cbd5e1",
            fontFamily: "system-ui",
          }}
        >
          Criado por:{" "}
          <a
            href="https://www.instagram.com/rent.ferreira/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: dark ? "#334155" : "#cbd5e1",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            rent.ferreira
          </a>
        </p>
      </footer>
    </div>
  );
}
