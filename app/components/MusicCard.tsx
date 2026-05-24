"use client";
import { useRef, useState, type ChangeEvent } from "react";
import { MusicCardProps } from "../types/types";
import { normalizeText } from "../utils/normalize";

export default function MusicCard({
  song,
  currentlyPlayingRef,
  onCorrect,
  dark,
}: MusicCardProps) {
  const [status, setStatus] = useState("idle");
  const [input, setInput] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
  
    const isCorrect = song.title.some(
      (t) => normalizeText(t) === normalizeText(val)
    );
  
    const maxTitleLength = Math.max(...song.title.map((t) => t.length));
  
    if (isCorrect) {
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
        : "#f0fdf4"
      : status === "wrong"
      ? D
        ? "#3b0a0a"
        : "#fff5f5"
      : isPlaying
      ? D
        ? "#0f1f3d"
        : "#eff6ff"
      : D
      ? "#1e293b"
      : "#ffffff";

  const cardBorder =
    status === "correct"
      ? "#22c55e"
      : status === "wrong"
      ? "#ef4444"
      : isPlaying
      ? "#3b82f6"
      : D
      ? "#334155"
      : "#e2e8f0";

  const waveColor =
    status === "correct"
      ? "#22c55e"
      : status === "wrong"
      ? "#ef4444"
      : isPlaying
      ? "#3b82f6"
      : D
      ? "#334155"
      : "#cbd5e1";

  return (
    <div
      style={{
        border: `1.5px solid ${cardBorder}`,
        borderRadius: 16,
        padding: "16px",
        background: cardBg,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: status === "correct" ? "scale(1.02)" : "scale(1)",
        boxShadow: isPlaying
          ? `0 4px 24px #3b82f622`
          : status === "correct"
          ? `0 4px 20px #22c55e22`
          : "0 1px 4px #0001",
      }}
    >
      {/* Status badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
          minHeight: 22,
        }}
      >
        {status === "correct" && (
          <span
            style={{
              background: D ? "#14532d" : "#dcfce7",
              border: `1px solid #22c55e`,
              borderRadius: 20,
              padding: "2px 10px",
              fontSize: 11,
              fontWeight: 700,
              color: D ? "#86efac" : "#15803d",
              animation: "badgePop 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            ✓ {song.artist}
          </span>
        )}
        {status === "wrong" && (
          <span
            style={{
              background: D ? "#450a0a" : "#fee2e2",
              border: `1px solid #ef4444`,
              borderRadius: 20,
              padding: "2px 10px",
              fontSize: 11,
              fontWeight: 700,
              color: D ? "#fca5a5" : "#b91c1c",
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
          gap: 3,
          height: 34,
          marginBottom: 12,
          justifyContent: "center",
        }}
      >
        {[8, 18, 12, 24, 10, 20, 14, 26, 16].map((h, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: isPlaying ? `${h}px` : "5px",
              background: waveColor,
              borderRadius: 2,
              transition: `height ${0.07 + i * 0.02}s ease-in-out`,
              animation: isPlaying
                ? `wave-${i % 4} 0.5s ease-in-out infinite alternate`
                : "none",
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
          height: 40,
          borderRadius: 10,
          marginBottom: 10,
          cursor: status === "correct" ? "not-allowed" : "pointer",
          background:
            status === "correct"
              ? D
                ? "#15803d33"
                : "#dcfce7"
              : isPlaying
              ? D
                ? "#ef444420"
                : "#fee2e2"
              : D
              ? "#2563eb"
              : "#2563eb",
          color:
            status === "correct"
              ? D
                ? "#4ade80"
                : "#15803d"
              : isPlaying
              ? D
                ? "#ef4444"
                : "#dc2626"
              : "#fff",
          fontSize: 13,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          transition: "all 0.2s",
          letterSpacing: "0.04em",
          border:
            status === "correct"
              ? `1px solid ${D ? "#15803d" : "#86efac"}`
              : isPlaying
              ? `1px solid ${D ? "#ef4444" : "#fca5a5"}`
              : "none",
        }}
      >
        <span style={{ fontSize: 16, lineHeight: 1 }}>
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
          height: 38,
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
              : "#f8fafc",
          border: `1.5px solid ${
            status === "correct"
              ? "#22c55e"
              : status === "wrong"
              ? "#ef4444"
              : D
              ? "#334155"
              : "#e2e8f0"
          }`,
          borderRadius: 8,
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
              ? "#e2e8f0"
              : "#1e293b",
          fontSize: 13,
          padding: "0 12px",
          outline: "none",
          transition: "all 0.3s",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}
