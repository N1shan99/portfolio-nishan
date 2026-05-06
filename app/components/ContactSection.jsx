"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        marginTop: "120px",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "rgba(15,23,42,0.7)",
          border: "1px solid rgba(148,163,184,0.15)",
          borderRadius: "24px",
          padding: "50px 30px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 30px rgba(56,189,248,0.12)",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #38bdf8, #6366f1)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}
        >
          Let’s Work Together 🚀
        </h2>

        {/* Subtitle */}
        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
            lineHeight: 1.8,
          }}
        >
          Open to Software Engineer, Backend Development,
          and GenAI opportunities.
        </p>

        {/* Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Name */}
          <div
            style={{
              background: "rgba(30,41,59,0.6)",
              padding: "22px",
              borderRadius: "18px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>👨‍💻 Full Name</h3>
            <p style={{ color: "#cbd5e1" }}>Nishan P</p>
          </div>

          {/* Email */}
          <div
            style={{
              background: "rgba(30,41,59,0.6)",
              padding: "22px",
              borderRadius: "18px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>📧 Email</h3>

            <a
              href="mailto:nishanparammal99@gmail.com"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
              }}
            >
              nishanparammal99@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            style={{
              background: "rgba(30,41,59,0.6)",
              padding: "22px",
              borderRadius: "18px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>📞 Phone</h3>

            <a
              href="tel:+919037010460"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
              }}
            >
              +91 90370 10460
            </a>
          </div>

          {/* Location */}
          <div
            style={{
              background: "rgba(30,41,59,0.6)",
              padding: "22px",
              borderRadius: "18px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>📍 Location</h3>
            <p style={{ color: "#cbd5e1" }}>
              Kerala, India
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/N1shan99"
            target="_blank"
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              textDecoration: "none",
              background: "linear-gradient(90deg, #2563eb, #38bdf8)",
              color: "white",
              fontWeight: "bold",
              boxShadow: "0 0 18px rgba(56,189,248,0.25)",
            }}
          >
            GitHub 👨‍💻
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nishan-p"
            target="_blank"
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              textDecoration: "none",
              background: "rgba(30,41,59,0.9)",
              color: "white",
              border: "1px solid rgba(148,163,184,0.2)",
            }}
          >
            LinkedIn 💼
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1RRrFAL7lUaPgndMZc31K3CqOLw_bXn3U/view?usp=drivesdk"
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              textDecoration: "none",
              background: "rgba(30,41,59,0.9)",
              color: "white",
              border: "1px solid rgba(148,163,184,0.2)",
            }}
          >
            Resume 📄
          </a>
        </div>
      </div>
    </motion.section>
  );
}