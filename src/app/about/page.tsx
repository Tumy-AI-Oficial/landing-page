"use client";

import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Adrian Auqui Perez",
    role: "Full-Stack Developer & AI Engineer",
    imageUrl: "/logos/adrian.png",
    github: "https://github.com/Auky216",
    linkedin: "https://www.linkedin.com/in/adrian-antonio-auqui-perez-a079b2291/",
  },
  {
    name: "Fabrizzio Vilchez",
    role: "Full-Stack Developer & DevOps",
    imageUrl: "/logos/fabrizzio.png",
    github: "https://github.com/Fabrizzio20k",
    linkedin: "https://www.linkedin.com/in/fabrizzio20k/",
  },
];

const values = [
  { icon3d: "/icons3d/target.webp", title: "Precisión", description: "Cada solución resuelve problemas específicos de tu negocio." },
  { icon3d: "/icons3d/lightbulb.webp", title: "Innovación", description: "Las últimas tecnologías para mantenerte un paso adelante." },
  { icon3d: "/icons3d/users.webp", title: "Colaboración", description: "Trabajamos junto a ti desde la idea hasta el lanzamiento." },
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 15, suffix: "+", label: "Clientes" },
  { value: 3, suffix: "", label: "Países" },
  { value: 99, suffix: "%", label: "Satisfacción" },
];

export default function About() {
  return (
    <div className="w-full min-h-screen">
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">Sobre nosotros</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Construimos el futuro{" "}<span className="font-light">con tecnología</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Estudiantes de Ciencias de la Computación en UTEC, Lima, apasionados por la IA y soluciones digitales que generan impacto real.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.1} inView direction="right">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">Nuestra historia</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                De una idea{" "}<span className="font-light">a una misión</span>
              </h2>
              <div className="space-y-4 text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                <p>Tumy.ai nació de la convicción de que la tecnología debe ser accesible para todas las empresas.</p>
                <p>Combinamos inteligencia artificial con desarrollo personalizado para entregar resultados reales, no plantillas genéricas.</p>
                <p>Desde Perú, conectamos con empresas de toda Latinoamérica, transformando sus operaciones con tecnología de vanguardia.</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView direction="left">
            <div className="grid grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-black p-8 text-center">
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                    <NumberTicker value={stat.value} delay={0.3 + i * 0.15} />
                    <span className="text-neutral-300 dark:text-neutral-700">{stat.suffix}</span>
                  </div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">Valores</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Lo que nos <span className="font-light">define</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            {values.map((value, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                <div className="bg-white dark:bg-black p-10 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-5">
                    <Image src={value.icon3d} alt={value.title} width={64} height={64} className="w-full h-full object-contain dark:invert" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">Equipo</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Las personas{" "}<span className="font-light">detrás del código</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamMembers.map((member, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.15} inView>
                <div className="text-center group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <Image src={member.imageUrl} alt={member.name} width={300} height={380} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-xs text-neutral-400 font-mono tracking-wide">{member.role}</p>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
                    </Link>
                    <Link href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
        <BlurFade delay={0.1} inView>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Trabajemos juntos</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8">Cuéntanos sobre tu proyecto.</p>
            <div className="flex justify-center">
              <Link href="/contact">
                <ShimmerButton shimmerColor="rgba(255,255,255,0.4)" shimmerSize="0.05em" background="rgba(0,0,0,1)" className="px-10 py-3 text-base font-medium dark:border-white/20">
                  Iniciar conversación
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
