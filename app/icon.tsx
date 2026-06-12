import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0700",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "900",
            color: "#c9a84c",
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
