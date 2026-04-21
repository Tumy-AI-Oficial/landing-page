"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 98, suffix: "%", label: "Satisfacción" },
  { value: 15, suffix: "+", label: "Empresas" },
  { value: 3, suffix: "", label: "Países" },
];

export default function Stats() {
  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          {stats.map((stat, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.1} inView>
              <div className="bg-white dark:bg-black p-8 md:p-10 text-center">
                <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  <NumberTicker value={stat.value} delay={0.3 + index * 0.15} />
                  <span className="text-neutral-300 dark:text-neutral-700">{stat.suffix}</span>
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 font-mono">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
