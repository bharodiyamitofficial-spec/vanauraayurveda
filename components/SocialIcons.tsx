// lucide-react no longer ships brand/social glyphs, so these are small
// hand-drawn stand-ins kept visually consistent with the lucide icon set.
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.84.23-1.4 1.44-1.4h1.54V5.1C16.99 5.03 16.1 5 15.06 5c-2.17 0-3.66 1.32-3.66 3.76v2.15H9v2.9h2.4V21" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.7 9.6v4.8l4.3-2.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
