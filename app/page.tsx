"use client";

import { useState, useRef } from "react";

import { Trophy } from "./types/types";
import { SONGS, TROPHIES } from "./constants/constants";

import MusicCard from "./components/MusicCard";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import TrophyShelf from "./components/layout/TrophyShelf";

export default function MoviePops() {
  const [correctIds, setCorrectIds] = useState<Set<number>>(new Set());
  const [justUnlocked, setJustUnlocked] = useState<Set<string>>(new Set());
  const [dark, setDark] = useState(true);
  const currentlyPlayingRef = useRef<(() => void) | null>(null);

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
        if (!wasActive && isActive) newlyUnlocked.add(t.id);
      });
      if (newlyUnlocked.size > 0) {
        setJustUnlocked(newlyUnlocked);
        setTimeout(() => setJustUnlocked(new Set()), 2600);
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

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        fontFamily: "'Georgia', 'Times New Roman', serif",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes pulse { from { opacity: 0.06; } to { opacity: 0.18; } }
        @keyframes badgePop { from { transform: scale(0) translateX(-50%); opacity: 0; } to { transform: scale(1) translateX(-50%); opacity: 1; } }
        @keyframes wave-0 { from { height: 5px; } to { height: 26px; } }
        @keyframes wave-1 { from { height: 9px; } to { height: 20px; } }
        @keyframes wave-2 { from { height: 3px; } to { height: 30px; } }
        @keyframes wave-3 { from { height: 12px; } to { height: 16px; } }
        @keyframes shimmer { 0%,100% { opacity:1; } 50% { opacity:0.6; } }
        input::placeholder { color: #94a3b8; }
        input:focus { border-color: #3b82f6 !important; box-shadow: 0 0 0 3px #3b82f620; }
        button:hover:not(:disabled) { opacity: 0.85; transform: scale(0.975); }
        .mp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 14px; }
        .trophy-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
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
        style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 20px 56px" }}
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
            />
          ))}
        </div>
      </main>

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
