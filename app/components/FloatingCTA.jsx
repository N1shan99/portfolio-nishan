"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FloatingCTA() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      drag
      style={{
        position: "fixed",
        bottom: "20px", // ⬅️ moved up so it doesn't clash with chatbot
        right: "90px",
        zIndex: 999,
        cursor: "grab",
      }}
    >
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* 🔥 TOOLTIP (only on hover) */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: "absolute",
              bottom: "60px",
              right: "0",
              background: "#1e293b",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#cbd5f5",
              whiteSpace: "nowrap",
            }}
          >
            you’re gonna click this 😏
          </motion.div>
        )}

        {/* 🔥 BUTTON */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/hire-me")}
          style={{
            padding: "14px 18px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #2563eb, #38bdf8)",
            color: "white",
            fontSize: "13px",
            boxShadow: "0 0 20px rgba(56,189,248,0.5)",
          }}
        >
          😏 Try me
        </motion.div>
      </div>
    </motion.div>
  );
}