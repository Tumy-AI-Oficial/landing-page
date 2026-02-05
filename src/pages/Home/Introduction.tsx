"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const WireframeGlobe = dynamic(
  () => import("@/components/Scene3D/WireframeGlobe"),
  { ssr: false }
);

const headingWords =
  "Hacemos tus proyectos con inteligencia artificial".split(" ");

export default function Introduction() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center w-full gap-8 py-16 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden min-h-[80vh]">
      {/* Left: Text content */}
      <div className="w-full md:w-1/2 z-10 space-y-8 text-center md:text-left">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 font-mono"
          >
            Soluciones de IA
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.07,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
        >
          Transformamos tu negocio con soluciones basadas en inteligencia
          artificial, diseñadas para escalar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link href="/contact" passHref>
            <Button variant="default" size="lg" className="px-8">
              Contáctanos
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="px-8">
            Prueba Gratuita
          </Button>
        </motion.div>
      </div>

      {/* Right: 3D Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
        {mounted && <WireframeGlobe darkMode={resolvedTheme === "dark"} />}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 border border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
