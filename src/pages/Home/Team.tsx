"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Adrian Auqui Perez",
    role: "Full-Stack Developer & AI Engineer",
    bio: "Especialista en IA, Three.js y arquitectura de software. Apasionado por compiladores y estructuras de datos.",
    imageUrl: "/logos/adrian.png",
    github: "https://github.com/Auky216",
    linkedin: "https://www.linkedin.com/in/adrian-antonio-auqui-perez-a079b2291/",
  },
  {
    name: "Fabrizzio Vilchez",
    role: "Full-Stack Developer & DevOps",
    bio: "Desarrollador full-stack con +4 años de experiencia. Enfocado en cloud computing, ML y sistemas IoT.",
    imageUrl: "/logos/fabrizzio.png",
    github: "https://github.com/Fabrizzio20k",
    linkedin: "https://www.linkedin.com/in/fabrizzio20k/",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -10);
    rotateY.set(x * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <BlurFade delay={0.15 + index * 0.15} inView>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 800,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Card className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 overflow-hidden cursor-pointer group">
          <CardHeader className="flex items-center justify-center p-6 pb-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-52 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-2 pb-6">
            <h3 className="text-base font-semibold tracking-tight">
              {member.name}
            </h3>
            <p className="text-xs text-neutral-400 font-mono tracking-wide">
              {member.role}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed px-2">
              {member.bio}
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
              </Link>
              <Link href={member.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </BlurFade>
  );
}

export default function Team() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              Equipo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Expertos{" "}
              <span className="font-light">en desarrollo</span>
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-lg mx-auto">
              Estudiantes de Ciencias de la Computación en UTEC, Lima, Perú.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
