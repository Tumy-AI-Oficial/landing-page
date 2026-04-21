"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const ReflectiveSphere = dynamic(
  () => import("@/components/Scene3D/ReflectiveSphere"),
  { ssr: false }
);

export default function Introduction() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center w-full gap-8 py-16 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden min-h-[80vh]">
      <RetroGrid
        angle={65}
        cellSize={60}
        opacity={0.3}
        lightLineColor="rgba(0,0,0,0.12)"
        darkLineColor="rgba(255,255,255,0.06)"
      />

      {/* Left */}
      <div className="w-full md:w-1/2 z-10 space-y-8 text-center md:text-left">
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-1.5 cursor-pointer transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.06]">
            <AnimatedShinyText className="text-sm font-medium">
              <span className="flex items-center gap-1.5">
                Potenciado por IA <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <div>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hacemos tus proyectos con{" "}
              <WordRotate
                words={[
                  "inteligencia artificial",
                  "automatizacion",
                  "innovacion",
                  "tecnologia",
                ]}
                className="inline-block"
              />
            </h1>
          </BlurFade>
        </div>

        <BlurFade delay={0.4} inView>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
            Soluciones de IA diseñadas para escalar tu negocio.
          </p>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
            <Link href="/contact" passHref>
              <ShimmerButton
                shimmerColor="rgba(255,255,255,0.4)"
                shimmerSize="0.05em"
                background="rgba(0,0,0,1)"
                className="px-8 py-3 text-base font-medium dark:border-white/20"
              >
                Contáctanos
              </ShimmerButton>
            </Link>
            <Button variant="outline" size="lg" className="px-8 cursor-pointer h-[48px]">
              Prueba Gratuita
            </Button>
          </div>
        </BlurFade>
      </div>

      {/* Right: 3D Reflective Sphere */}
      <BlurFade delay={0.3} inView className="w-full md:w-1/2 flex justify-center">
        {mounted && <ReflectiveSphere darkMode={resolvedTheme === "dark"} />}
      </BlurFade>

      {/* Scroll indicator */}
      {mounted && (
        <BlurFade delay={2} inView className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <div className="w-5 h-8 border border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center pt-1.5 animate-bounce">
            <div className="w-1 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          </div>
        </BlurFade>
      )}
    </section>
  );
}
