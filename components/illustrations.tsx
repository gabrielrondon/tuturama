/*
  Thin-stroke line illustrations, one per line of business, drawn in the line's hue.
  Motion: every stroke draws itself when the section enters the viewport (pathLength=1 +
  stroke-dashoffset, see globals.css), then a small loop runs: a signal marching, a commit
  travelling to main, a packet passing the gate. All of it stops under prefers-reduced-motion.
*/

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Embedded: a perimeter, a team inside it, one seat marked; a scan line sweeps the room. */
export function EmbeddedArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={`art ${className ?? ""}`} aria-hidden="true" {...base}>
      <rect className="draw" style={{ "--i": 0 } as React.CSSProperties} pathLength={1} x="12" y="18" width="296" height="184" rx="22" />
      <rect className="draw" style={{ "--i": 1 } as React.CSSProperties} pathLength={1} x="40" y="46" width="240" height="128" rx="14" strokeDasharray="4 6" />
      <circle className="draw" style={{ "--i": 2 } as React.CSSProperties} pathLength={1} cx="96" cy="110" r="14" />
      <circle className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} cx="160" cy="110" r="14" />
      <circle className="draw seat" style={{ "--i": 4 } as React.CSSProperties} pathLength={1} cx="224" cy="110" r="14" fill="currentColor" fillOpacity="0.18" />
      <path className="draw" style={{ "--i": 5 } as React.CSSProperties} pathLength={1} d="M224 96v-24M216 80l8-8 8 8" />
      <path className="draw" style={{ "--i": 6 } as React.CSSProperties} pathLength={1} d="M60 150h200" />
      <path className="draw" style={{ "--i": 7 } as React.CSSProperties} pathLength={1} d="M74 150v12M118 150v12M162 150v12M206 150v12M250 150v12" />
      <line className="scan" x1="40" y1="52" x2="40" y2="168" strokeOpacity="0.5" />
    </svg>
  );
}

/* Products: a waveform going through a layer and coming out as a decision; the wave keeps moving. */
export function ProductsArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={`art ${className ?? ""}`} aria-hidden="true" {...base}>
      <path
        className="draw wave"
        style={{ "--i": 0 } as React.CSSProperties}
        pathLength={1}
        d="M14 110h18l10-40 12 80 12-60 10 40 12-20 10 20 12-90 12 110 10-60 10 20h18"
      />
      <rect className="draw" style={{ "--i": 1 } as React.CSSProperties} pathLength={1} x="176" y="62" width="70" height="96" rx="12" />
      <path className="draw" style={{ "--i": 2 } as React.CSSProperties} pathLength={1} d="M190 84h42M190 100h42M190 116h28M190 132h36" strokeOpacity="0.6" />
      <path className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} d="M246 110h24" />
      <path className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} d="M270 110l8-6v12z" fill="currentColor" />
      <circle className="draw" style={{ "--i": 4 } as React.CSSProperties} pathLength={1} cx="296" cy="110" r="10" />
      <path className="draw tick" style={{ "--i": 5 } as React.CSSProperties} pathLength={1} d="M292 110l3 3 6-6" />
    </svg>
  );
}

/* Upstream: a branch that leaves, gets reviewed, and lands in main; a commit travels the branch. */
export function UpstreamArt({ className }: Props) {
  const branch = "M140 170c0-60 30-90 60-90h30c14 0 14 90 14 90";
  return (
    <svg viewBox="0 0 320 220" className={`art ${className ?? ""}`} aria-hidden="true" {...base}>
      <path className="draw" style={{ "--i": 0 } as React.CSSProperties} pathLength={1} d="M40 170h240" />
      <circle className="draw" style={{ "--i": 1 } as React.CSSProperties} pathLength={1} cx="70" cy="170" r="7" />
      <circle className="draw" style={{ "--i": 2 } as React.CSSProperties} pathLength={1} cx="140" cy="170" r="7" />
      <path className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} d={branch} />
      <circle className="draw" style={{ "--i": 4 } as React.CSSProperties} pathLength={1} cx="200" cy="80" r="7" />
      <circle className="draw" style={{ "--i": 5 } as React.CSSProperties} pathLength={1} cx="236" cy="80" r="7" />
      <path className="draw" style={{ "--i": 6 } as React.CSSProperties} pathLength={1} d="M186 44h28l6 6v30h-34z" strokeOpacity="0.7" />
      <path className="draw" style={{ "--i": 7 } as React.CSSProperties} pathLength={1} d="M192 56h20M192 64h14" strokeOpacity="0.5" />
      <path className="draw tick" style={{ "--i": 8 } as React.CSSProperties} pathLength={1} d="M262 60l8 8 14-16" />
      <circle className="draw land" style={{ "--i": 9 } as React.CSSProperties} pathLength={1} cx="250" cy="170" r="7" fill="currentColor" fillOpacity="0.18" />
      <circle className="rider" r="4" fill="currentColor" stroke="none" style={{ offsetPath: `path("${branch}")` } as React.CSSProperties} />
    </svg>
  );
}

/* Agents: an agent, a gate with policy, a signed ledger; a packet goes through the gate. */
export function AgentsArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={`art ${className ?? ""}`} aria-hidden="true" {...base}>
      <rect className="draw" style={{ "--i": 0 } as React.CSSProperties} pathLength={1} x="18" y="80" width="64" height="60" rx="12" />
      <circle cx="40" cy="104" r="4" fill="currentColor" stroke="none" className="blink" />
      <circle cx="60" cy="104" r="4" fill="currentColor" stroke="none" className="blink" />
      <path className="draw" style={{ "--i": 1 } as React.CSSProperties} pathLength={1} d="M38 124h24" />
      <path className="draw" style={{ "--i": 2 } as React.CSSProperties} pathLength={1} d="M82 110h40" />
      <path className="draw" style={{ "--i": 2 } as React.CSSProperties} pathLength={1} d="M122 110l8-6v12z" fill="currentColor" />
      <path className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} d="M150 62v96M170 62v96" />
      <path className="draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} d="M140 62h40M140 158h40" />
      <path className="draw" style={{ "--i": 4 } as React.CSSProperties} pathLength={1} d="M150 88h20M150 110h20M150 132h20" strokeOpacity="0.7" />
      <rect className="draw gate" style={{ "--i": 5 } as React.CSSProperties} pathLength={1} x="146" y="98" width="28" height="24" rx="4" fill="currentColor" fillOpacity="0.18" />
      <path className="draw" style={{ "--i": 6 } as React.CSSProperties} pathLength={1} d="M180 110h40" />
      <path className="draw" style={{ "--i": 6 } as React.CSSProperties} pathLength={1} d="M220 110l8-6v12z" fill="currentColor" />
      <rect className="draw" style={{ "--i": 7 } as React.CSSProperties} pathLength={1} x="240" y="70" width="64" height="80" rx="8" />
      <path className="draw" style={{ "--i": 8 } as React.CSSProperties} pathLength={1} d="M252 88h40M252 102h40M252 116h28" strokeOpacity="0.6" />
      <path className="draw" style={{ "--i": 9 } as React.CSSProperties} pathLength={1} d="M278 138c6-10 14-10 20 0" />
      <circle className="packet" r="4" fill="currentColor" stroke="none" style={{ offsetPath: 'path("M82 110h158")' } as React.CSSProperties} />
    </svg>
  );
}
