"use client";

export default function ClapperLogo() {
  return (
    <svg
      viewBox="0 0 64 56"
      width="48"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Board body */}
      <rect x="4" y="18" width="56" height="34" rx="4" fill="#1e293b" />
      <rect
        x="4"
        y="18"
        width="56"
        height="34"
        rx="4"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      {/* Lines on board */}
      <line x1="4" y1="27" x2="60" y2="27" stroke="#334155" strokeWidth="1" />
      <line x1="4" y1="36" x2="60" y2="36" stroke="#334155" strokeWidth="1" />
      <line x1="4" y1="45" x2="60" y2="45" stroke="#334155" strokeWidth="1" />
      {/* Top clapper base */}
      <rect x="4" y="10" width="56" height="10" rx="3" fill="#f59e0b" />
      {/* Clapper stripes (diagonal black/white) */}
      <clipPath id="cl">
        <rect x="4" y="10" width="56" height="10" rx="3" />
      </clipPath>
      <g clipPath="url(#cl)">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <polygon
            key={i}
            points={`${4 + i * 14},10 ${4 + i * 14 + 10},10 ${
              4 + i * 14 + 4
            },20 ${4 + i * 14 - 6},20`}
            fill={i % 2 === 0 ? "#111" : "#f59e0b"}
          />
        ))}
      </g>
      {/* Hinge */}
      <rect x="4" y="8" width="56" height="4" rx="2" fill="#94a3b8" />
      {/* Clapper arm (angled, open) */}
      <rect
        x="4"
        y="2"
        width="56"
        height="8"
        rx="3"
        fill="#1e293b"
        stroke="#f59e0b"
        strokeWidth="1.5"
        transform="rotate(-12 32 6)"
      />
      <clipPath id="cl2">
        <rect
          x="4"
          y="2"
          width="56"
          height="8"
          rx="3"
          transform="rotate(-12 32 6)"
        />
      </clipPath>
      <g clipPath="url(#cl2)">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <polygon
            key={i}
            points={`${4 + i * 14},2 ${4 + i * 14 + 10},2 ${
              4 + i * 14 + 4
            },10 ${4 + i * 14 - 6},10`}
            fill={i % 2 === 0 ? "#111" : "#f59e0b"}
            transform="rotate(-12 32 6)"
          />
        ))}
      </g>
      {/* Red circle (record dot) */}
      <circle cx="50" cy="36" r="5" fill="#ef4444" opacity="0.9" />
      <circle cx="50" cy="36" r="2.5" fill="#fca5a5" />
    </svg>
  );

}
