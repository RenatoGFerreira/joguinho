import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoviePops",
  description: "Adivinhe músicas e desbloqueie troféus 🎵",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${spaceGrotesk.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily:
            "var(--font-space), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}