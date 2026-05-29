"use client";

import React, { useRef, useState, useEffect, type ChangeEvent } from "react";
import { MusicCardProps } from "../types/types";
import { normalizeText } from "../utils/normalize";

function MusicCard({
  song,
  currentlyPlayingRef,
  onCorrect,
  dark,
  isCorrect,
  isHintUsed,
  onUseHint,
}: MusicCardProps) {
  const [status, setStatus] = useState(() => (isCorrect ? "correct" : "idle"));
  const [input, setInput] = useState(() => (isCorrect ? song.title[0] : ""));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintProgress, setHintProgress] = useState(100);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    if (isCorrect) {
      setStatus("correct");
      setInput(song.title[0]);
      setShowHint(false);
    } else {
      setStatus("idle");
      setInput("");
      setIsPlaying(false);
    }
  }, [isCorrect, song.title]);


  // TIMER DA DICA
  useEffect(() => {
    if (showHint) {
      const duration = 15000;
      const startedAt = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startedAt;
        const remaining = Math.max(0, duration - elapsed);
        const pct = (remaining / duration) * 100;

        setHintProgress(pct);

        if (remaining <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setShowHint(false);
          setHintProgress(0);
          onUseHint(); 
        }
      }, 50);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [showHint]);


  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (status === "correct") return;

    if (!audioRef.current) {
      audioRef.current = new Audio(song.audio);

      audioRef.current.onended = () => {
        setIsPlaying(false);

        if (currentlyPlayingRef.current === stopPlayback) {
          currentlyPlayingRef.current = null;
        }
      };
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      setIsPlaying(false);

      if (currentlyPlayingRef.current === stopPlayback) {
        currentlyPlayingRef.current = null;
      }

      return;
    }

    if (
      currentlyPlayingRef.current &&
      currentlyPlayingRef.current !== stopPlayback
    ) {
      currentlyPlayingRef.current();
    }

    currentlyPlayingRef.current = stopPlayback;

    audioRef.current.play();

    setIsPlaying(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setInput(val);

    if (status === "correct") return;

    const answerIsCorrect = song.title.some(
      (t) => normalizeText(t) === normalizeText(val)
    );

    const maxTitleLength = Math.max(...song.title.map((t) => t.length));

    if (answerIsCorrect) {
      setStatus("correct");

      if (currentlyPlayingRef.current === stopPlayback) {
        currentlyPlayingRef.current = null;
      }

      onCorrect(song.id);
    } else if (val.length >= maxTitleLength) {
      setStatus("wrong");
    } else {
      setStatus("idle");
    }
  };

  const D = dark;

  const cardBg =
    status === "correct"
      ? D
        ? "#052e16"
        : "#ecfdf5"
      : status === "wrong"
      ? D
        ? "#450a0a"
        : "#fee2e2"
      : isPlaying
      ? D
        ? "#1e3a8a"
        : "#dbeafe"
      : D
      ? "#1e293b"
      : "#eff6ff";

  const cardBorder =
    status === "correct"
      ? "#22c55e"
      : status === "wrong"
      ? "#ef4444"
      : isPlaying
      ? "#60a5fa"
      : "#2563eb";

  const waveColor =
    status === "correct"
      ? "#22c55e"
      : status === "wrong"
      ? "#ef4444"
      : isPlaying
      ? "#60a5fa"
      : "#2563eb";

  return (
    <div
      style={{
        width: 230,
        aspectRatio: "3 / 4",

        border: `1px solid ${cardBorder}`,

        borderRadius: 28,

        padding: "18px 16px",

        background:
          status === "correct"
            ? `
              linear-gradient(
                180deg,
                ${D ? "#14532d" : "#dcfce7"} 0%,
                ${cardBg} 100%
              )
            `
            : status === "wrong"
            ? `
              linear-gradient(
                180deg,
                ${D ? "#7f1d1d" : "#fecaca"} 0%,
                ${cardBg} 100%
              )
            `
            : isPlaying
            ? `
              linear-gradient(
                180deg,
                ${D ? "#1d4ed8" : "#bfdbfe"} 0%,
                ${cardBg} 100%
              )
            `
            : `
              linear-gradient(
                180deg,
                ${D ? "#334155" : "#dbeafe"} 0%,
                ${cardBg} 100%
              )
            `,

        position: "relative",
        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        transform:
          status === "correct"
            ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.03)"
            : "perspective(1000px) rotateX(4deg) rotateY(-5deg)",

        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",

        boxShadow:
          status === "correct"
            ? "0 18px 40px rgba(34,197,94,0.35)"
            : status === "wrong"
            ? "0 18px 40px rgba(239,68,68,0.30)"
            : isPlaying
            ? "0 18px 40px rgba(59,130,246,0.35)"
            : "0 14px 30px rgba(37,99,235,0.20)",

        cursor: "pointer",
      }}
    >
      {/* BIG BACKGROUND NUMBER */}
      <div
        style={{
          position: "absolute",

          right: 10,
          top: "35%",

          transform: "translateY(-50%) skewX(-8deg)",

          fontSize: 140,
          fontWeight: 1000,

          lineHeight: 1,

          letterSpacing: "-0.08em",

          color:
            status === "correct"
              ? "rgba(34,197,94,.12)"
              : status === "wrong"
              ? "rgba(239,68,68,.10)"
              : isPlaying
              ? "rgba(96,165,250,.12)"
              : D
              ? "rgba(255,255,255,.05)"
              : "rgba(0,0,0,.05)",

          pointerEvents: "none",
          userSelect: "none",

          zIndex: 0,

          filter: "blur(.3px)",

          fontStyle: "italic",
        }}
      >
        {String(song.id).padStart(2, "0")}
      </div>

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,

          width: 120,
          height: 120,

          borderRadius: "50%",

          background:
            status === "correct"
              ? "#22c55e55"
              : status === "wrong"
              ? "#ef444455"
              : isPlaying
              ? "#60a5fa66"
              : "#2563eb44",

          filter: "blur(30px)",

          zIndex: 1,
        }}
      />

      {/* Sticker */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          borderRadius: 28,

          border: "3px solid rgba(255,255,255,0.15)",

          pointerEvents: "none",

          zIndex: 2,
        }}
      />

      {/* Shine */}
      <div
        style={{
          position: "absolute",

          top: -100,
          left: -40,

          width: 120,
          height: 300,

          background: "rgba(255,255,255,0.12)",

          transform: "rotate(25deg)",

          zIndex: 1,
        }}
      />

      {/* ÁREA DA DICA */}
      <div
        onClick={() => {
          if (status !== "correct" && !showHint && !isHintUsed) {
            setShowHint(true);
            setHintProgress(100);
            onUseHint();
          }
        }}
        style={{
          position: "relative",

          width: "100%",
          height: 82,

          cursor:
            isHintUsed || showHint || status === "correct"
              ? "default"
              : "pointer",

          zIndex: 1,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,

            borderRadius: "50%",

            background: `
              linear-gradient(
                135deg,
                ${
                  status === "correct"
                    ? "#22c55e"
                    : status === "wrong"
                    ? "#ef4444"
                    : isPlaying
                    ? "#3b82f6"
                    : "#2563eb"
                },
                ${
                  status === "correct"
                    ? D
                      ? "#052e16"
                      : "#dcfce7"
                    : status === "wrong"
                    ? D
                      ? "#450a0a"
                      : "#fee2e2"
                    : isPlaying
                    ? D
                      ? "#1e3a8a"
                      : "#dbeafe"
                    : D
                    ? "#0f172a"
                    : "#ffffff"
                }
              )
            `,

            border: `2px solid ${
              status === "correct"
                ? "#22c55e"
                : status === "wrong"
                ? "#ef4444"
                : isPlaying
                ? "#60a5fa"
                : "#2563eb"
            }`,

            boxShadow:
              status === "correct"
                ? "0 10px 24px rgba(34,197,94,.35)"
                : status === "wrong"
                ? "0 10px 24px rgba(239,68,68,.35)"
                : isPlaying
                ? "0 10px 24px rgba(59,130,246,.35)"
                : "0 10px 24px rgba(37,99,235,.25)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: 18,

            position: "relative",

            zIndex: 10,

            transform: "rotate(-4deg)",

            opacity: isHintUsed ? 0.45 : 1,

            transition: "all .35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {isHintUsed ? "🔒" : "🎵"}
        </div>

        {/* Texto da dica */}
        <div
          style={{
            position: "absolute",

            top: 5,
            left: 34,

            zIndex: 1,

            maxWidth: showHint ? 170 : 0,

            opacity: showHint ? 1 : 0,

            transform: showHint ? "translateX(0)" : "translateX(-30px)",

            transition:
              "max-width .65s cubic-bezier(0.34,1.56,0.64,1), opacity .35s ease, transform .45s ease",

            overflow: "hidden",

            pointerEvents: "none",
          }}
        >
          <div
            style={{
              padding: "10px 7px 1px 7px",

              borderRadius: 20,

              background:
                status === "correct"
                  ? `
                    linear-gradient(
                      180deg,
                      ${D ? "#14532d" : "#dcfce7"} 0%,
                      ${D ? "#052e16" : "#f0fdf4"} 100%
                    )
                  `
                  : status === "wrong"
                  ? `
                    linear-gradient(
                      180deg,
                      ${D ? "#7f1d1d" : "#fecaca"} 0%,
                      ${D ? "#450a0a" : "#fff5f5"} 100%
                    )
                  `
                  : isPlaying
                  ? `
                    linear-gradient(
                      180deg,
                      ${D ? "#1d4ed8" : "#bfdbfe"} 0%,
                      ${D ? "#1e3a8a" : "#dbeafe"} 100%
                    )
                  `
                  : `
                    linear-gradient(
                      180deg,
                      ${D ? "#334155" : "#dbeafe"} 0%,
                      ${D ? "#1e293b" : "#eff6ff"} 100%
                    )
                  `,

              border: `2px solid ${
                status === "correct"
                  ? "#22c55e"
                  : status === "wrong"
                  ? "#ef4444"
                  : isPlaying
                  ? "#60a5fa"
                  : "#2563eb"
              }`,

              color:
                status === "correct"
                  ? D
                    ? "#bbf7d0"
                    : "#166534"
                  : status === "wrong"
                  ? D
                    ? "#fecaca"
                    : "#991b1b"
                  : isPlaying
                  ? D
                    ? "#dbeafe"
                    : "#1e3a8a"
                  : D
                  ? "#f8fafc"
                  : "#0f172a",

              fontSize: 12,
              fontWeight: 800,
              lineHeight: 1.4,

              boxShadow:
                status === "correct"
                  ? "0 10px 24px rgba(34,197,94,.22)"
                  : status === "wrong"
                  ? "0 10px 24px rgba(239,68,68,.22)"
                  : isPlaying
                  ? "0 10px 24px rgba(59,130,246,.22)"
                  : "0 10px 24px rgba(37,99,235,.18)",

              backdropFilter: "blur(10px)",
              whiteSpace: "normal",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              transition: "all .35s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* BARRA DE TEMPO */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,

                height: 4,

                width: `${hintProgress}%`,

                background:
                  hintProgress > 50
                    ? "#22c55e"
                    : hintProgress > 20
                    ? "#f59e0b"
                    : "#ef4444",
                transition: "width .05s linear",
                boxShadow: `
                  0 0 10px ${
                    hintProgress > 50
                      ? "#22c55e"
                      : hintProgress > 20
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                `,
              }}
            />

            {/* brilho topo */}
            <div
              style={{
                position: "absolute",

                top: 0,
                left: 0,
                right: 0,

                height: "45%",

                background:
                  "linear-gradient(180deg, rgba(255,255,255,.18), transparent)",

                pointerEvents: "none",
              }}
            />

            <span
              style={{
                position: "relative",
                zIndex: 2,

                display: "block",

                textAlign: "left",

                lineHeight: 1.5,

                letterSpacing: "0.01em",
              }}
            >
              🎬 {song.tip}
            </span>
          </div>
        </div>

        {/* Texto dica usada */}
        {isHintUsed && !showHint && (
          <div
            style={{
              position: "absolute",
              left: 48,
              top: 10,

              fontSize: 11,
              fontWeight: 800,

              color: D ? "#94a3b8" : "#64748b",

              opacity: 0.9,
            }}
          >
            Dica usada
          </div>
        )}
      </div>

      {/* Status badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          marginBottom: 12,

          minHeight: 52,

          position: "relative",

          zIndex: 15,

          padding: "0 2px",
        }}
      >
        {status === "correct" && (
          <span
            style={{
              background: D ? "#14532d" : "#dcfce7",

              border: `2px solid #22c55e`,

              borderRadius: 16,

              padding: "8px 12px",

              fontSize: 11,
              fontWeight: 800,

              color: D ? "#86efac" : "#15803d",

              transform: "rotate(-2deg)",

              width: "100%",

              textAlign: "center",

              lineHeight: 1.35,

              wordBreak: "break-word",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              minHeight: 42,

              boxShadow: "0 8px 18px rgba(34,197,94,0.22)",

              position: "relative",

              zIndex: 20,
            }}
          >
            ✓ {song.phrase}
          </span>
        )}

        {status === "wrong" && (
          <span
            style={{
              background: D ? "#450a0a" : "#fee2e2",

              border: `2px solid #ef4444`,

              borderRadius: 999,

              padding: "4px 12px",

              fontSize: 11,
              fontWeight: 800,

              color: D ? "#fca5a5" : "#b91c1c",

              transform: "rotate(2deg)",

              position: "relative",
              zIndex: 20,
            }}
          >
            ✗ Tente novamente
          </span>
        )}
      </div>

      {/* Waveform */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,

          height: 48,

          marginBottom: 18,

          justifyContent: "center",

          zIndex: 10,

          position: "relative",
        }}
      >
        {[10, 20, 14, 28, 12, 24, 16, 30, 18].map((h, i) => (
          <div
            key={i}
            style={{
              width: 6,

              height: isPlaying ? `${h}px` : "8px",

              background: waveColor,

              borderRadius: 999,

              transition: `height ${0.07 + i * 0.02}s ease-in-out`,

              animation: isPlaying
                ? `wave-${i % 4} 0.5s ease-in-out infinite alternate`
                : "none",

              boxShadow: `0 0 10px ${waveColor}55`,
            }}
          />
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleTogglePlay}
        disabled={status === "correct"}
        style={{
          width: "100%",
          height: 48,

          borderRadius: 14,

          marginBottom: 10,

          cursor: status === "correct" ? "not-allowed" : "pointer",

          background:
            status === "correct"
              ? "#22c55e"
              : status === "wrong"
              ? "#ef4444"
              : isPlaying
              ? "#3b82f6"
              : "#2563eb",

          color: "#fff",

          fontSize: 15,
          fontWeight: 800,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,

          transition: "all 0.25s ease",

          border: "none",

          position: "relative",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: 18 }}>{isPlaying ? "■" : "▶"}</span>

        {status === "correct" ? "Acertou!" : isPlaying ? "Parar" : "Ouvir"}
      </button>

      {/* Input */}
      <input
        value={input}
        onChange={handleInputChange}
        disabled={status === "correct"}
        placeholder={status === "correct" ? song.title[0] : "Nome do filme..."}
        style={{
          width: "100%",
          height: 44,

          boxSizing: "border-box",

          background:
            status === "correct"
              ? D
                ? "#052e16"
                : "#f0fdf4"
              : status === "wrong"
              ? D
                ? "#3b0a0a"
                : "#fff5f5"
              : D
              ? "#0f172a"
              : "#ffffff",

          border: `2px solid ${
            status === "correct"
              ? "#22c55e"
              : status === "wrong"
              ? "#ef4444"
              : isPlaying
              ? "#60a5fa"
              : D
              ? "#475569"
              : "#cbd5e1"
          }`,

          borderRadius: 14,

          color:
            status === "correct"
              ? D
                ? "#86efac"
                : "#15803d"
              : status === "wrong"
              ? D
                ? "#fca5a5"
                : "#b91c1c"
              : D
              ? "#f1f5f9"
              : "#0f172a",

          fontSize: 14,
          fontWeight: 700,

          padding: "0 14px",

          outline: "none",

          transition: "all 0.25s ease",

          fontFamily: "inherit",

          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08)",

          position: "relative",
          zIndex: 10,
        }}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes wave-0 {
          from {
            height: 10px;
          }
          to {
            height: 28px;
          }
        }

        @keyframes wave-1 {
          from {
            height: 14px;
          }
          to {
            height: 38px;
          }
        }

        @keyframes wave-2 {
          from {
            height: 8px;
          }
          to {
            height: 24px;
          }
        }

        @keyframes wave-3 {
          from {
            height: 12px;
          }
          to {
            height: 34px;
          }
        }
      `}</style>
    </div>
  );
}

export default React.memo(MusicCard, (prevProps, nextProps) => {
  return (
    prevProps.isCorrect === nextProps.isCorrect &&
    prevProps.isHintUsed === nextProps.isHintUsed &&
    prevProps.dark === nextProps.dark
  );
});