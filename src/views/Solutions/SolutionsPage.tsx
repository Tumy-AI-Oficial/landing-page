"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const solutions = [
  {
    number: "01",
    icon3d: "/icons3d/brain.webp",
    title: "Inteligencia Artificial",
    description: "Desarrollamos soluciones cognitivas y modelos generativos entrenados con la información de tu negocio para automatizar la toma de decisiones y generar contenido.",
    items: ["Integración de Modelos Generativos (GPT/Claude)", "LLMs y Procesamiento de Lenguaje Natural (NLP)", "Modelos de Machine Learning predictivos", "Chatbots inteligentes entrenados con CRM"],
  },
  {
    number: "02",
    icon3d: "/icons3d/server.webp",
    title: "Software Empresarial & ERP",
    description: "Sistemas integrados para la gestión operativa y administrativa de tu empresa. Centraliza inventarios, ventas, facturación y recursos humanos bajo una única interfaz modular.",
    items: ["Gestión inteligente de inventarios en tiempo real", "Facturación electrónica automatizada en Latam", "Reportes de ventas analíticos automáticos"],
  },
  {
    number: "03",
    icon3d: "/icons3d/code.webp",
    title: "Desarrollo Web de Alto Rendimiento",
    description: "Aplicaciones web progresivas, rápidas y seguras. Diseñadas para cargar instantáneamente, optimizar el SEO técnico de tu marca y soportar tráfico masivo.",
    items: ["Arquitecturas modernas (Next.js / React)", "Backends veloces (Node.js / GoLang / Python)", "Bases de datos relacionales y NoSQL escalables"],
  },
  {
    number: "04",
    icon3d: "/icons3d/mobile.webp",
    title: "Desarrollo Móvil Multiplataforma",
    description: "Desarrollo de aplicaciones móviles nativas o híbridas de alto rendimiento con animaciones fluidas y soporte offline.",
    items: ["Apps multiplataforma (React Native / Flutter)", "Notificaciones push inteligentes e integradas", "Sincronización de datos offline en segundo plano"],
  },
  {
    number: "05",
    icon3d: "/icons3d/palette.webp",
    title: "Diseño de Producto & UI/UX",
    description: "Prototipado rápido y sistemas de diseño centrados en el usuario. Nos aseguramos de que cada flujo digital sea intuitivo y maximice tus tasas de conversión.",
    items: ["Diseño de interfaces intuitivas y limpias", "Sistemas de diseño modulares reutilizables", "Prototipados rápidos interactivos en Figma"],
  },
  {
    number: "06",
    icon3d: "/icons3d/shield.webp",
    title: "Aseguramiento de Calidad (QA)",
    description: "Garantizamos la estabilidad de tu software mediante pruebas automatizadas y manuales continuas en múltiples entornos de ejecución.",
    items: ["Pruebas funcionales automatizadas (Cypress/Playwright)", "Pruebas de estrés y rendimiento de APIs", "Auditorías de seguridad de datos continuas"],
  },
];

export default function SolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress of the entire section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate horizontal translation mapping
  // We translate the container track horizontally based on vertical scroll
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  // Smooth out the horizontal movement using spring physics
  const x = useSpring(xTranslation, {
    stiffness: 65,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      {/* Sticky viewport that stays locked in place while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden touch-pan-y flex flex-col justify-center">
        
        {/* Header container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 mb-10 md:mb-16 select-none shrink-0">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2 font-mono">
              Soluciones
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Servicios <span className="font-light">corporativos</span>
            </h2>
          </BlurFade>
        </div>

        {/* Horizontal scroll track */}
        <div className="w-full relative flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 md:gap-16 pl-6 md:pl-24 pr-6 md:pr-24"
          >
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="w-[85vw] md:w-[650px] shrink-0 rounded-2xl border border-neutral-200/50 dark:border-white/5 bg-white/[0.01] backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start relative select-none"
              >
                {/* Big number behind decoration */}
                <span className="absolute top-4 right-6 font-mono text-[70px] md:text-[90px] font-bold text-black/[0.02] dark:text-white/[0.01] pointer-events-none leading-none">
                  {sol.number}
                </span>

                {/* Left Side: 3D Icon */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 relative">
                    <Image
                      src={sol.icon3d}
                      alt={sol.title}
                      fill
                      className="object-contain dark:invert"
                    />
                  </div>
                  <span className="font-mono text-xs text-blue-500/80 dark:text-blue-450/80 mt-4 font-semibold tracking-wider">
                    SOL-{sol.number}
                  </span>
                </div>

                {/* Right Side: Typographic content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {sol.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                    {sol.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-200/40 dark:border-white/[0.04]">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Entrega del Servicio:</p>
                    <ul className="space-y-1.5">
                      {sol.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-405">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* End Indicator Slide */}
            <div className="w-[40vw] md:w-[350px] shrink-0 flex flex-col justify-center items-center text-center p-8 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping mb-4" />
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">Continúa haciendo scroll</p>
              <p className="text-[10px] text-neutral-500 mt-1">Siguiente sección en camino</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
