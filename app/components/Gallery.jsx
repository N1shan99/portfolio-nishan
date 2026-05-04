"use client";

import { motion } from "framer-motion";

const images = [
  "/gallery/pic2.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
        margin: "auto",
        color: "white",
      }}
    >
      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
          background: "linear-gradient(90deg, #38bdf8, #6366f1)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Gallery 📸
      </motion.h2>

      {/* 🔥 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={src}
              alt="gallery"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}