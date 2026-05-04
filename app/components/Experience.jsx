"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const points = [
    "Migrated 7–8 legacy Java apps to Spring Boot microservices",
    "Improved performance by ~20%",
    "Built Kafka-based real-time pipelines",
    "Implemented Redis caching (~15% throughput gain)",
    "Resolved 98% of production issues",
    "Worked in Agile + CI/CD environment"
  ];

  return (
    <div
      id="experience"
      style={{
        padding: "100px 20px",
        maxWidth: "1000px",
        margin: "auto",
        scrollMarginTop: "100px"
      }}
    >
      {/* 🔥 Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        Experience
      </motion.h2>

      {/* 🔥 Card Animation */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(56,189,248,0.3)"
        }}
        style={{
          background: "rgba(15, 23, 42, 0.7)",
          padding: "28px",
          borderRadius: "18px",
          border: "1px solid rgba(56,189,248,0.2)",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease"
        }}
      >
        {/* Role */}
        <h3 style={{ color: "#38bdf8", marginBottom: "5px" }}>
          Software Engineer – Geojit Technologies
        </h3>

        {/* Date */}
        <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "15px" }}>
          Nov 2023 – Present
        </p>

        {/* 🔥 Animated Bullet Points */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                marginBottom: "10px",
                color: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              {/* 🔵 Animated Dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 10px #38bdf8"
                }}
              />

              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}