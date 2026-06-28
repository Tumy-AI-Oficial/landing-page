"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-+*";

// High-fidelity MagicUI-style HyperText component (Hacker Scramble Decryption Animation)
function HyperText({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Trigger scramble on initial viewport entry or hover
  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let interval: NodeJS.Timeout;

    const runScramble = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
        iteration += 1 / 3;
      }, 30);
    };

    const delayTimeout = setTimeout(runScramble, startDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(delayTimeout);
    };
  }, [isInView, text, startDelay, isHovered]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      className="cursor-pointer select-none font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
    >
      {displayText}
    </span>
  );
}

const services = [
  {
    number: "01",
    icon3d: "/icons3d/globe.webp",
    title: "Sites",
    tagline: "Landing Pages & E-Commerce",
  },
  {
    number: "02",
    icon3d: "/icons3d/zap.webp",
    title: "Flows",
    tagline: "Automatizaciones",
  },
  {
    number: "03",
    icon3d: "/icons3d/bot.webp",
    title: "Bots",
    tagline: "Conversacionales IA",
  },
  {
    number: "04",
    icon3d: "/icons3d/layers.webp",
    title: "Stock",
    tagline: "Sistemas ERP",
  },
  {
    number: "05",
    icon3d: "/icons3d/code.webp",
    title: "Dev",
    tagline: "Sistemas a Medida",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20 md:mb-28">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              Capacidades
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Servicios <span className="font-light">corporativos</span>
            </h2>
          </BlurFade>
        </div>

        {/* Visual 3D Icon & Decrypting HyperText Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 items-center justify-center">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.08} inView>
              <div className="flex flex-col items-center justify-center text-center relative group py-6 select-none">
                
                {/* Floating 3D Icon Container */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 4, -4, 0]
                  }}
                  transition={{
                    duration: 4.5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-28 h-28 md:w-36 md:h-36 relative z-10 cursor-pointer group-hover:scale-[1.03] transition-all duration-300 flex items-center justify-center"
                >
                  {/* Liquid Glass Sphere behind the 3D Icon */}
                  <div className="absolute inset-0 rounded-full liquid-glass-card border border-neutral-200/50 dark:border-white/[0.06] shadow-xs flex items-center justify-center overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100/10 via-transparent to-neutral-200/20 dark:from-white/5 dark:to-white/10 opacity-60 pointer-events-none" />
                  </div>
                  
                  {/* The 3D Icon */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 z-10">
                    <Image
                      src={service.icon3d}
                      alt={service.title}
                      fill
                      className="object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
                    />
                  </div>
                </motion.div>

                {/* Scrambling Text & Details Container */}
                <div className="mt-8 space-y-2.5 relative z-0">
                  <span className="font-mono text-[10px] text-neutral-400 font-semibold block tracking-widest">
                    [{service.number}]
                  </span>
                  
                  {/* Elegant, balanced scramble title (HyperText) */}
                  <h3 className="text-2xl md:text-3.5xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
                    <HyperText text={service.title} startDelay={200 + index * 100} />
                  </h3>

                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-450 dark:text-neutral-500 font-medium">
                    {service.tagline}
                  </p>
                </div>

              </div>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
