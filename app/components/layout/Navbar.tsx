"use client";

import ClapperLogo from "../ClapperLogo";

type NavbarProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  pct: number;
  isComplete: boolean;
  r: number;
  circ: number;
  offset: number;
};

export default function Navbar({
  dark,
  setDark,
  pct,
  isComplete,
  r,
  circ,
  offset,
}: NavbarProps) {
  return (
    <nav
      style={{
        borderBottom: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
        background: dark ? "#0f172aee" : "#ffffffee",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ClapperLogo />

          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: dark ? "#f8fafc" : "#0f172a",
                display: "flex",
                gap: 2,
              }}
            >
              <span style={{ color: "#f59e0b" }}>Movie</span>
              <span style={{ fontStyle: "italic" }}>Pops</span>
            </div>

            <div
              style={{
                fontSize: 10,
                color: dark ? "#64748b" : "#94a3b8",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Adivinhe a música
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              position: "relative",
              width: 56,
              height: 56,
            }}
          >
            <svg
              width="56"
              height="56"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="28"
                cy="28"
                r={r}
                fill="none"
                stroke={dark ? "#1e293b" : "#e2e8f0"}
                strokeWidth="4.5"
              />

              <circle
                cx="28"
                cy="28"
                r={r}
                fill="none"
                stroke={isComplete ? "#22c55e" : "#f59e0b"}
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
              />
            </svg>

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: dark ? "#fff" : "#000",
              }}
            >
              {pct}%
            </div>
          </div>

          <button
            onClick={() => setDark((d) => !d)}
            style={{
              width: 40,
              height: 22,
              borderRadius: 11,
              border: "none",
              cursor: "pointer",
              background: dark ? "#3b82f6" : "#cbd5e1",
            }}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}