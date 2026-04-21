"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Ripple } from "@/components/ui/ripple";
import { HyperText } from "@/components/ui/hyper-text";

export default function CTA() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto relative">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-12 md:p-20 text-center">
          <Ripple
            mainCircleSize={250}
            mainCircleOpacity={0.15}
            numCircles={6}
          />

          <div className="relative z-10 flex flex-col items-center">
            <BlurFade delay={0.1} inView>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6 font-mono">
                Comienza hoy
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <HyperText
                  duration={1200}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  Siguiente nivel
                </HyperText>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-10">
                Agenda una consulta gratuita y descubre cómo la IA puede
                transformar tu empresa.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Link href="/contact" passHref>
                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.4)"
                  shimmerSize="0.05em"
                  background="rgba(0,0,0,1)"
                  className="px-10 py-3.5 text-base font-medium dark:border-white/20"
                >
                  Agendar consulta gratuita
                </ShimmerButton>
              </Link>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
