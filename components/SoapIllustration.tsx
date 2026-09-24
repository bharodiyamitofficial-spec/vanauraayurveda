type SoapTheme = {
  base: string;
  band: string;
  swirl: string;
  soft: string;
};

export default function SoapIllustration({
  theme,
  className = "",
}: {
  theme: SoapTheme;
  className?: string;
}) {
  const gradientId = `bar-${theme.base.replace("#", "")}`;

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.soft} />
          <stop offset="100%" stopColor={theme.base} />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="196" rx="72" ry="14" fill="#1f3a2e" opacity="0.08" />

      <g transform="translate(120 118) rotate(-6)">
        <rect
          x="-84"
          y="-56"
          width="168"
          height="112"
          rx="26"
          fill={`url(#${gradientId})`}
          stroke="#1f3a2e"
          strokeOpacity="0.08"
        />

        <rect
          x="-84"
          y="-14"
          width="168"
          height="30"
          fill={theme.band}
        />
        <rect x="-84" y="-14" width="168" height="3" fill="#000" opacity="0.06" />
        <rect x="-84" y="13" width="168" height="3" fill="#000" opacity="0.06" />

        <circle cx="0" cy="1" r="10" fill={theme.soft} opacity="0.9" />
        <path
          d="M0 -6 C 4 -3, 4 3, 0 7 C -4 3, -4 -3, 0 -6 Z"
          fill={theme.band}
        />

        <circle cx="-52" cy="-32" r="3.5" fill={theme.swirl} opacity="0.7" />
        <circle cx="-38" cy="-40" r="2" fill={theme.swirl} opacity="0.5" />
        <circle cx="46" cy="30" r="3" fill={theme.swirl} opacity="0.6" />
        <circle cx="58" cy="22" r="2" fill={theme.swirl} opacity="0.45" />
        <circle cx="60" cy="-34" r="2.5" fill={theme.swirl} opacity="0.5" />
      </g>
    </svg>
  );
}
