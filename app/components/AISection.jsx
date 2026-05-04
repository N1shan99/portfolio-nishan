"use client";

export default function AISection() {
  return (
    <div
      id="ai"
      style={{ padding: "80px 20px", maxWidth: "900px", margin: "auto" }}
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
          AI & GenAI Experience
        </h2>

      <ul style={{ lineHeight: "2" }}>
        <li>Integrated LLM APIs (OpenAI, Groq, Gemini)</li>
        <li>Built RAG-based chatbot systems</li>
        <li>Worked with local LLMs (Ollama)</li>
        <li>Used AI tools (ChatGPT, Claude, Copilot)</li>
      </ul>
    </div>
  );
}