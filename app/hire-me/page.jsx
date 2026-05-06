"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HireMe() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 20px",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🔥 LOCAL NAVBAR (ONLY FOR THIS PAGE) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "rgba(2,6,23,0.8)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <span
          onClick={() => router.push("/")}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          Nishan
        </span>

        {/* Gallery Button */}
        <motion.span
          whileHover={{ scale: 1.1, color: "#38bdf8" }}
          onClick={() => router.push("/gallery")}
          style={{ cursor: "pointer" }}
        >
          Gallery 📸
        </motion.span>

        {/* Resume Button */}
        <motion.span
          whileHover={{ scale: 1.1, color: "#38bdf8" }}
          onClick={() => router.push("/resume")}
          style={{ cursor: "pointer" }}
        >
          Resume 📄
        </motion.span>
      </div>

      {/* 🔥 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "42px",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #38bdf8, #6366f1)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Like this portfolio? 😏
      </motion.h1>

      {/*
      <p style={{ maxWidth: "600px", margin: "auto", color: "#94a3b8" }}>
        I build modern, animated, AI-powered portfolios.
        <br />
        Also... yes, this button actually opens a real payment gateway 😂
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <p>🚀 Smooth animations (Framer Motion)</p>
        <p>🤖 AI chatbot integration</p>
        <p>⚡ Backend + real APIs</p>
        <p>💼 Built like a real product, not a template</p>
      </motion.div>
      */}

      {/* 🔥 CTA */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: "50px",
          padding: "16px 34px",
          borderRadius: "14px",
          border: "none",
          background: "linear-gradient(90deg, #2563eb, #38bdf8)",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 0 25px rgba(56,189,248,0.4)",
        }}
        onClick={async () => {
          try {
            const res = await fetch("/api/payment", { method: "POST" });
            const data = await res.json();

            const options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
              amount: data.amount,
              currency: data.currency,
              order_id: data.id,
              name: "Nishan Portfolio",
              description: "Totally serious ₹1 investment 😌",

              handler: function () {
                alert("Congrats 🎉 You just invested ₹1 😂");
              },

              theme: { color: "#2563eb" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
          } catch {
            alert("Payment failed 😭");
          }
        }}
      >
        Try ₹1 Demo
      </motion.button>

      {/* 🔥 Bottom */}
      <motion.div
        style={{ marginTop: "35px", fontSize: "14px", color: "#64748b" }}
      >
        {/*
        Don’t wanna pay ₹1? 🤨
        <br />
        Fine… I respect that.
        <br />
        */}

        <a
          href="https://github.com/N1shan99/portfolio-nishan/"
          target="_blank"
          style={{ color: "#38bdf8", textDecoration: "none" }}
        >
          Check my GitHub 👨‍💻 →
        </a>
      </motion.div>
    </div>
  );
}
