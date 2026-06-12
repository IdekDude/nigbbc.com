import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NIGBBC — Nicaraguan Great Big Brown Cigars";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          overflow: "hidden",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "16px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(201,168,76,0.1)",
            borderRadius: "12px",
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,31,0,0.6) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
          <span
            style={{
              color: "#c9a84c",
              fontSize: "14px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            Est. Nicaragua
          </span>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
        </div>

        {/* Main wordmark */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: "900",
            color: "#f5f0e8",
            letterSpacing: "0.15em",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          NIGBBC
        </div>

        {/* Gold underline */}
        <div
          style={{
            width: "400px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#c9a84c",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Nicaraguan Great Big Brown Cigars
        </div>

        {/* SVG Cigar */}
        <svg
          width="500"
          height="60"
          viewBox="0 0 400 60"
          style={{ marginBottom: "32px" }}
        >
          <rect x="10" y="18" width="340" height="24" rx="12" fill="#6b3a1f" />
          <rect x="10" y="18" width="340" height="12" rx="8" fill="rgba(255,255,255,0.05)" />
          <rect x="100" y="16" width="70" height="28" rx="2" fill="#b8892a" />
          <rect x="100" y="16" width="70" height="14" rx="2" fill="#e8c96a" opacity="0.4" />
          <ellipse cx="350" cy="30" rx="20" ry="12" fill="#4a2a0a" />
          <ellipse cx="10" cy="30" rx="12" ry="10" fill="#ff6b1a" opacity="0.8" />
          <ellipse cx="10" cy="30" rx="6" ry="6" fill="#ffaa44" />
          <ellipse cx="10" cy="30" rx="3" ry="3" fill="#ffffff" opacity="0.6" />
          <rect x="0" y="24" width="8" height="12" rx="4" fill="#aaaaaa" opacity="0.7" />
        </svg>

        {/* Tagline */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(245,240,232,0.45)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          Bold. Brown. Unforgettable.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "60px",
            fontSize: "14px",
            color: "rgba(201,168,76,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          nigbbc.com
        </div>
      </div>
    ),
    { ...size }
  );
}
