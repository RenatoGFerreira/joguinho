"use client";
import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { MusicCardProps } from "../types/types";
import { normalizeText } from "../utils/normalize";

export default function MusicCard({
  song,
  currentlyPlayingRef,
  onCorrect,
  dark,
  isCorrect,
}: MusicCardProps) {
  const [status, setStatus] = useState(() => (isCorrect ? "correct" : "idle"));
  const [input, setInput] = useState(() => (isCorrect ? song.title[0] : ""));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isCorrect) {
      setStatus("correct");
      setInput(song.title[0]);
    } else {
      setStatus("idle");
      setInput("");
      setIsPlaying(false);
    }
  }, [isCorrect, song.title]);

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

      stopPlayback();

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
        borderRadius: 20,
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
      {/* Glow cartoon */}
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
        }}
      />

      {/* brilho/sticker */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          border: "3px solid rgba(255,255,255,0.15)",
          pointerEvents: "none",
        }}
      />

      {/* shine */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -40,
          width: 120,
          height: 300,
          background: "rgba(255,255,255,0.12)",
          transform: "rotate(25deg)",
        }}
      />

      {/* Avatar/Icon */}
      <div
        style={{
          width: 82,
          height: 82,
          borderRadius: "50%",
          margin: "0 auto 14px auto",

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
              ${D ? "#0f172a" : "#ffffff"}
            )
          `,

          border: "1px solid white",

          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: 34,

          position: "relative",
          zIndex: 2,

          transform: "rotate(-4deg)",
        }}
      >
        🎵
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

              animation: "badgePop 0.3s cubic-bezier(0.34,1.56,0.64,1)",

              transform: "rotate(-2deg)",

              width: "100%",
              maxWidth: "100%",

              textAlign: "center",

              lineHeight: 1.35,

              wordBreak: "break-word",
              overflowWrap: "break-word",

              whiteSpace: "normal",

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
          zIndex: 2,
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

      {/* Play/Stop button */}
      <button
        onClick={handleTogglePlay}
        disabled={status === "correct"}
        style={{
          width: "100%",
          height: 48,
          borderRadius: 10,
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

          boxShadow:
            status === "correct"
              ? "0 8px 18px rgba(34,197,94,0.35)"
              : status === "wrong"
              ? "0 8px 18px rgba(239,68,68,0.35)"
              : isPlaying
              ? "0 8px 18px rgba(59,130,246,0.35)"
              : "0 8px 18px rgba(37,99,235,0.35)",

          transform: isPlaying ? "scale(1.02)" : "scale(1)",
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>
          {isPlaying ? "■" : "▶"}
        </span>

        {status === "correct" ? "Acertou!" : isPlaying ? "Parar" : "Ouvir"}
      </button>

      {/* Input */}
      <input
        value={input}
        onChange={handleInputChange}
        disabled={status === "correct"}
        placeholder={status === "correct" ? song.title[0] : "Nome da música..."}
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

          borderRadius: 10,

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
        }}
      />
    </div>
  );
}
