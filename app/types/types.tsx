"use client";
import type { ReactNode } from "react";

export type Song = {
  id: number;
  title: string[];
  artist: string;
  audio: string;
};

export type TrophyColors = {
  bg: string;
  bgD: string;
  border: string;
  glow: string;
  text: string;
};

export type Trophy = {
  id: string;
  name: string;
  required: number[];
  colors: TrophyColors;
  icon: (active: boolean, dark: boolean) => ReactNode;
};

export type Playback = {
  oscillators: OscillatorNode[];
  timer: ReturnType<typeof setTimeout>;
};

export type TrophyCardProps = {
  trophy: Trophy;
  active: boolean;
  justUnlocked: boolean;
  dark: boolean;
};

export type MusicCardProps = {
  song: Song;
  currentlyPlayingRef: React.MutableRefObject<(() => void) | null>;
  onCorrect: (songId: number) => void;
  dark: boolean;
};
