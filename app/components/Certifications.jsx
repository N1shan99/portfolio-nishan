"use client";

export default function Certifications() {
  return (
    <div
      id="certifications"
      style={{ padding: "80px 20px", maxWidth: "800px", margin: "auto" }}
    >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "34px",
            fontWeight: "600",
            background: "linear-gradient(90deg, #38bdf8, #6366f1)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Certifications
        </h2>

      <div style={{ lineHeight: "2" }}>
        <p>🏆 Claude 101 — Anthropic (2026)</p>
        <p>🏆 Building with the Claude API — Anthropic (2026)</p>
      </div>
    </div>
  );
}
