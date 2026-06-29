"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "../ui/button";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const { t } = useI18n();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better entry animation feel
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-200 liquid-glass-card rounded-2xl border border-neutral-200/50 dark:border-white/[0.08] bg-white/50 dark:bg-black/60 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.02)] select-none"
        >
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-neutral-600 dark:text-neutral-350">
                <Cookie className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Cookie Policy
              </span>
            </div>

            {/* Message */}
            <p className="text-xs text-neutral-550 dark:text-neutral-450 leading-relaxed font-normal">
              {t("cookieBanner.message")}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={handleDecline}
                className="text-xs font-semibold px-4 py-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer active:scale-95 duration-200"
              >
                {t("cookieBanner.decline")}
              </button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAccept}
                className="cursor-pointer rounded-full font-semibold px-5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 active:scale-95 transition-all text-xs h-8 shadow-xs"
              >
                {t("cookieBanner.accept")}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
