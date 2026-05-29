import TrophyCard from ".././TrophyCard";
import { Trophy } from "../../types/types";

type TrophyShelfProps = {
  trophies: Trophy[];
  dark: boolean;
  justUnlocked: Set<string>;
  isTrophyActive: (trophy: Trophy) => boolean;
  correctIds: Set<number>;
};

export default function TrophyShelf({
  trophies,
  dark,
  justUnlocked,
  isTrophyActive,
  correctIds,
}: TrophyShelfProps) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2
        style={{
          margin: "0 0 12px",
          fontSize: 12,
          fontWeight: 700,
          color: dark ? "#475569" : "#94a3b8",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "system-ui",
          textAlign: "center",
        }}
      >
        🏆 Troféus
      </h2>

      <div className="trophy-row">
        {trophies.map((trophy) => (
          <TrophyCard
            key={trophy.id}
            trophy={trophy}
            active={isTrophyActive(trophy)}
            justUnlocked={justUnlocked.has(trophy.id)}
            dark={dark}
            correctIds={correctIds}
          />
        ))}
      </div>
    </section>
  );
}