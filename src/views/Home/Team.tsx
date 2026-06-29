"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Linkedin, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const teamData = [
  {
    imageUrl: "/logos/adrian.jpg",
    github: "https://github.com/Auky216",
    linkedin: "https://www.linkedin.com/in/adrian-antonio-auqui-perez-a079b2291/",
  },
  {
    imageUrl: "/logos/fabrizzio.jpg",
    github: "https://github.com/Fabrizzio20k",
    linkedin: "https://www.linkedin.com/in/fabrizzio20k/",
  },
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  github: string;
  linkedin: string;
}

function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
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
        <div className="liquid-glass-card rounded-xl border border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 transition-all duration-300 overflow-hidden cursor-pointer group">
          <div className="flex items-center justify-center p-6 pb-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-52 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="text-center space-y-2 px-6 pb-6">
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
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export default function Team() {
  const { t } = useI18n();
  const teamItems = t("team.items") || [];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
              {t("team.sectionTag")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("team.sectionTitle")}<span className="font-light">{t("team.sectionTitleHighlight")}</span>
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 max-w-lg mx-auto">
              {t("team.sectionSub")}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
          {teamData.map((member, index) => {
            const item = teamItems[index] || {};
            const fullMember = {
              ...member,
              name: item.name || "",
              role: item.role || "",
              bio: item.bio || "",
            };

            return (
              <TeamCard key={index} member={fullMember} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
