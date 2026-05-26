"use client";
import { useState } from "react";
import { TrophyCardProps } from "../types/types";

export default function TrophyCard({
  trophy,
  active,
  justUnlocked,
  dark,
}: TrophyCardProps) {
  const [hover, setHover] = useState(false);

  const activeBg = dark
    ? `
      linear-gradient(
        180deg,
        ${trophy.colors.bgD} 0%,
        #0f172a 100%
      )
    `
    : `
      linear-gradient(
        180deg,
        ${trophy.colors.bg} 0%,
        #ffffff 100%
      )
    `;

  const inactiveBg = dark
    ? "linear-gradient(180deg,#1e293b 0%,#0f172a 100%)"
    : "linear-gradient(180deg,#f8fafc 0%,#e2e8f0 100%)";

  const inactiveBorder = dark ? "#334155" : "#cbd5e1";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",

        width: 110,
        minHeight: 155,

        padding: "14px 10px 12px",

        borderRadius: 22,

        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

        background: active ? activeBg : inactiveBg,

        border: `2px solid ${
          active ? trophy.colors.border : inactiveBorder
        }`,

        transition:
          "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",

        transform: justUnlocked
          ? "perspective(1000px) rotateX(4deg) scale(1.12)"
          : hover
          ? "perspective(1000px) rotateX(4deg) translateY(-5px) scale(1.04)"
          : "perspective(1000px) rotateX(2deg) scale(1)",

        boxShadow: active
          ? `
            0 14px 32px ${trophy.colors.glow}55,
            inset 0 1px 0 rgba(255,255,255,0.15)
          `
          : dark
          ? "0 8px 20px rgba(0,0,0,0.25)"
          : "0 8px 18px rgba(0,0,0,0.08)",

        cursor: "default",
      }}
    >
      {/* glow */}
      {active && (
        <div
          style={{
            position: "absolute",
            top: -35,
            right: -30,

            width: 90,
            height: 90,

            borderRadius: "50%",

            background: trophy.colors.glow,

            opacity: 0.22,

            filter: "blur(30px)",

            pointerEvents: "none",
          }}
        />
      )}

      {/* shine */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: -30,

          width: 80,
          height: 220,

          background: "rgba(255,255,255,0.10)",

          transform: "rotate(24deg)",

          pointerEvents: "none",
        }}
      />

      {/* desbloqueado */}
      {justUnlocked && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",

            transform: "translateX(-50%) rotate(-2deg)",

            background: `
              linear-gradient(
                180deg,
                ${trophy.colors.border} 0%,
                ${trophy.colors.glow} 100%
              )
            `,

            color: "#fff",

            fontSize: 8,
            fontWeight: 900,
            letterSpacing: "0.08em",

            padding: "4px 8px",

            borderRadius: 999,

            whiteSpace: "nowrap",

            zIndex: 5,

            boxShadow: `0 6px 14px ${trophy.colors.glow}66`,

            animation:
              "badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          ✦ DESBLOQUEADO
        </div>
      )}

      {/* level */}
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,

          width: 24,
          height: 24,

          borderRadius: "50%",

          background: active
            ? trophy.colors.border
            : dark
            ? "#334155"
            : "#cbd5e1",

          color: active ? "#fff" : dark ? "#94a3b8" : "#64748b",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: 10,
          fontWeight: 900,

          border: "2px solid rgba(255,255,255,0.25)",

          zIndex: 3,
        }}
      >
        {trophy.required.length}
      </div>

      {/* icon container */}
      <div
        style={{
          marginTop: justUnlocked ? 24 : 10,

          width: 68,
          height: 68,

          borderRadius: 18,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: active
            ? `
              radial-gradient(
                circle at top,
                rgba(255,255,255,0.22),
                transparent 70%
              )
            `
            : dark
            ? "#0f172a"
            : "#e2e8f0",

          border: `2px solid ${
            active
              ? trophy.colors.border
              : dark
              ? "#334155"
              : "#cbd5e1"
          }`,

          boxShadow: active
            ? `0 10px 24px ${trophy.colors.glow}44`
            : "none",

          transform: hover
            ? "rotate(-3deg) scale(1.06)"
            : "rotate(0deg) scale(1)",

          transition: "all 0.3s ease",

          zIndex: 2,
        }}
      >
        <div
          style={{
            filter: active
              ? `
                drop-shadow(0 0 10px ${trophy.colors.glow})
              `
              : "grayscale(1) brightness(0.55)",

            transition: "all 0.35s ease",
          }}
        >
          {trophy.icon(active, dark)}
        </div>
      </div>

      {/* rarity */}
      <div
        style={{
          marginTop: 8,

          padding: "3px 8px",

          borderRadius: 999,

          background: active
            ? trophy.colors.border + "22"
            : dark
            ? "#0f172a"
            : "#e2e8f0",

          border: `1px solid ${
            active
              ? trophy.colors.border + "66"
              : dark
              ? "#334155"
              : "#cbd5e1"
          }`,

          color: active
            ? trophy.colors.border
            : dark
            ? "#64748b"
            : "#94a3b8",

          fontSize: 8,
          fontWeight: 900,
          letterSpacing: "0.08em",

          textTransform: "uppercase",

          zIndex: 2,
        }}
      >
        {trophy.required.length >= 10
          ? "LENDÁRIO"
          : trophy.required.length >= 6
          ? "ÉPICO"
          : trophy.required.length >= 4
          ? "RARO"
          : "COMUM"}
      </div>

      {/* name */}
      <span
        style={{
          marginTop: 8,

          fontSize: 10,
          fontWeight: 900,

          letterSpacing: "0.04em",

          lineHeight: 1.2,

          textAlign: "center",

          color: active
            ? trophy.colors.text
            : dark
            ? "#64748b"
            : "#94a3b8",

          textShadow: active
            ? "0 1px 0 rgba(255,255,255,0.15)"
            : "none",

          zIndex: 2,
        }}
      >
        {trophy.name}
      </span>

      {/* progress chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,

          marginTop: 10,

          zIndex: 2,
        }}
      >
        {trophy.required.slice(0, 6).map((n) => (
          <span
            key={n}
            style={{
              minWidth: 22,
              height: 20,

              padding: "0 6px",

              borderRadius: 999,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background: active
                ? trophy.colors.border + "22"
                : dark
                ? "#0f172a"
                : "#e2e8f0",

              border: `1px solid ${
                active
                  ? trophy.colors.border + "66"
                  : dark
                  ? "#334155"
                  : "#cbd5e1"
              }`,

              color: active
                ? trophy.colors.border
                : dark
                ? "#64748b"
                : "#94a3b8",

              fontSize: 8,
              fontWeight: 900,

              transition: "all 0.3s ease",
            }}
          >
            #{n}
          </span>
        ))}

        {trophy.required.length > 6 && (
          <span
            style={{
              minWidth: 22,
              height: 20,

              padding: "0 6px",

              borderRadius: 999,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background: active
                ? trophy.colors.border + "22"
                : dark
                ? "#0f172a"
                : "#e2e8f0",

              border: `1px solid ${
                active
                  ? trophy.colors.border + "66"
                  : dark
                  ? "#334155"
                  : "#cbd5e1"
              }`,

              color: active
                ? trophy.colors.border
                : dark
                ? "#64748b"
                : "#94a3b8",

              fontSize: 8,
              fontWeight: 900,
            }}
          >
            +{trophy.required.length - 6}
          </span>
        )}
      </div>

      {/* locked overlay */}
      {!active && (
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.08), rgba(15,23,42,0.22))",

            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}