"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const targetCommand = t("notFound.commandPrompt") || "";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simulate typing effect on command prompt
  useEffect(() => {
    if (!mounted) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedCommand((prev) => prev + targetCommand.charAt(index));
      index++;
      if (index >= targetCommand.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [mounted, targetCommand]);

  if (!mounted) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center justify-center px-6 md:px-16 relative overflow-hidden select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full liquid-glass-card rounded-2xl border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-black/40 backdrop-blur-xl p-6 md:p-8 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200/50 dark:border-white/10 mb-6">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:scale-105 active:scale-95 transition-transform" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:scale-105 active:scale-95 transition-transform" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 hover:scale-105 active:scale-95 transition-transform" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-450 dark:text-neutral-500">
            <Terminal className="w-3.5 h-3.5" />
            <span>tumy_terminal.sh</span>
          </div>
        </div>

        {/* Title & Banner */}
        <motion.h1 
          variants={lineVariants}
          className="text-2xl md:text-3xl font-extrabold text-black dark:text-white tracking-tight mb-2"
        >
          {t("notFound.title")}
        </motion.h1>
        
        <motion.p 
          variants={lineVariants}
          className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-6 font-normal leading-relaxed"
        >
          {t("notFound.subtitle")}
        </motion.p>

        {/* Console Log Area */}
        <div className="space-y-2.5 bg-neutral-900/5 dark:bg-black/30 border border-neutral-200/50 dark:border-white/[0.05] p-5 rounded-xl text-left text-xs md:text-sm mb-8 leading-relaxed font-mono">
          <motion.div variants={lineVariants} className="text-neutral-400 dark:text-neutral-500">
            [SYS] Initialization timestamp: {new Date().toISOString()}
          </motion.div>
          
          <motion.div variants={lineVariants} className="text-neutral-500">
            [+] {t("notFound.recoveryProtocol")}
          </motion.div>
          
          <motion.div variants={lineVariants} className="text-neutral-500">
            [~] {t("notFound.analyzingRequest")}
          </motion.div>
          
          <motion.div variants={lineVariants} className="text-red-500 font-semibold dark:text-red-400">
            [!] {t("notFound.routeError")}
          </motion.div>
          
          <motion.div variants={lineVariants} className="text-neutral-600 dark:text-neutral-400">
            [*] {t("notFound.recommendation")}
          </motion.div>
          
          {/* Simulated Input */}
          <motion.div variants={lineVariants} className="flex items-center gap-1 text-black dark:text-white pt-2 border-t border-neutral-200/30 dark:border-white/5 mt-4">
            <span>{typedCommand}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
              className="inline-block w-1.5 h-3.5 bg-neutral-600 dark:bg-neutral-300"
            />
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div variants={lineVariants} className="flex justify-center md:justify-start">
          <Link href="/">
            <Button
              variant="default"
              className="cursor-pointer rounded-full font-semibold px-6 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all text-xs h-9 shadow-xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              {t("notFound.button")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
