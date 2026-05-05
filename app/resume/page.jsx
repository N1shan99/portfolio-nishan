"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #38bdf8, #6366f1)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        My Resume 📄
      </motion.h1>

      {/* 🔥 Resume Viewer */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 30px rgba(56,189,248,0.2)",
        }}
      >
        <iframe
          src="/resume.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      </div>

      {/* 🔥 Download Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/resume.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 30px",
          borderRadius: "12px",
          background: "linear-gradient(90deg, #2563eb, #38bdf8)",
          color: "white",
          textDecoration: "none",
        }}
      >
        Download Resume ⬇️
      </motion.a>
    </div>
  );
}