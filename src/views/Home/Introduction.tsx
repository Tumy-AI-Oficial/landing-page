"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollFrameVideo from "@/components/Scene3D/ScrollFrameVideo";
import { useI18n } from "@/lib/i18n";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiAmazon,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";

const techIcons = [
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiAmazon, name: "AWS" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiNodedotjs, name: "Node.js" },
];

export default function Introduction() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate text transformations based on scroll progress
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Dynamic canvas zoom (explosive zoom-in) and fade curves
  const canvasScale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1.0], [0.9, 1.4, 1.8, 2.1]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.9], [0.75, 0.95, 0.95, 0.0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]">
      {/* Sticky container that keeps the canvas and text in place while scrolling */}
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none touch-pan-y flex flex-col items-center justify-center px-6 md:px-16 lg:px-24">
        
        {/* Centered Scroll-animated Transparent 3D Molecule as background */}
        <motion.div 
          style={{ scale: canvasScale, opacity: canvasOpacity }}
          className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
        >
          {mounted && <ScrollFrameVideo containerRef={containerRef} />}
        </motion.div>

        {/* Foreground Content */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="z-10 space-y-8 text-center flex flex-col items-center max-w-4xl mx-auto pointer-events-auto"
        >
          <div className="space-y-4">
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-neutral-900 dark:text-neutral-100 font-light">
                  {t("introduction.headingPrefix")}
                </span>
                {mounted && (
                  <WordRotate
                    words={t("introduction.words")}
                    className="inline-block"
                  />
                )}
              </h1>
            </BlurFade>
          </div>

          <BlurFade delay={0.4} inView>
            <h2 className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-normal">
              {t("introduction.subheading")}
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Link href="/#contact" passHref>
                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.4)"
                  shimmerSize="0.05em"
                  background="rgba(0,0,0,1)"
                  className="px-8 py-3 text-base font-medium dark:border-white/20"
                >
                  {t("introduction.ctaContact")}
                </ShimmerButton>
              </Link>
              <Link href="/#contact" passHref>
                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.4)"
                  shimmerSize="0.05em"
                  background="rgba(0,0,0,1)"
                  className="px-8 py-3 text-base font-medium dark:border-white/20"
                >
                  {t("introduction.ctaFreeTrial")}
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>

          {/* Minimal static tech stack icons directly under the Hero CTA */}
          <BlurFade delay={0.6} inView>
            <div className="pt-8 mt-4 flex flex-wrap items-center justify-center gap-7 md:gap-9 border-t border-neutral-200/10 dark:border-white/[0.04] w-full max-w-md">
              {techIcons.map((tech, i) => {
                const IconComponent = tech.Icon;
                return (
                  <div key={i} className="group/icon relative cursor-pointer" title={tech.name}>
                    <IconComponent className="w-5 h-5 text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors duration-200" />
                  </div>
                );
              })}
            </div>
          </BlurFade>
        </motion.div>

        {/* Scroll indicator */}
        {mounted && (
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 border border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center pt-1.5 animate-bounce">
              <div className="w-1 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
