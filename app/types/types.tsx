"use client";

export type Song = {
  id: number;
  title: string[];
  phrase: string;
  tip: string;
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
  image: string;
  required: number[];
  colors: TrophyColors;
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
  isCorrect: boolean;
  isHintUsed: boolean;
  onUseHint: () => void;
};

export type SaveData = {
  version: number;
  correctIds: number[];
  usedHintIds: number[];
  dark: boolean;
  showTrophies: boolean;
  lastPlayedAt: number;
};

export type NavbarProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  pct: number;
  isComplete: boolean;
  r: number;
  circ: number;
  offset: number;
};