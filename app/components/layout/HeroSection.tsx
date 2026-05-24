type HeroSectionProps = {
    dark: boolean;
    correctCount: number;
    total: number;
  };
  
  export default function HeroSection({
    dark,
    correctCount,
    total,
  }: HeroSectionProps) {
    return (
      <div
        style={{
          background: dark
            ? "linear-gradient(90deg,#0f172a 0%,#1e1a00 50%,#0f172a 100%)"
            : "linear-gradient(90deg,#fff7ed 0%,#fffbeb 50%,#fff7ed 100%)",
          borderBottom: `1px solid ${dark ? "#292524" : "#fde68a"}`,
          padding: "10px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 16,
            color: dark ? "#a16207" : "#92400e",
            fontFamily: "system-ui",
          }}
        >
          🎬 Ouça a música, descubra o filme, desbloqueie os troféus!
          <br />
          {correctCount} de {total} acertadas
        </p>
      </div>
    );
  }