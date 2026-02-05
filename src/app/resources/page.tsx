"use client";

import { motion } from "framer-motion";
import { FileText, Video, BookOpen, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    category: "Guía",
    title: "Introducción a la IA para empresas",
    description:
      "Descubre cómo la inteligencia artificial puede transformar los procesos de tu empresa.",
    tag: "Próximamente",
  },
  {
    icon: Video,
    category: "Video",
    title: "Automatización con chatbots inteligentes",
    description:
      "Aprende cómo implementar chatbots que mejoran la experiencia de tus clientes.",
    tag: "Próximamente",
  },
  {
    icon: BookOpen,
    category: "Artículo",
    title: "Tendencias tecnológicas 2026",
    description:
      "Las tecnologías que están redefiniendo el panorama digital este año.",
    tag: "Próximamente",
  },
  {
    icon: Download,
    category: "Plantilla",
    title: "Checklist para tu proyecto digital",
    description:
      "Todo lo que necesitas considerar antes de iniciar un proyecto de desarrollo.",
    tag: "Próximamente",
  },
  {
    icon: FileText,
    category: "Case Study",
    title: "Optimización de inventario con IA",
    description:
      "Cómo ayudamos a una empresa a reducir costos un 40% con machine learning.",
    tag: "Próximamente",
  },
  {
    icon: BookOpen,
    category: "Artículo",
    title: "Diseño UI/UX que convierte",
    description:
      "Principios de diseño que aumentan las conversiones de tu landing page.",
    tag: "Próximamente",
  },
];

export default function Resources() {
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
            Recursos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Aprende{" "}
            <span className="font-light">con nosotros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Guías, artículos y recursos para mantenerte al día con las últimas
            tendencias en tecnología e inteligencia artificial.
          </motion.p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-800 rounded-full px-3 py-1">
                    {resource.tag}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-2">
                  {resource.category}
                </p>
                <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {resource.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-gray-100 dark:border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            No te pierdas nada
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Estamos preparando contenido de alto valor. Contáctanos para ser el
            primero en enterarte.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="px-10">
              Mantenerme informado
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
