import { motion } from "motion/react";
import FloatingCard from "./FloatingCard";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 3rem 4rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.4 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: 100,
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#34d399",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.55 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            We craft digital
            <br />
            experiences that
            <br />
            <span style={{ color: "var(--color-accent-bright)" }}>
              define brands.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.7 }}
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            A forward-thinking creative studio blending strategy, design, and
            technology to build products people remember and brands people trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.85 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(167,139,250,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "10px",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.01em",
              }}
            >
              View Our Work
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#c4b5fd",
                color: "#c4b5fd",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent",
                color: "var(--color-text-muted)",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.01em",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Let's Talk →
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content — Floating Card */}
        <FloatingCard />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section > div > div:first-child {
            align-items: center;
          }
          section > div > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          section > div > div:first-child > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 7rem 1.25rem 3rem !important;
          }
          nav {
            padding: 1rem 1.25rem !important;
          }
          nav > div:last-child > a {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
