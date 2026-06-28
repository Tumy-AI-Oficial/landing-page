"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HyperText } from "@/components/ui/hyper-text";

export default function CTA() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto relative">
        {/* Liquid glass card container */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/50 dark:border-white/[0.05] bg-transparent p-12 md:p-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.85)] group">
          
          {/* Background layer container */}
          <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden select-none pointer-events-none">
            {/* Card solid background base - placed behind the image */}
            <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950 -z-30" />
            
            {/* Abstract glass image - placed in front of the base background */}
            <Image
              src="/logos/Gemini_Generated_Image_i0ya7hi0ya7hi0ya.jpg"
              alt="Liquid Glass Abstract Banner"
              fill
              className="object-cover opacity-35 dark:opacity-45 brightness-95 dark:brightness-100 contrast-100 dark:contrast-115 scale-[1.45] transition-transform duration-[10s] ease-out group-hover:scale-[1.55]"
              priority
            />
            {/* Overlay radial vignette to fade edges smoothly */}
            <div 
              className="absolute inset-0 bg-radial from-transparent via-neutral-50/40 to-neutral-50 dark:via-neutral-950/40 dark:to-neutral-950 transition-colors duration-500" 
            />
            {/* Extremely subtle color highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 mix-blend-overlay" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <BlurFade delay={0.1} inView>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 dark:text-neutral-500 mb-6 font-mono">
                Transformación Digital
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <HyperText
                  duration={1200}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  Siguiente nivel
                </HyperText>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-neutral-500 dark:text-neutral-300 max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                Agenda una sesión estratégica gratuita con nuestro equipo de ingenieros de IA. Diseñamos soluciones personalizadas que integran agentes inteligentes, flujos de automatización y experiencias interactivas a la medida de tu modelo de negocio.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Link href="/contact" passHref>
                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.4)"
                  shimmerSize="0.05em"
                  background="rgba(0,0,0,1)"
                  className="px-10 py-4 text-base font-semibold dark:border-white/20 hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
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
