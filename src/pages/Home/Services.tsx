"use client";

import React from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon3d: "/icons3d/globe.webp",
    title: "Landing Pages",
    description: "Páginas optimizadas para convertir visitantes en clientes.",
  },
  {
    icon3d: "/icons3d/cart.webp",
    title: "Tiendas Online",
    description: "E-commerce intuitivo, seguro y personalizado.",
  },
  {
    icon3d: "/icons3d/gear.webp",
    title: "Automatización",
    description: "Procesos optimizados con tecnología avanzada.",
  },
  {
    icon3d: "/icons3d/box.webp",
    title: "Gestión de Inventario",
    description: "Control inteligente de inventarios en tiempo real.",
  },
  {
    icon3d: "/icons3d/chat.webp",
    title: "Bots de Venta",
    description: "Atención automatizada con bots personalizados.",
  },
  {
    icon3d: "/icons3d/star.webp",
    title: "Software a Medida",
    description: "Soluciones específicas para tu empresa.",
  },
];

export default function ServicesAdaptive() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              Servicios
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Soluciones digitales{" "}
              <span className="font-light">a tu medida</span>
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.08} inView>
              <MagicCard
                className="h-full rounded-xl cursor-pointer"
                gradientFrom="#ffffff"
                gradientTo="#a0a0a0"
                gradientColor="rgba(150,150,150,0.06)"
                gradientOpacity={0.6}
              >
                <div className="relative p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.icon3d}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain dark:invert"
                      />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
