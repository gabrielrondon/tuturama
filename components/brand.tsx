import { FlagEE, FlagEU } from "@/components/flags";

/*
  The mark: a rounded square with the wordmark's braces and a single "t".
  Same face as the site (display weight 600). Used for avatars, app icons, documents.
  Dark variant for screens; cream variant for print and light documents.
*/
export function Mark({
  size = 256,
  radius = 0.22,
  variant = "dark",
}: {
  size?: number;
  radius?: number;
  variant?: "dark" | "cream";
}) {
  const r = Math.round(size * radius);
  const font = Math.round(size * 0.56);
  const dark = variant === "dark";
  return (
    <div
      className="display flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: r,
        fontSize: font,
        lineHeight: 1,
        letterSpacing: "-0.04em",
        boxSizing: "border-box",
        background: dark ? "#0e100f" : "#fffce1",
        color: dark ? "#fffce1" : "#0e100f",
        border: `${Math.max(1, Math.round(size * 0.006))}px solid ${dark ? "#42433d" : "#d9d5b8"}`,
      }}
      aria-label="Tuturama mark"
    >
      <span style={{ color: dark ? "#abff84" : "#1f7a2e", transform: "translateY(-0.04em)" }}>{"{"}</span>
      <span style={{ margin: `0 ${Math.round(size * 0.03)}px`, transform: "translateY(-0.02em)" }}>t</span>
      <span style={{ color: dark ? "#abff84" : "#1f7a2e", transform: "translateY(-0.04em)" }}>{"}"}</span>
    </div>
  );
}

export function WordmarkLarge({ size = 96, variant = "dark" }: { size?: number; variant?: "dark" | "cream" }) {
  const dark = variant === "dark";
  return (
    <div
      className="display"
      style={{ fontSize: size, lineHeight: 1, letterSpacing: "-0.02em", color: dark ? "#fffce1" : "#0e100f" }}
      aria-label="Tuturama"
    >
      <span style={{ color: dark ? "#abff84" : "#1f7a2e" }}>{"{ "}</span>
      tuturama
      <span style={{ color: dark ? "#abff84" : "#1f7a2e" }}>{" }"}</span>
    </div>
  );
}

/*
  LinkedIn company banner. Native size 1128 x 191; rendered at `scale` for a crisp export.
  Keep the text inside the left two thirds: LinkedIn crops the sides on small screens.
*/
export function LinkedInBanner({ scale = 2 }: { scale?: number }) {
  const w = 1128 * scale;
  const h = 191 * scale;
  const s = (n: number) => `${n * scale}px`;
  return (
    <div
      className="display relative overflow-hidden"
      style={{ width: w, height: h, background: "#0e100f", color: "#fffce1" }}
      aria-label="Tuturama LinkedIn banner"
    >
      <div
        className="flourish flourish-emerald"
        style={{ right: s(-60), top: s(-160), width: s(420), height: s(420), filter: `blur(${s(60)})`, opacity: 0.55 }}
      />
      <div
        className="flourish flourish-crush"
        style={{ right: s(220), top: s(80), width: s(260), height: s(260), filter: `blur(${s(60)})`, opacity: 0.28 }}
      />
      {/* Text lives in the top half only: LinkedIn overlays the company logo on the bottom-left quadrant. */}
      <div className="relative" style={{ padding: `${s(24)} ${s(48)} 0` }}>
        <div className="annotation" style={{ fontSize: s(14), color: "#abff84", fontWeight: 400 }}>
          {"{ software factory }"}
        </div>
        <div style={{ fontSize: s(38), lineHeight: 1, letterSpacing: "-0.02em", marginTop: s(8), whiteSpace: "nowrap" }}>
          Software factory for systems that cannot break.
        </div>
      </div>
      <div
        className="absolute flex items-center"
        style={{ right: s(48), bottom: s(30), gap: s(10), fontSize: s(15), fontWeight: 400, color: "rgba(255,252,225,0.7)" }}
      >
        <div style={{ width: s(30), height: s(22) }}>
          <FlagEE className="h-full w-full" title="Eesti" />
        </div>
        <div style={{ width: s(30), height: s(22) }}>
          <FlagEU className="h-full w-full" title="European Union" />
        </div>
        <span>tuturama.com</span>
      </div>
    </div>
  );
}
