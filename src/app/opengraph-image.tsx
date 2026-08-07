import { ImageResponse } from "next/og";

export const alt = "Musa Musa Kannike — Fullstack Developer, Codiac";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0A0E11",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              background: "#00FF66",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 28,
              color: "#000",
            }}
          >
            MK
          </div>
          <span style={{ color: "#00FF66", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
            CODIAC
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          <span>I build things</span>
          <span>
            that actually <span style={{ color: "#00FF66" }}>work.</span>
          </span>
        </div>
        <div style={{ display: "flex", color: "#A3A3A3", fontSize: 28, marginTop: 32 }}>
          Musa Musa Kannike — Fullstack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
