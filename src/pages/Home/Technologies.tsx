import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
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
  SiPostgresql
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
        "flex flex-col items-center justify-center mx-3 sm:mx-4 md:mx-6 transition-transform hover:scale-110",
        "text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white",
        "h-20 w-24 sm:h-24 sm:w-28 md:h-24 md:w-36 shrink-0"
      )}
    >
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mb-1 sm:mb-2" />
      <span className="text-[0.65rem] sm:text-xs md:text-sm font-medium text-center">
        {name}
      </span>
    </div>
  );
};

export default function Technologies() {
  return (
    <div className="w-full py-8 sm:py-12 bg-gray-100 dark:bg-black transition-colors duration-300">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-white">
        <span className="font-bold">+Tecnologías</span>{" "}
        <span className="font-light">actuales</span>
      </h1>
      <div className="container mx-auto px-4">
        {/* Mobile scrollable view */}
        <div className="md:hidden overflow-x-auto flex gap-4 scrollbar-hide py-2">
          {technologies.map((tech) => (
            <TechnologyItem key={tech.name} {...tech} />
          ))}
        </div>

        {/* Marquee for desktop */}
        <div className="relative hidden md:flex w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {technologies.map((tech) => (
              <TechnologyItem key={tech.name} {...tech} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-100 dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-100 dark:from-black"></div>
        </div>
      </div>
    </div>
  );
}
