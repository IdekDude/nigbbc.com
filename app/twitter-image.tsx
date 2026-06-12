import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NIGBBC — Nicaraguan Great Big Brown Cigars";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e0700 0%, #1a0d00 50%, #0e0700 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,31,0,0.5) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div style={{ fontSize: "100px", fontWeight: "900", color: "#f5f0e8", letterSpacing: "0.15em", lineHeight: 1 }}>
          NIGBBC
        </div>
        <div style={{ width: "360px", height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", margin: "16px 0" }} />
        <div style={{ fontSize: "18px", color: "#c9a84c", letterSpacing: "0.4em", textTransform: "uppercase" }}>
          Nicaraguan Great Big Brown Cigars
        </div>
        <div style={{ fontSize: "15px", color: "rgba(245,240,232,0.4)", fontStyle: "italic", marginTop: "20px" }}>
          Bold. Brown. Unforgettable.
        </div>
      </div>
    ),
    { ...size }
  );
}
