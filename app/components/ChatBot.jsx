"use client";

import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    console.log("🟡 Sending message:", text);

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text }]);

    try {
      setLoading(true);

      const res = await fetch("/api/chat", {
        method: "POST",
        body: text,
      });

      console.log("🟢 API status:", res.status);

      const reply = await res.text();

      console.log("🟢 API response:", reply);

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply || "No response" },
      ]);
    } catch (err) {
      console.error("🔴 API Error:", err);

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error contacting AI" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-box">
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                background:
                  m.role === "user" ? "#2563eb" : "#0f172a",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "8px",
                textAlign: m.role === "user" ? "right" : "left",
              }}
            >
              {m.text.split("\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          ))}

          {loading && (
            <div style={{ color: "#aaa", fontSize: "12px" }}>
              Thinking...
            </div>
          )}

          <input
            placeholder="Ask about me..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(e.target.value);
                e.target.value = "";
              }
            }}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "none",
            }}
          />
        </div>
      )}
    </>
  );
}