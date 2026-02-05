"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Adrian Auqui Perez",
    role: "Ingeniero de Software",
    imageUrl: "/logos/adrian.png",
  },
  {
    name: "Ronal Condor Blas",
    role: "Ingeniero de Software",
    imageUrl: "/logos/ronald.png",
  },
  {
    name: "Fabrizzio Vilchez",
    role: "Ingeniero de Software",
    imageUrl: "/logos/fabrizzio.png",
  },
];

const values = [
  {
    icon: Target,
    title: "Precisión",
    description:
      "Cada solución es diseñada para resolver problemas específicos de tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Utilizamos las últimas tecnologías para mantenerte un paso adelante.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajamos junto a ti en cada etapa, desde la idea hasta el lanzamiento.",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 font-mono"
          >
            Sobre nosotros
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Construimos el futuro{" "}
            <span className="font-light">con tecnología</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Somos un equipo de ingenieros de software en Perú apasionados por la
            inteligencia artificial y el desarrollo de soluciones digitales que
            generan impacto real.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
              Nuestra historia
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              De una idea{" "}
              <span className="font-light">a una misión</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Tumy.ai nació de la convicción de que la tecnología debe ser
                accesible para todas las empresas, sin importar su tamaño.
              </p>
              <p>
                Creemos que cada negocio merece soluciones de software diseñadas
                a su medida, no plantillas genéricas. Por eso combinamos
                inteligencia artificial con desarrollo personalizado para
                entregar resultados reales.
              </p>
              <p>
                Desde Perú, conectamos con empresas de toda Latinoamérica,
                ayudándolas a transformar sus operaciones con tecnología de
                vanguardia.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50+", label: "Proyectos entregados" },
              { number: "15+", label: "Clientes activos" },
              { number: "3", label: "Países atendidos" },
              { number: "99%", label: "Satisfacción del cliente" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
              Nuestros valores
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Lo que nos <span className="font-light">define</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
              El equipo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Las personas{" "}
              <span className="font-light">detrás del código</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={300}
                    height={380}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-gray-100 dark:border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="px-10">
              Iniciar conversación
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
