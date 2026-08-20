import { motion } from "motion/react";
import heroImg from "../assets/hero.png";

export default function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.8 }}
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 20,
          background:
            "linear-gradient(160deg, rgba(167,139,250,0.12) 0%, rgba(39,39,42,0.6) 50%, rgba(167,139,250,0.08) 100%)",
          border: "1px solid rgba(63, 63, 70, 0.5)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "-20%",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* Hero image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/5",
            overflow: "hidden",
            borderRadius: "20px 20px 0 0",
            position: "relative",
          }}
        >
          <img
            src={heroImg}
            alt="Nexus creative work showcase"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(9,9,11,0.85) 100%)",
            }}
          />
        </div>

        {/* Card content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "1.25rem 1.5rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "0.6rem",
            }}
          >
            {["#a78bfa", "#34d399", "#fbbf24"].map((color) => (
              <span
                key={color}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: color,
                  opacity: 0.7,
                  display: "block",
                }}
              />
            ))}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Brand Identity System
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.5,
            }}
          >
            Strategy → Design → Delivery
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
