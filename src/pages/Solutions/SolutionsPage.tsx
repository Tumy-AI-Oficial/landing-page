"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const services = [
  {
    icon3d: "/icons3d/brain.webp",
    title: "Inteligencia Artificial",
    description: "Soluciones de IA que transforman datos en decisiones inteligentes.",
    items: ["IA Generativa", "LLM & NLM", "Machine Learning", "Chatbots", "IA Personalizada"],
  },
  {
    icon3d: "/icons3d/server.webp",
    title: "Software Empresarial",
    description: "Sistemas robustos para optimizar operaciones.",
    items: ["Gestión de Inventario", "Sistemas de Ventas", "Sistemas de Facturación"],
  },
  {
    icon3d: "/icons3d/code.webp",
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas, rápidas y escalables.",
    items: ["React / Vue / Angular", "Node.js / Python / .NET", "GoLang"],
  },
  {
    icon3d: "/icons3d/mobile.webp",
    title: "Desarrollo Móvil",
    description: "Apps nativas y multiplataforma excepcionales.",
    items: ["iOS / Android", "React Native", "Flutter"],
  },
  {
    icon3d: "/icons3d/palette.webp",
    title: "Diseño de Producto",
    description: "Diseño centrado en el usuario que convierte.",
    items: ["Diseño UI/UX", "Sistemas de diseño", "Prototipos & Wireframes"],
  },
  {
    icon3d: "/icons3d/shield.webp",
    title: "Aseguramiento de Calidad",
    description: "Garantizamos calidad en cada línea de código.",
    items: ["QA Automatizado", "Pruebas Manuales", "Testing de API", "Pruebas de Rendimiento"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="w-full min-h-screen">
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">
              Soluciones
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Soluciones inteligentes{" "}
              <span className="font-light">para todos</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Creamos soluciones personalizadas con las últimas tecnologías en desarrollo, IA y diseño digital.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.08} inView>
              <MagicCard
                className="h-full rounded-xl cursor-pointer"
                gradientFrom="#ffffff"
                gradientTo="#a0a0a0"
                gradientColor="rgba(150,150,150,0.06)"
                gradientOpacity={0.6}
              >
                <div className="p-7 flex flex-col h-full">
                  <div className="w-14 h-14 mb-5">
                    <Image
                      src={service.icon3d}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain dark:invert"
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <BlurFade delay={0.1} inView>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">¿Listo para empezar?</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8">Cuéntanos tu idea y te ayudamos a hacerla realidad.</p>
            <div className="flex justify-center">
              <Link href="/contact">
                <ShimmerButton shimmerColor="rgba(255,255,255,0.4)" shimmerSize="0.05em" background="rgba(0,0,0,1)" className="px-10 py-3 text-base font-medium dark:border-white/20">
                  Contáctanos
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
