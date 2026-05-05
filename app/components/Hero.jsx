"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="hero section"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🔥 Background Image (ghost effect) */}
      <motion.img
        src="/gallery/pic2.jpeg" // 👉 put your image in /public
        alt="bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",

          opacity: 0.4,
          filter: "blur(3px) brightness(1.2)",

          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 🔥 Gradient overlay (important for readability) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(2,6,23,1) 30%, rgba(2,6,23,0.3) 100%)",
          zIndex: 0,
        }}
      />

      {/* 🔥 Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            lineHeight: "1.1",
            background: "linear-gradient(90deg, #38bdf8, #6366f1)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Building Scalable Backend Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "20px",
            maxWidth: "600px",
            color: "#94a3b8",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Java Backend Engineer specializing in microservices, Kafka-driven
          systems, and high-performance financial applications.
        </motion.p>
      </div>
    </section>
  );
}
