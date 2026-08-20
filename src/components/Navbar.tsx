import { motion } from "motion/react";

const navLinks = ["Work", "Services", "About", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(9, 9, 11, 0.6)",
        borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "1.35rem",
          letterSpacing: "-0.02em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            display: "inline-block",
          }}
        />
        Nexus
      </motion.div>

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.2 + i * 0.07,
            }}
            whileHover={{ color: "#c4b5fd" }}
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "var(--color-text-muted)",
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
          >
            {link}
          </motion.a>
        ))}

        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.5,
          }}
          whileHover={{ scale: 1.05, backgroundColor: "#c4b5fd" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "0.55rem 1.4rem",
            borderRadius: "8px",
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.01em",
          }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
