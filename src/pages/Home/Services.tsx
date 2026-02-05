"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiGlobalLine } from "react-icons/ri";
import { FaStore, FaGears } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { FaWhatsapp, FaRegStar } from "react-icons/fa";

const services = [
  {
    icon: <RiGlobalLine className="text-2xl" />,
    title: "Landing Page",
    description:
      "Diseñamos landing pages atractivas y optimizadas para convertir visitantes en clientes.",
  },
  {
    icon: <FaStore className="text-2xl" />,
    title: "Tiendas Online",
    description:
      "Plataformas de venta online intuitivas, seguras y personalizadas para tu negocio.",
  },
  {
    icon: <FaGears className="text-2xl" />,
    title: "Automatización",
    description:
      "Optimizamos procesos con soluciones tecnológicas avanzadas para aumentar la eficiencia.",
  },
  {
    icon: <MdOutlineInventory className="text-2xl" />,
    title: "Gestión de Inventario",
    description:
      "Sistemas inteligentes para el control y administración de inventarios en tiempo real.",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: "Bots de Venta",
    description:
      "Automatiza la atención al cliente y las ventas con bots personalizados.",
  },
  {
    icon: <FaRegStar className="text-2xl" />,
    title: "Software a Medida",
    description:
      "Software desarrollado para resolver necesidades específicas de tu empresa.",
  },
];

export default function ServicesAdaptive() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
            Nuestros servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Soluciones digitales{" "}
            <span className="font-light">a tu medida</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-black/40 p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
    >
      {/* Spotlight follow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120,120,120,0.08), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300">
          {service.icon}
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-2 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      <Sparkles />
    </motion.div>
  );
};

const Sparkles = () => {
  const [stars, setStars] = useState<
    {
      top: string;
      left: string;
      size: string;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const newStars = [...Array(5)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="bg-black/40 dark:bg-white/40"
        />
      ))}
    </div>
  );
};
