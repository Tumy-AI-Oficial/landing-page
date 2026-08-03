"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n";

export default function TermsPage() {
  const { t, locale } = useI18n();
  const sections = t("termsPage.sections") as { title: string; content: string; list: string[] }[];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32 pb-24">
      <div className="w-full max-w-3xl px-6 mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">
              {t("termsPage.legalTag")}
            </p>
            <h1 className="text-3xl font-bold lg:text-5xl tracking-tight mb-6">
              {t("termsPage.title")}
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">
              {t("termsPage.lastUpdated")}{new Date().toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            {sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {section.title}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                {section.list && section.list.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
