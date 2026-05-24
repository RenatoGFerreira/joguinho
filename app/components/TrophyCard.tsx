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
  const activeBg = dark ? trophy.colors.bgD : trophy.colors.bg;
  const inactiveBg = dark ? "#1e293b" : "#f1f5f9";
  const inactiveBorder = dark ? "#334155" : "#e2e8f0";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        padding: "10px 6px 8px",
        borderRadius: 14,
        border: `1.5px solid ${active ? trophy.colors.border : inactiveBorder}`,
        background: active ? activeBg : inactiveBg,
        transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
        transform: justUnlocked
          ? "scale(1.13)"
          : hover && active
          ? "scale(1.05)"
          : "scale(1)",
        boxShadow: active ? `0 4px 20px ${trophy.colors.glow}55` : "none",
        cursor: "default",
        position: "relative",
        width: 92,
      }}
    >
      {justUnlocked && (
        <div
          style={{
            position: "absolute",
            top: -11,
            left: "50%",
            transform: "translateX(-50%)",
            background: trophy.colors.border,
            color: "#fff",
            fontSize: 8,
            fontWeight: 800,
            padding: "2px 6px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            zIndex: 2,
            animation: "badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          ✦ DESBLOQUEADO
        </div>
      )}
      <div
        style={{
          filter: active ? "none" : "grayscale(1) brightness(0.6)",
          transition: "filter 0.4s",
        }}
      >
        {trophy.icon(active, dark)}
      </div>
      <span
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: "0.03em",
          color: active ? trophy.colors.text : dark ? "#4b5563" : "#94a3b8",
          textAlign: "center",
          lineHeight: 1.2,
          transition: "color 0.4s",
        }}
      >
        {trophy.name}
      </span>
      <div
        style={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {trophy.required.map((n) => (
          <span
            key={n}
            style={{
              fontSize: 8,
              padding: "1px 4px",
              borderRadius: 5,
              background: active
                ? trophy.colors.border + "25"
                : dark
                ? "#0f172a"
                : "#e2e8f0",
              color: active
                ? trophy.colors.border
                : dark
                ? "#374151"
                : "#94a3b8",
              fontWeight: 700,
              transition: "all 0.4s",
            }}
          >
            #{n}
          </span>
        ))}
      </div>
    </div>
  );
}
