"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scale value using spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed bottom-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left z-50 shadow-[0_-2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_10px_rgba(255,255,255,0.15)] pointer-events-none"
    />
  );
}
