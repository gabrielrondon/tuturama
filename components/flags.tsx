/*
  Flag marks for the language switch. Not emoji: rounded, slightly bevelled tiles,
  in the spirit of app-style flag icons. Drawn by hand, no external assets.
*/

type Props = { className?: string; title?: string };

function Tile({ children, title, className }: { children: React.ReactNode; title: string; className?: string }) {
  return (
    <svg viewBox="0 0 36 26" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <clipPath id={`clip-${title.replace(/\s+/g, "-")}`}>
          <rect x="1" y="1" width="34" height="24" rx="7" />
        </clipPath>
        <linearGradient id="flag-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#clip-${title.replace(/\s+/g, "-")})`}>{children}</g>
      <rect x="1" y="1" width="34" height="24" rx="7" fill="url(#flag-gloss)" />
      <rect x="1" y="1" width="34" height="24" rx="7" fill="none" stroke="#0e100f" strokeOpacity="0.55" strokeWidth="1.5" />
    </svg>
  );
}

/* Estonia: blue, black, white. */
export function FlagEE({ className, title = "Eesti" }: Props) {
  return (
    <Tile title={title} className={className}>
      <rect x="0" y="0" width="36" height="9" fill="#0072ce" />
      <rect x="0" y="9" width="36" height="8.5" fill="#111111" />
      <rect x="0" y="17.5" width="36" height="8.5" fill="#f5f5f0" />
    </Tile>
  );
}

/* United Kingdom, simplified: field, diagonals, cross. */
export function FlagGB({ className, title = "English" }: Props) {
  return (
    <Tile title={title} className={className}>
      <rect x="0" y="0" width="36" height="26" fill="#1d3f8f" />
      <path d="M0 0L36 26M36 0L0 26" stroke="#f5f5f0" strokeWidth="5" />
      <path d="M0 0L36 26M36 0L0 26" stroke="#c8102e" strokeWidth="2" />
      <path d="M18 0v26M0 13h36" stroke="#f5f5f0" strokeWidth="7" />
      <path d="M18 0v26M0 13h36" stroke="#c8102e" strokeWidth="4" />
    </Tile>
  );
}
