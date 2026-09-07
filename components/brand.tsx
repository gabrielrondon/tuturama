/*
  The mark: a rounded square in the canvas colour with the wordmark's braces and a single "t".
  Same face as the site (display weight 600). Used for avatars, app icons, documents.
*/
export function Mark({ size = 256, radius = 0.22 }: { size?: number; radius?: number }) {
  const r = Math.round(size * radius);
  const font = Math.round(size * 0.56);
  return (
    <div
      className="display flex items-center justify-center bg-canvas text-cream"
      style={{
        width: size,
        height: size,
        borderRadius: r,
        fontSize: font,
        lineHeight: 1,
        letterSpacing: "-0.04em",
        boxSizing: "border-box",
        border: `${Math.max(1, Math.round(size * 0.006))}px solid #42433d`,
      }}
      aria-label="Tuturama mark"
    >
      <span className="text-green" style={{ transform: "translateY(-0.04em)" }}>
        {"{"}
      </span>
      <span style={{ margin: `0 ${Math.round(size * 0.03)}px`, transform: "translateY(-0.02em)" }}>t</span>
      <span className="text-green" style={{ transform: "translateY(-0.04em)" }}>
        {"}"}
      </span>
    </div>
  );
}

export function WordmarkLarge({ size = 96 }: { size?: number }) {
  return (
    <div className="display text-cream" style={{ fontSize: size, lineHeight: 1, letterSpacing: "-0.02em" }} aria-label="Tuturama">
      <span className="text-green">{"{ "}</span>
      tuturama
      <span className="text-green">{" }"}</span>
    </div>
  );
}
