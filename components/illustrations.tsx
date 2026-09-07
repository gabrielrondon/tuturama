/*
  Thin-stroke line illustrations, one per line of business, drawn in the line's hue.
  Follows the style reference: strokes, not fills; no shadows; colour as taxonomy.
*/

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Embedded: a perimeter, a team inside it, one seat marked. */
export function EmbeddedArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-hidden="true" {...base}>
      <rect x="12" y="18" width="296" height="184" rx="22" />
      <rect x="40" y="46" width="240" height="128" rx="14" strokeDasharray="4 6" />
      <circle cx="96" cy="110" r="14" />
      <circle cx="160" cy="110" r="14" />
      <circle cx="224" cy="110" r="14" fill="currentColor" fillOpacity="0.18" />
      <path d="M224 96v-24M216 80l8-8 8 8" />
      <path d="M60 150h200" />
      <path d="M74 150v12M118 150v12M162 150v12M206 150v12M250 150v12" />
    </svg>
  );
}

/* Products: a waveform going through a layer and coming out as a decision. */
export function ProductsArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-hidden="true" {...base}>
      <path d="M14 110h18l10-40 12 80 12-60 10 40 12-20 10 20 12-90 12 110 10-60 10 20h18" />
      <rect x="176" y="62" width="70" height="96" rx="12" />
      <path d="M190 84h42M190 100h42M190 116h28M190 132h36" strokeOpacity="0.6" />
      <path d="M246 110h24" />
      <path d="M270 110l8-6v12z" fill="currentColor" />
      <circle cx="296" cy="110" r="10" />
      <path d="M292 110l3 3 6-6" />
    </svg>
  );
}

/* Upstream: a branch that leaves, gets reviewed, and lands in main. */
export function UpstreamArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-hidden="true" {...base}>
      <path d="M40 170h240" />
      <circle cx="70" cy="170" r="7" />
      <circle cx="140" cy="170" r="7" />
      <circle cx="250" cy="170" r="7" fill="currentColor" fillOpacity="0.18" />
      <path d="M140 170c0-60 30-90 60-90h30" />
      <circle cx="200" cy="80" r="7" />
      <circle cx="236" cy="80" r="7" />
      <path d="M236 80c14 0 14 90 14 90" />
      <path d="M186 44h28l6 6v30h-34z" strokeOpacity="0.7" />
      <path d="M192 56h20M192 64h14" strokeOpacity="0.5" />
      <path d="M262 60l8 8 14-16" />
    </svg>
  );
}

/* Agents: an agent, a gate with policy, a signed ledger. */
export function AgentsArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-hidden="true" {...base}>
      <rect x="18" y="80" width="64" height="60" rx="12" />
      <circle cx="40" cy="104" r="4" fill="currentColor" />
      <circle cx="60" cy="104" r="4" fill="currentColor" />
      <path d="M38 124h24" />
      <path d="M82 110h40" />
      <path d="M122 110l8-6v12z" fill="currentColor" />
      <path d="M150 62v96M170 62v96" />
      <path d="M140 62h40M140 158h40" />
      <path d="M150 88h20M150 110h20M150 132h20" strokeOpacity="0.7" />
      <rect x="146" y="98" width="28" height="24" rx="4" fill="currentColor" fillOpacity="0.18" />
      <path d="M180 110h40" />
      <path d="M220 110l8-6v12z" fill="currentColor" />
      <rect x="240" y="70" width="64" height="80" rx="8" />
      <path d="M252 88h40M252 102h40M252 116h28" strokeOpacity="0.6" />
      <path d="M278 138c6-10 14-10 20 0" />
    </svg>
  );
}
