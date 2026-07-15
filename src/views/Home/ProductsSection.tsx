"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n";

const projectsData = [
  {
    number: "01",
    imageUrl: "/projects/mac-lima.webp?v=2",
    url: "https://mac-lima.tumyai.com/",
  },
  {
    number: "02",
    imageUrl: "/projects/sites.webp",
  },
  {
    number: "03",
    imageUrl: "/projects/commerce.webp",
  },
  {
    number: "04",
    imageUrl: "/projects/bots.webp",
  },
  {
    number: "05",
    imageUrl: "/projects/analytics.webp",
  },
];

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();
  const translatedProducts = t("products.items") || [];

  // Monitor scroll progress of the portfolio container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map vertical scroll progress to horizontal translation
  // Since we have 5 slides of ~650px, -70% is the optimal translation range
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  
  // Smooth out horizontal motion with spring physics
  const x = useSpring(xTranslation, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-transparent">
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden touch-pan-y flex flex-col justify-center">
        
        {/* Header (Visual title) */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 mb-8 md:mb-12 select-none shrink-0">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-450 mb-2 font-mono">
              {t("products.sectionTag")}
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {t("products.sectionTitle")}<span className="font-light">{t("products.sectionTitleHighlight")}</span>
            </h2>
          </BlurFade>
        </div>

        {/* Horizontal scroll track - high performance solid rendering with NO backdrop filters */}
        <div className="w-full relative flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 md:gap-12 pl-6 md:pl-24 pr-6 md:pr-24"
          >
            {projectsData.map((proj, idx) => {
              const item = translatedProducts[idx] || {};
              const title = item.title || "";
              const tagline = item.tagline || "";
              const description = item.description || "";
              const features = item.features || [];

              return (
                <div
                  key={idx}
                  className="w-[85vw] md:w-[650px] shrink-0 liquid-glass-card rounded-2xl p-6 md:p-10 flex flex-col gap-6 relative select-none"
                >
                  {/* Monospace number label */}
                  <span className="absolute top-4 right-6 font-mono text-[60px] font-bold text-neutral-200/30 dark:text-neutral-800/10 pointer-events-none leading-none">
                    {proj.number}
                  </span>

                  {/* Screenshot Container (Mock Browser Window) */}
                  <div className="w-full relative rounded-xl overflow-hidden border border-neutral-250 dark:border-neutral-800 bg-neutral-200 dark:bg-black aspect-video shadow-md shrink-0">
                    {/* Browser top bar */}
                    <div className="w-full h-6 bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-900 flex items-center gap-1 px-4">
                      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-850" />
                      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-850" />
                      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-850" />
                    </div>
                    {/* Project image */}
                    <div className="relative w-full h-[calc(100%-1.5rem)] bg-neutral-100 dark:bg-neutral-950">
                      <Image 
                        src={proj.imageUrl} 
                        alt={title} 
                        fill 
                        sizes="(max-width: 768px) 85vw, 650px"
                        className="object-cover object-top"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Typographic content */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-neutral-450 dark:text-neutral-500 uppercase">
                        {tagline}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center justify-between gap-2">
                        <span>{title}</span>
                        {proj.url && (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[10px] font-mono tracking-wider text-neutral-400 hover:text-black dark:hover:text-white uppercase transition-colors shrink-0"
                          >
                            {t("products.visitLink") || "Visitar ↗"}
                          </a>
                        )}
                      </h3>
                    </div>
                    
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-455 leading-relaxed font-normal">
                      {description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                      <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">{t("products.deliveryDetails")}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((feat: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                            <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-650 mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Indicator Slide */}
            <div className="w-[30vw] md:w-[200px] shrink-0 flex flex-col justify-center items-center text-center p-6 select-none">
              <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 animate-ping mb-3" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">{t("products.scrollText")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
