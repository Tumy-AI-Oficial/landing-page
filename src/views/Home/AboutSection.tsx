"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n";

const valuesData = [
  { 
    number: "01", 
    icon3d: "/icons3d/target.webp", 
  },
  { 
    number: "02", 
    icon3d: "/icons3d/brain.webp", 
  },
  { 
    number: "03", 
    icon3d: "/icons3d/users.webp", 
  },
];

export default function AboutSection() {
  const { t } = useI18n();
  const paragraphs = t("about.paragraphs") || [];
  const valuesItems = t("about.valuesItems") || [];

  return (
    <section id="about" className="w-full bg-transparent">
      {/* History */}
      <div className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.1} inView direction="right">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
                {t("about.sectionTag")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("about.sectionTitle")}<span className="font-light">{t("about.sectionTitleHighlight")}</span>
              </h2>
              <div className="space-y-4 text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                {paragraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView direction="left">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Tumy Workspace"
                fill
                className="object-cover opacity-80 dark:opacity-75 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Values (No cards - Pure typography and icons list) */}
      <div className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24 border-t border-neutral-200/10 dark:border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
                {t("about.valuesTag")}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("about.valuesTitle")}<span className="font-light">{t("about.valuesTitleHighlight")}</span>
              </h3>
            </div>
          </BlurFade>

          {/* Minimalist 3-Column List instead of generic cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {valuesData.map((value, i) => {
              const item = valuesItems[i] || {};
              const title = item.title || "";
              const description = item.description || "";

              return (
                <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                  <div className="flex flex-col space-y-4 text-left group">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-200/50 dark:border-white/10">
                      <span className="font-mono text-xl font-medium text-black/80 dark:text-white/80">
                        {value.number}
                      </span>
                      <div className="w-8 h-8 relative group-hover:scale-110 transition-transform duration-300">
                        <Image src={value.icon3d} alt={title} fill className="object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                      {title}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {description}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
