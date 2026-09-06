import { ImageResponse } from "next/og";

export const alt = "Tuturama. Software factory for systems that cannot break.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0e100f",
          color: "#fffce1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#abff84" }}>{"{ software factory }"}</div>
        <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 0.95, letterSpacing: "-0.02em", maxWidth: 1000 }}>
          Software factory for systems that cannot break.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#fffce1" }}>
          <span>
            <span style={{ color: "#abff84" }}>{"{ "}</span>tuturama<span style={{ color: "#abff84" }}>{" }"}</span>
          </span>
          <span style={{ opacity: 0.6 }}>tuturama.com</span>
        </div>
      </div>
    ),
    size,
  );
}
