"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStart",
    body: "Transformaron completamente nuestra presencia digital. Profesionales y puntuales.",
  },
  {
    name: "Carlos López",
    role: "Director, Innova Solutions",
    body: "La automatización redujo nuestros costos operativos en un 40%.",
  },
  {
    name: "Ana Rodríguez",
    role: "Fundadora, EcoShop",
    body: "Las ventas crecieron un 200% en el primer trimestre.",
  },
  {
    name: "Pedro Martínez",
    role: "CTO, DataFlow",
    body: "Se integró perfectamente con nuestros sistemas existentes.",
  },
  {
    name: "Laura Sánchez",
    role: "Marketing, GrowthCo",
    body: "El bot atiende el 70% de consultas automáticamente.",
  },
  {
    name: "Diego Torres",
    role: "Gerente, LogiTech",
    body: "Visibilidad total del inventario. Ya no perdemos ventas.",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

function TestimonialCard({
  name,
  role,
  body,
}: {
  name: string;
  role: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-72 shrink-0 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-6",
        "hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors duration-300 cursor-pointer"
      )}
    >
      <blockquote className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-xs font-bold">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-neutral-400">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              Testimonios
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Lo que dicen{" "}
              <span className="font-light">nuestros clientes</span>
            </h2>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.2} inView>
        <div className="relative w-full">
          <Marquee pauseOnHover className="[--duration:40s] mb-4">
            {firstRow.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black" />
        </div>
      </BlurFade>
    </section>
  );
}
