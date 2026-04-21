"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const resources = [
  {
    icon3d: "/icons3d/file.webp",
    category: "Guía",
    title: "Introducción a la IA para empresas",
    description: "Cómo la inteligencia artificial puede transformar los procesos de tu empresa.",
    tag: "Próximamente",
  },
  {
    icon3d: "/icons3d/video.webp",
    category: "Video",
    title: "Automatización con chatbots",
    description: "Implementa chatbots que mejoran la experiencia de tus clientes.",
    tag: "Próximamente",
  },
  {
    icon3d: "/icons3d/book.webp",
    category: "Artículo",
    title: "Tendencias tecnológicas 2026",
    description: "Las tecnologías que están redefiniendo el panorama digital.",
    tag: "Próximamente",
  },
  {
    icon3d: "/icons3d/download.webp",
    category: "Plantilla",
    title: "Checklist para tu proyecto digital",
    description: "Todo lo que necesitas antes de iniciar un proyecto de desarrollo.",
    tag: "Próximamente",
  },
  {
    icon3d: "/icons3d/file.webp",
    category: "Case Study",
    title: "Optimización de inventario con IA",
    description: "Cómo reducimos costos un 40% con machine learning.",
    tag: "Próximamente",
  },
  {
    icon3d: "/icons3d/book.webp",
    category: "Artículo",
    title: "Diseño UI/UX que convierte",
    description: "Principios que aumentan las conversiones de tu landing page.",
    tag: "Próximamente",
  },
];

export default function Resources() {
  return (
    <div className="w-full min-h-screen">
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">Recursos</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Aprende{" "}<span className="font-light">con nosotros</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Guías, artículos y recursos sobre tecnología e inteligencia artificial.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.08} inView>
              <MagicCard
                className="h-full rounded-xl cursor-pointer"
                gradientFrom="#ffffff"
                gradientTo="#a0a0a0"
                gradientColor="rgba(150,150,150,0.06)"
                gradientOpacity={0.6}
              >
                <div className="p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14">
                      <Image src={resource.icon3d} alt={resource.title} width={56} height={56} className="w-full h-full object-contain dark:invert" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1">
                      {resource.tag}
                    </span>
                  </div>
                  <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-neutral-400 mb-2">{resource.category}</p>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{resource.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{resource.description}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <BlurFade delay={0.1} inView>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">No te pierdas nada</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8">Preparamos contenido de alto valor. Sé el primero en enterarte.</p>
            <div className="flex justify-center">
              <Link href="/contact">
                <ShimmerButton shimmerColor="rgba(255,255,255,0.4)" shimmerSize="0.05em" background="rgba(0,0,0,1)" className="px-10 py-3 text-base font-medium dark:border-white/20">
                  Mantenerme informado
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
