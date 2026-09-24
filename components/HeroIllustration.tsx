function Bar({
  transform,
  base,
  soft,
  band,
  swirl,
  id,
}: {
  transform: string;
  base: string;
  soft: string;
  band: string;
  swirl: string;
  id: string;
}) {
  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={soft} />
          <stop offset="100%" stopColor={base} />
        </linearGradient>
      </defs>
      <rect
        x="-90"
        y="-60"
        width="180"
        height="120"
        rx="28"
        fill={`url(#${id})`}
        stroke="#1f3a2e"
        strokeOpacity="0.08"
      />
      <rect x="-90" y="-15" width="180" height="32" fill={band} />
      <rect x="-90" y="-15" width="180" height="3" fill="#000" opacity="0.06" />
      <rect x="-90" y="14" width="180" height="3" fill="#000" opacity="0.06" />
      <circle cx="0" cy="1" r="11" fill={soft} opacity="0.9" />
      <path d="M0 -7 C 4.5 -3.5, 4.5 3.5, 0 8 C -4.5 3.5, -4.5 -3.5, 0 -7 Z" fill={band} />
      <circle cx="-56" cy="-34" r="3.5" fill={swirl} opacity="0.6" />
      <circle cx="60" cy="30" r="3" fill={swirl} opacity="0.55" />
      <circle cx="64" cy="-32" r="2.5" fill={swirl} opacity="0.45" />
    </g>
  );
}

export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 560" className={className} role="img" aria-hidden="true">
      <defs>
        <radialGradient id="hero-blob" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f3ead8" />
          <stop offset="100%" stopColor="#dce8d6" />
        </radialGradient>
      </defs>

      <circle cx="280" cy="280" r="250" fill="url(#hero-blob)" />
      <circle cx="280" cy="280" r="250" fill="none" stroke="#bf9b30" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* leaf branch, top left */}
      <g opacity="0.5" transform="translate(90 120) rotate(-18)">
        <path d="M0 60 C 10 20, 40 -10, 90 -20" fill="none" stroke="#5b7a4f" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="30" cy="18" rx="16" ry="8" fill="#7c9a78" transform="rotate(-30 30 18)" />
        <ellipse cx="58" cy="0" rx="16" ry="8" fill="#7c9a78" transform="rotate(-15 58 0)" />
        <ellipse cx="84" cy="-16" rx="14" ry="7" fill="#a9c1a2" transform="rotate(-5 84 -16)" />
      </g>

      {/* leaf branch, bottom right */}
      <g opacity="0.45" transform="translate(430 430) rotate(160)">
        <path d="M0 60 C 10 20, 40 -10, 90 -20" fill="none" stroke="#5b7a4f" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="30" cy="18" rx="16" ry="8" fill="#7c9a78" transform="rotate(-30 30 18)" />
        <ellipse cx="58" cy="0" rx="16" ry="8" fill="#7c9a78" transform="rotate(-15 58 0)" />
      </g>

      <Bar
        id="hero-bar-rose"
        transform="translate(190 210) rotate(-16)"
        base="#f3d9d9"
        soft="#fbeeee"
        band="#b5613f"
        swirl="#e0a3a3"
      />
      <Bar
        id="hero-bar-green"
        transform="translate(370 220) rotate(12)"
        base="#e4efd6"
        soft="#f1f6e9"
        band="#5b7a4f"
        swirl="#8fae72"
      />
      <Bar
        id="hero-bar-gold"
        transform="translate(280 340) rotate(-4)"
        base="#f3e2bf"
        soft="#faf1de"
        band="#bf9b30"
        swirl="#e0c266"
      />

      {/* sparkle accents */}
      <g fill="#bf9b30">
        <path d="M462 150 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5 Z" opacity="0.8" />
        <path d="M96 380 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4 Z" opacity="0.6" />
        <circle cx="120" cy="200" r="4" opacity="0.5" />
        <circle cx="440" cy="400" r="3.5" opacity="0.5" />
      </g>
    </svg>
  );
}
