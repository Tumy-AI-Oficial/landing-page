"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Linkedin, Github } from "lucide-react";

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
    <BlurFade delay={0.15 + index * 0.12} inView>
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
            <div className="flex items-center justify-center gap-3 pt-2">
              <Linkedin className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
              <Github className="w-4 h-4 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer" />
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
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
