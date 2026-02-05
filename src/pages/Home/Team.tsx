"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Card className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-black dark:text-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <CardHeader className="flex items-center justify-center p-6 pb-4">
          <Image
            width={200}
            height={200}
            src={member.imageUrl}
            alt={member.name}
            className="w-40 h-52 object-cover rounded-lg"
          />
        </CardHeader>
        <CardContent className="text-center space-y-1 pb-6">
          <h3 className="text-base font-semibold tracking-tight">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {member.role}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Team() {
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
            Nuestro equipo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Expertos{" "}
            <span className="font-light">en desarrollo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
