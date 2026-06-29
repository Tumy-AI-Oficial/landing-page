"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { t, locale } = useI18n();

    useEffect(() => {
        setMounted(true);
    }, []);

    const year = new Date().getFullYear();

    return (
        <footer className="w-full mt-auto border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <div className="flex items-center gap-2.5">
                            {mounted && (
                                <Image
                                    src="/logos/logo.webp"
                                    alt="Logo"
                                    width={28}
                                    height={28}
                                    className={resolvedTheme === "dark" ? "invert" : ""}
                                />
                            )}
                            <span className="text-base font-semibold tracking-tight">Tumy.ai</span>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center lg:text-left max-w-[200px]">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                            {t("footer.colCompany")}
                        </h4>
                        <nav className="flex flex-col items-center lg:items-start gap-2.5">
                            <Link href="/#about" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("navbar.about")}</Link>
                            <Link href="/#contact" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("navbar.contact")}</Link>
                            <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{locale === 'es' ? 'Soluciones' : 'Solutions'}</Link>
                            <Link href="/#products" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("navbar.products")}</Link>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                            {t("footer.colLegal")}
                        </h4>
                        <nav className="flex flex-col items-center lg:items-start gap-2.5">
                            <Link href="/#contact" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("footer.terms")}</Link>
                            <Link href="/#contact" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("footer.privacy")}</Link>
                            <Link href="/cookies" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">{t("footer.cookies")}</Link>
                        </nav>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                            {t("footer.colSocial")}
                        </h4>
                        <div className="flex items-center gap-4">
                            <Link href="https://www.instagram.com/tumyai/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaInstagram className="text-lg" />
                            </Link>
                            <Link href="https://www.tiktok.com/@tumyai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaTiktok className="text-lg" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/tumyai/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaLinkedin className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-100 dark:border-neutral-900 py-6 px-6 md:px-16 lg:px-24">
                <p className="text-center text-xs text-neutral-400 dark:text-neutral-600">
                    {year} &copy; Tumy.ai. {t("footer.rights")}
                </p>
            </div>
        </footer>
    );
}
