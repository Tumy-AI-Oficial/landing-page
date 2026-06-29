"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useContext, useState, useEffect } from "react";
import { es } from "./translations/es";
import { en } from "./translations/en";

type Locale = "es" | "en";
type TranslationKeys = typeof es;

interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => any;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

const translations: Record<Locale, TranslationKeys> = {
  es,
  en,
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Default to 'es' to match layout.tsx server rendering
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect language in client side
    const savedLang = localStorage.getItem("lang") as Locale | null;
    if (savedLang === "es" || savedLang === "en") {
      setLocaleState(savedLang);
    } else {
      // Auto detect from browser
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
      const defaultLocale: Locale = browserLang.toLowerCase().startsWith("es") ? "es" : "en";
      setLocaleState(defaultLocale);
      localStorage.setItem("lang", defaultLocale);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("lang", newLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }
  };

  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = (path: string): any => {
    const currentTranslations = translations[locale];
    const keys = path.split(".");
    let value: any = currentTranslations;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        // Fallback to Spanish if key not found in current locale
        let fallbackValue: any = translations["es"];
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === "object" && fallbackKey in fallbackValue) {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            fallbackValue = undefined;
            break;
          }
        }
        return fallbackValue !== undefined ? fallbackValue : path;
      }
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
