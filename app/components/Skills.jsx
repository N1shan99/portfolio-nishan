"use client";

import { motion } from "framer-motion";
import { skillsData } from "../../data/skillsData";

export default function Skills() {
  return (
    <div   id="skills" style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" ,scrollMarginTop: "100px" }}>
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
          Skills
        </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(0, 180, 255, 0.1)"
            }}
          >
            <h3 style={{ marginBottom: "12px", color: "#38bdf8" }}>
              {category.title}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {category.items.map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2563eb"
                  }}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    background: "#0f172a",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}