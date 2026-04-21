"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
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

const row1 = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Python", Icon: SiPython },
  { name: "Node.js", Icon: SiNodedotjs },
];

const row2 = [
  { name: "AWS", Icon: SiAmazon },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Serverless", Icon: SiServerless },
  { name: "Meta", Icon: SiMeta },
];

function TechItem({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="flex items-center gap-3 mx-8 text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer">
      <Icon className="h-6 w-6 shrink-0" />
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="w-full py-20 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tecnologías <span className="font-light">que usamos</span>
            </h2>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.2} inView>
        <ScrollVelocityContainer className="overflow-hidden">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            {row1.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1} className="mt-4">
            {row2.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </BlurFade>
    </section>
  );
}
