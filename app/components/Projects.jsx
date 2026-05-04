"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Payout Processing System",
    desc: "Kafka-based distributed system handling high-volume financial transactions with validation, retry, and async processing."
  },
  {
    title: "OTP Messaging Service",
    desc: "Processes 100K+ daily SMS/email messages with failover and Redis Pub/Sub."
  },
  {
    title: "Esigner System",
    desc: "Secure document workflow with encryption, Base64 processing, and async callbacks."
  },
  {
    title: "BackOffice Assist",
    desc: "Job scheduling system automating FTP/SFTP, DB, and API workflows with retries and RBAC."
  },
   {
    title: "MCX Exchange Connector",
    desc: "TCP-based trading system using Apache MINA and TIBCO, handling order processing with parallel execution and auto-reconnect, reducing downtime significantly."
  },
  {
    title: "CDSL Account Opening System",
    desc: "Replaced scheduler-based workflow with API-driven system using Resilience4j (Retry, Circuit Breaker), reducing processing time from 15 minutes to 3 minutes."
  },
  {
    title: "CRD Automation",
    desc: "Java-based Selenium/TestNG automation framework replacing manual QA workflows, reducing execution time from 10 minutes to 2 minutes with reporting."
  }
];

export default function Projects() {
  return (
    <div
      id="projects"
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "auto",
        scrollMarginTop: "100px" 
      }}
    >
      {/* 🔥 Gradient Heading */}
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
        Projects
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              y: -6,
              borderColor: "#38bdf8",
              boxShadow: "0 0 25px rgba(56,189,248,0.35)"
            }}
            style={{
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(56,189,248,0.15)",
              backdropFilter: "blur(12px)",
              transition: "all 0.3s ease",
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            {/* Title */}
            <h3
              style={{
                marginBottom: "12px",
                color: "#38bdf8",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "#cbd5f5",
                lineHeight: "1.6"
              }}
            >
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}