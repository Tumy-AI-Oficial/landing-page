"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filterStyle =
    resolvedTheme === "light"
      ? "invert(1) brightness(0) contrast(1000%)"
      : "none";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:flex w-fit h-fit"
    >
      <Image
        src="/logos/picture.png"
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
