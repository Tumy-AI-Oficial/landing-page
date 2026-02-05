"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  Server,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Implementamos soluciones de IA que transforman datos en decisiones inteligentes para tu negocio.",
    items: [
      "IA Generativa",
      "LLM & NLM",
      "Machine Learning",
      "Chatbots",
      "IA Personalizada",
    ],
  },
  {
    icon: Server,
    title: "Software Empresarial",
    description:
      "Sistemas robustos diseñados para optimizar las operaciones de tu empresa.",
    items: [
      "Gestión de Inventario",
      "Sistemas de Ventas",
      "Sistemas de Facturación",
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables con las mejores tecnologías.",
    items: ["React / Vue / Angular", "Node.js / Python / .NET", "GoLang"],
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description:
      "Apps nativas y multiplataforma con experiencias de usuario excepcionales.",
    items: ["iOS / Android", "React Native", "Flutter"],
  },
  {
    icon: Palette,
    title: "Diseño de Producto",
    description:
      "Diseño centrado en el usuario que convierte ideas en productos intuitivos.",
    items: [
      "Diseño UI/UX",
      "Sistemas de diseño",
      "Prototipos & Wireframes",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Aseguramiento de Calidad",
    description:
      "Garantizamos la calidad de cada línea de código y cada interacción.",
    items: [
      "QA Automatizado",
      "Pruebas Manuales",
      "Testing de API",
      "Pruebas de Rendimiento",
    ],
  },
];

export default function SolutionsPage() {
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
            Nuestras soluciones
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Soluciones inteligentes{" "}
            <span className="font-light">para todos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Te ayudamos a crear soluciones personalizadas utilizando las últimas
            tecnologías en desarrollo, inteligencia artificial y diseño digital.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>

                {/* Title & desc */}
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
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
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Cuéntanos tu idea y te ayudamos a hacerla realidad.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="px-10">
              Contáctanos
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
