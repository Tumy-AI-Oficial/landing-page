"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAmazon,
  SiPython,
  SiServerless,
  SiMeta,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  { name: "NextJS", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "AWS", Icon: SiAmazon },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Serverless", Icon: SiServerless },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Meta", Icon: SiMeta },
];

const TechnologyItem = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center mx-4 md:mx-6 transition-all duration-300 hover:scale-110",
        "text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white",
        "h-20 w-24 sm:h-24 sm:w-28 md:h-24 md:w-32 shrink-0"
      )}
    >
      <Icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mb-2" />
      <span className="text-[0.65rem] sm:text-xs font-medium text-center tracking-wide">
        {name}
      </span>
    </div>
  );
};

export default function Technologies() {
  return (
    <section className="w-full py-20 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3 font-mono">
            Stack tecnológico
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tecnologías <span className="font-light">que usamos</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Mobile scrollable */}
        <div className="md:hidden overflow-x-auto flex gap-2 scrollbar-hide py-2 px-4">
          {technologies.map((tech) => (
            <TechnologyItem key={tech.name} {...tech} />
          ))}
        </div>

        {/* Desktop marquee */}
        <div className="relative hidden md:flex w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {technologies.map((tech) => (
              <TechnologyItem key={tech.name} {...tech} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
      </motion.div>
    </section>
  );
}
