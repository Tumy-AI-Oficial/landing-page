"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { resolvedTheme } = useTheme();

  // Aplica filtros solo en modo CLARO para forzar el logo blanco a verse negro
  const filterStyle =
    resolvedTheme === "light"
      ? "invert(1) brightness(0) contrast(1000%)"
      : "none"; // en dark, la imagen ya es blanca y está perfecta

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:flex w-fit h-fit"
    >
      <img
        src="./logos/picture.png"
        alt="Theme Icon"
        width={420}
        height={420}
        style={{
          pointerEvents: "none",
          filter: filterStyle,
          transition: "filter 0.5s ease",
        }}
      />
    </motion.div>
  );
};

export default ThemeToggle;
