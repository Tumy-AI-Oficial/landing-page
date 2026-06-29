"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Cookie, Info, RefreshCw } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Ensure to use the correct toast notifier, or standard alert/toast if available

export default function CookiesPage() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReset = () => {
    setIsResetting(true);
    // Clear cookie consent from localStorage
    localStorage.removeItem("cookie-consent");
    
    // Notify user
    toast.success(t("cookiesPage.resetSuccess"));
    
    // Reload page after a brief delay
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  if (!mounted) {
    return null;
  }

  // Cast translations since they are arrays of objects
  const cookiesList = t("cookiesPage.cookiesList") as unknown as Array<{
    name: string;
    purpose: string;
    duration: string;
  }>;

  const tableHeaders = t("cookiesPage.tableHeaders") as unknown as string[];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen w-full pt-32 pb-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col gap-8"
      >
        {/* Back Link */}
        <motion.div variants={itemVariants} className="flex justify-start">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer rounded-full font-semibold border-neutral-200/50 dark:border-white/[0.08] hover:bg-neutral-50 dark:hover:bg-white/[0.05] transition-all text-xs h-9 flex items-center gap-2 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              {t("cookiesPage.backButton")}
            </Button>
          </Link>
        </motion.div>

        {/* Title Block */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900/5 dark:bg-white/5 flex items-center justify-center text-neutral-600 dark:text-neutral-350">
              <Cookie className="w-5 h-5" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {t("cookiesPage.title")}
            </h1>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
            {t("cookiesPage.subtitle")}
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          variants={itemVariants}
          className="liquid-glass-card rounded-2xl border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 flex items-start gap-4"
        >
          <Info className="w-5 h-5 text-neutral-450 dark:text-neutral-500 shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {t("cookiesPage.intro")}
          </p>
        </motion.div>

        {/* Cookies Table Card */}
        <motion.div
          variants={itemVariants}
          className="liquid-glass-card rounded-2xl border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 overflow-hidden"
        >
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            {t("cookiesPage.typesTitle")}
          </h2>
          <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            {t("cookiesPage.essentialTitle")}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-450 leading-relaxed mb-6">
            {t("cookiesPage.essentialDesc")}
          </p>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto rounded-xl border border-neutral-200/30 dark:border-white/5 bg-neutral-900/5 dark:bg-black/20">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b border-neutral-200/30 dark:border-white/5 bg-neutral-900/10 dark:bg-black/40 text-neutral-800 dark:text-neutral-200 font-semibold select-none">
                  <th className="p-4">{tableHeaders[0]}</th>
                  <th className="p-4">{tableHeaders[1]}</th>
                  <th className="p-4">{tableHeaders[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/30 dark:divide-white/5 text-neutral-600 dark:text-neutral-400">
                {Array.isArray(cookiesList) &&
                  cookiesList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-neutral-900/5 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                        {item.name}
                      </td>
                      <td className="p-4 leading-relaxed">{item.purpose}</td>
                      <td className="p-4 font-medium whitespace-nowrap">{item.duration}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Manage Preferences Card */}
        <motion.div
          variants={itemVariants}
          className="liquid-glass-card rounded-2xl border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              {t("cookiesPage.manageTitle")}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
              {t("cookiesPage.manageDesc")}
            </p>
          </div>
          <Button
            variant="default"
            disabled={isResetting}
            onClick={handleReset}
            className="cursor-pointer rounded-full font-semibold px-6 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all text-xs h-10 shadow-xs flex items-center gap-2 group w-full md:w-auto shrink-0 justify-center"
          >
            <RefreshCw className={`w-3.5 h-3.5 group-hover:rotate-45 transition-transform ${isResetting ? "animate-spin" : ""}`} />
            {t("cookiesPage.resetButton")}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
