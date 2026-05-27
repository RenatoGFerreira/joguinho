"use client";

import Image from "next/image";
import { useState } from "react";
import { TrophyCardProps } from "../types/types";

export default function TrophyCard({
  trophy,
  active,
  justUnlocked,
  dark,
}: TrophyCardProps) {
  const [hover, setHover] = useState(false);

  const rarity =
    trophy.required.length >= 10
      ? "LENDÁRIO"
      : trophy.required.length >= 6
      ? "ÉPICO"
      : trophy.required.length >= 4
      ? "RARO"
      : "COMUM";

  const activeBg = dark
    ? `
      radial-gradient(
        circle at top,
        ${trophy.colors.glow}22 0%,
        transparent 35%
      ),
      linear-gradient(
        180deg,
        ${trophy.colors.bgD} 0%,
        #060b16 100%
      )
    `
    : `
      radial-gradient(
        circle at top,
        rgba(255,255,255,.9) 0%,
        transparent 35%
      ),
      linear-gradient(
        180deg,
        ${trophy.colors.bg} 0%,
        #ffffff 100%
      )
    `;

  const inactiveBg = dark
    ? "linear-gradient(180deg,#1e293b 0%,#0b1120 100%)"
    : "linear-gradient(180deg,#f8fafc 0%,#e2e8f0 100%)";

  const inactiveBorder = dark ? "#334155" : "#cbd5e1";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",

        width: 112,
        minHeight: 300,

        margin: "9px",
        padding: "14px 10px 16px 10px",

        borderRadius: 32,

        overflow: "visible",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        background: active ? activeBg : inactiveBg,

        border: `1px solid ${
          active ? trophy.colors.border + "66" : inactiveBorder
        }`,

        transition: "all .45s cubic-bezier(.34,1.56,.64,1)",

        transform: justUnlocked
          ? "perspective(1400px) rotateX(8deg) scale(1.06)"
          : hover
          ? "perspective(1400px) rotateX(10deg) rotateY(-7deg) translateY(-14px)"
          : "perspective(1400px) rotateX(2deg)",

        boxShadow: active
          ? `
            0 25px 55px rgba(0,0,0,.45),
            0 0 70px ${trophy.colors.glow}33,
            inset 0 1px 0 rgba(255,255,255,.12),
            inset 0 -10px 18px rgba(0,0,0,.35)
          `
          : dark
          ? `
            0 14px 35px rgba(0,0,0,.4),
            inset 0 1px 0 rgba(255,255,255,.04)
          `
          : `
            0 14px 30px rgba(0,0,0,.08),
            inset 0 1px 0 rgba(255,255,255,.5)
          `,

        cursor: "default",
      }}
    >
      {/* OUTER GLOW */}
      {active && (
        <>
          <div
            style={{
              position: "absolute",

              top: -90,
              left: "50%",

              transform: "translateX(-50%)",

              width: 200,
              height: 200,

              borderRadius: "50%",

              background: trophy.colors.glow,

              opacity: 0.18,

              filter: "blur(60px)",

              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,

              background: `
                radial-gradient(
                  circle at top,
                  rgba(255,255,255,.12),
                  transparent 35%
                )
              `,

              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* SHINE */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          overflow: "hidden",

          borderRadius: 32,

          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",

            top: -120,
            left: -20,

            width: 80,
            height: 400,

            background: "rgba(255,255,255,.08)",

            transform: "rotate(22deg)",
          }}
        />
      </div>

      {/* UNLOCKED */}
      {justUnlocked && (
        <div
          style={{
            position: "absolute",

            top: 12,
            left: "50%",

            transform: "translateX(-50%)",

            padding: "5px 12px",

            borderRadius: 999,

            background: `
              linear-gradient(
                180deg,
                ${trophy.colors.border},
                ${trophy.colors.glow}
              )
            `,

            color: "#fff",

            fontSize: 9,
            fontWeight: 900,

            letterSpacing: ".08em",

            boxShadow: `
              0 10px 20px ${trophy.colors.glow}66
            `,

            zIndex: 10,
          }}
        >
          ✦ DESBLOQUEADO
        </div>
      )}

      {/* COUNT */}
      <div
        style={{
          position: "absolute",

          top: 12,
          right: 12,

          width: 32,
          height: 32,

          borderRadius: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: active
            ? `
              linear-gradient(
                180deg,
                rgba(255,255,255,.28),
                ${trophy.colors.border}
              )
            `
            : dark
            ? "#1e293b"
            : "#e2e8f0",

          border: "2px solid rgba(255,255,255,.18)",

          color: active ? "#fff" : dark ? "#94a3b8" : "#64748b",

          fontWeight: 900,
          fontSize: 11,

          zIndex: 5,
        }}
      >
        {trophy.required.length}
      </div>

      {/* EMBLEM */}
      <div
        style={{
          position: "relative",

          marginTop: justUnlocked ? 24 : -18,

          width: 170,
          height: 190,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          transition: "all .35s ease",

          transform: hover
            ? "translateY(-8px) scale(1.04)"
            : "translateY(0px)",

          zIndex: 4,
        }}
      >
        {/* MAGIC AURA */}
        {active && (
          <>
            <div
              style={{
                position: "absolute",

                width: 120,
                height: 120,

                borderRadius: "50%",

                background: trophy.colors.glow,

                opacity: 0.22,

                filter: "blur(26px)",
              }}
            />

            <div
              style={{
                position: "absolute",

                width: 132,
                height: 132,

                borderRadius: "50%",

                border: `1px solid ${trophy.colors.glow}44`,

                opacity: 0.8,

                animation: "pulseRing 3s ease-in-out infinite",
              }}
            />
          </>
        )}

        {/* ORNAMENT BACK */}
        <div
          style={{
            position: "absolute",

            width: 150,
            height: 150,

            borderRadius: "50%",

            background: `
              radial-gradient(
                circle,
                rgba(255,255,255,.08),
                transparent 70%
              )
            `,

            filter: "blur(10px)",
          }}
        />

        {/* MAIN EMBLEM */}
        <div
          style={{
            position: "relative",

            width: 140,
            height: 140,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            transition: "all .35s ease",

            filter: active
              ? `
                drop-shadow(0 0 20px ${trophy.colors.glow})
                drop-shadow(0 10px 20px rgba(0,0,0,.45))
              `
              : "grayscale(1) brightness(.55)",

            overflow: "hidden",
          }}
        >
          <Image
            src={trophy.image}
            alt={trophy.name}
            fill
            priority

            // CORREÇÃO DO WARNING DO NEXT
            sizes="140px"

            style={{
              objectFit: "cover",

              transform: hover
                ? "scale(1.18) translateY(-4px)"
                : "scale(1)",

              transition: "all .35s ease",

              zIndex: hover ? 50 : 1,
            }}
          />
        </div>
      </div>

      {/* RARITY */}
      <div
        style={{
          marginTop: 10,

          padding: "6px 12px",

          borderRadius: 999,

          background: active
            ? trophy.colors.border + "18"
            : dark
            ? "#111827"
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

          fontSize: 9,
          fontWeight: 900,

          letterSpacing: ".14em",

          textTransform: "uppercase",

          boxShadow: active
            ? `0 0 18px ${trophy.colors.glow}22`
            : "none",

          zIndex: 4,
        }}
      >
        {rarity}
      </div>

      {/* NAME */}
      <span
        style={{
          marginTop: 14,

          fontSize: 13,
          fontWeight: 900,

          lineHeight: 1.3,

          letterSpacing: ".04em",

          textAlign: "center",

          color: active
            ? trophy.colors.text
            : dark
            ? "#64748b"
            : "#94a3b8",

          textShadow: active
            ? "0 1px 0 rgba(255,255,255,.15)"
            : "none",

          zIndex: 4,
        }}
      >
        {trophy.name}
      </span>

      {/* PARTICLES */}
      {active && (
        <>
          <div
            style={{
              position: "absolute",

              top: 70,
              left: 30,

              width: 4,
              height: 4,

              borderRadius: "50%",

              background: "#fff",

              opacity: 0.7,

              boxShadow: `0 0 10px ${trophy.colors.glow}`,

              animation: "floatParticle 3s ease-in-out infinite",
            }}
          />

          <div
            style={{
              position: "absolute",

              top: 120,
              right: 28,

              width: 3,
              height: 3,

              borderRadius: "50%",

              background: "#fff",

              opacity: 0.6,

              boxShadow: `0 0 10px ${trophy.colors.glow}`,

              animation: "floatParticle 4s ease-in-out infinite",
            }}
          />
        </>
      )}

      {/* TEXTURE */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          opacity: 0.035,

          backgroundImage: `
            radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, #fff 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, #fff 1px, transparent 1px)
          `,

          backgroundSize: "40px 40px",

          pointerEvents: "none",
        }}
      />

      {/* LOCKED */}
      {!active && (
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(to bottom, rgba(15,23,42,.20), rgba(15,23,42,.42))",

            backdropFilter: "grayscale(.4)",

            pointerEvents: "none",
          }}
        />
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }

          100% {
            transform: scale(0.95);
            opacity: 0.35;
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-10px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}