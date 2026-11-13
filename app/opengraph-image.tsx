import { ImageResponse } from "next/og";

// Link preview shown when the site is shared (LinkedIn, WhatsApp, Slack, X…)
export const alt = "Pranav Sunil Raja — Data & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const YELLOW = "#facc15";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07080a",
          padding: "72px 80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#a1a1aa" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#34d399" }} />
          Currently at SymphonyAI
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            Pranav&nbsp;<span style={{ color: YELLOW }}>Sunil Raja</span>
          </div>
          <div style={{ fontSize: 34, color: "#d4d4d8" }}>
            Data Science · Analytics · Engineering · AI
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#a1a1aa" }}>
          <div style={{ display: "flex" }}>MSc Data Science · SAGE Publishing, UK</div>
          <div style={{ display: "flex", width: 120, height: 8, borderRadius: 999, background: YELLOW }} />
        </div>
      </div>
    ),
    size
  );
}
