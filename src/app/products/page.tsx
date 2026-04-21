"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon3d: "/icons3d/globe.webp",
    title: "Tumy Sites",
    description: "Landing pages y sitios web de alto rendimiento con IA generativa para contenido y diseño.",
    features: ["Optimización SEO", "Generación de contenido", "A/B Testing"],
    status: "Disponible",
  },
  {
    icon3d: "/icons3d/cart.webp",
    title: "Tumy Commerce",
    description: "Plataforma e-commerce completa con gestión de inventario y pagos integrados.",
    features: ["Pasarela de pagos", "Gestión de stock", "Analytics"],
    status: "Disponible",
  },
  {
    icon3d: "/icons3d/bot.webp",
    title: "Tumy Bots",
    description: "Chatbots inteligentes para WhatsApp, Instagram y web con procesamiento de lenguaje natural.",
    features: ["Multi-canal", "NLP avanzado", "Integración CRM"],
    status: "Disponible",
  },
  {
    icon3d: "/icons3d/analytics.webp",
    title: "Tumy Analytics",
    description: "Dashboard de analítica con IA predictiva para decisiones basadas en datos.",
    features: ["Predicción de ventas", "Reportes automáticos", "Alertas"],
    status: "Próximamente",
  },
  {
    icon3d: "/icons3d/layers.webp",
    title: "Tumy ERP",
    description: "Sistema de gestión empresarial modular adaptado a operaciones latinoamericanas.",
    features: ["Facturación", "Inventario", "Recursos humanos"],
    status: "Próximamente",
  },
  {
    icon3d: "/icons3d/zap.webp",
    title: "Tumy Automate",
    description: "Automatización de workflows empresariales con inteligencia artificial.",
    features: ["Workflows visuales", "Integraciones API", "Triggers"],
    status: "Próximamente",
  },
];

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">Productos</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Herramientas{" "}<span className="font-light">para crecer</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Productos diseñados para resolver problemas reales de empresas en Latinoamérica.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
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
                      <Image src={product.icon3d} alt={product.title} width={56} height={56} className="w-full h-full object-contain dark:invert" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1">
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{product.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 flex-1">{product.description}</p>
                  <ul className="space-y-2 mb-5">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-sm font-medium cursor-pointer">
                    <span>Ver más</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <BlurFade delay={0.1} inView>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">¿Necesitas algo personalizado?</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8">Desarrollamos soluciones a medida para tu negocio.</p>
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
