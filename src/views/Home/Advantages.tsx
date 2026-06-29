"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextReveal } from "@/components/ui/text-reveal";
import { useI18n } from "@/lib/i18n";

const ventajasData = [
  {
    icon3d: "/icons3d/medal.webp",
  },
  {
    icon3d: "/icons3d/shield.webp",
  },
  {
    icon3d: "/icons3d/settings.webp",
  },
  {
    icon3d: "/icons3d/trending.webp",
  },
  {
    icon3d: "/icons3d/headset.webp",
  },
];

export default function Advantages() {
  const { t } = useI18n();
  const advantagesItems = t("advantages.items") || [];

  return (
    <>
      {/* Scroll-reveal giant title */}
      <TextReveal className="h-[150vh]">
        {t("advantages.revealText")}
      </TextReveal>
 
      {/* Advantages list block in natural document flow */}
      <section className="w-full min-h-[80vh] flex flex-col justify-center py-32 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
                {t("advantages.sectionTag")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {t("advantages.sectionTitle")}<span className="font-light">{t("advantages.sectionTitleHighlight")}</span>
              </h2>
            </div>
          </BlurFade>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ventajasData.map((ventaja, i) => {
              const item = advantagesItems[i] || {};
              const titulo = item.titulo || "";
              const texto = item.texto || "";

              return (
                <BlurFade key={i} delay={0.1 + i * 0.08} inView>
                  <div className="liquid-glass-card p-8 h-full rounded-2xl flex flex-col items-center text-center group cursor-pointer hover:scale-[1.03] transition-all duration-300">
                    <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={ventaja.icon3d}
                        alt={titulo}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
                      />
                    </div>
                    <span className="text-[0.6rem] font-mono text-neutral-450 dark:text-neutral-650 mb-3">
                      0{i + 1}
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight mb-1">
                      {titulo}
                    </h3>
                    <p className="text-xs text-neutral-455 dark:text-neutral-500 leading-relaxed font-normal">
                      {texto}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
