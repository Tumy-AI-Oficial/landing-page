"use client";

import { useRef } from "react";
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const VENTAJAS = [
  {
    titulo: "Diseño Único",
    texto: "Creamos diseños exclusivos sin plantillas genéricas.",
    icono: Palette,
  },
  {
    titulo: "Seguridad Garantizada",
    texto: "Mayor seguridad y estabilidad en todas las soluciones.",
    icono: Shield,
  },
  {
    titulo: "Flexibilidad Total",
    texto: "Adaptamos cada elemento a tus necesidades específicas.",
    icono: Sliders,
  },
  {
    titulo: "Inversión Inteligente",
    texto: "Soluciones rentables que reducen costos a largo plazo.",
    icono: Coins,
  },
  {
    titulo: "Atención Personalizada",
    texto: "Acompañamiento constante durante todo el proceso.",
    icono: Users,
  },
];

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-40, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left: Heading (sticky on desktop) */}
        <motion.div
          style={{ x: leftX, opacity: leftOpacity }}
          className="flex-1 text-center lg:text-left lg:sticky lg:top-32"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
            Por qué elegirnos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ventajas{" "}
            <span className="font-light">de trabajar con nosotros</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
            Sin plantillas genéricas. Con seguridad garantizada y un equipo que
            se adapta a tus necesidades.
          </p>
        </motion.div>

        {/* Right: Animated advantage items */}
        <div className="flex-1 w-full space-y-0">
          {VENTAJAS.map((ventaja, i) => {
            const Icon = ventaja.icono;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-60px" }}
                className="group relative"
              >
                <div className="flex items-start gap-5 py-6 border-b border-gray-100 dark:border-gray-800/60 last:border-b-0">
                  {/* Number */}
                  <span className="text-xs font-mono text-gray-300 dark:text-gray-700 mt-1 shrink-0 w-5 tabular-nums">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold tracking-tight mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {ventaja.titulo}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {ventaja.texto}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
