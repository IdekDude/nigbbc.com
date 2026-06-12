import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#0e0700",
          borderRadius: "40px",
          position: "relative",
        }}
      >
        {/* Gold ring */}
        <div
          style={{
            position: "absolute",
            inset: "12px",
            border: "1.5px solid rgba(201,168,76,0.35)",
            borderRadius: "28px",
          }}
        />
        <div
          style={{
            fontSize: "88px",
            fontWeight: "900",
            color: "#c9a84c",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          N
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "rgba(201,168,76,0.55)",
            letterSpacing: "0.3em",
            fontFamily: "Georgia, serif",
            marginTop: "4px",
          }}
        >
          BBC
        </div>
      </div>
    ),
    { ...size }
  );
}
