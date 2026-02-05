"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const year = new Date().getFullYear();

    return (
        <footer className="w-full mt-auto border-t border-gray-200 dark:border-gray-800">
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
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left max-w-[200px]">
                            Soluciones de IA para transformar tu negocio.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
                            Empresa
                        </h4>
                        <nav className="flex flex-col items-center lg:items-start gap-2.5">
                            <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Nosotros</Link>
                            <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contáctanos</Link>
                            <Link href="/solutions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Casos de éxito</Link>
                            <Link href="/resources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Blog</Link>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
                            Legal
                        </h4>
                        <nav className="flex flex-col items-center lg:items-start gap-2.5">
                            <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Términos de servicio</Link>
                            <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Privacidad</Link>
                            <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Cookies</Link>
                        </nav>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
                            Social
                        </h4>
                        <div className="flex items-center gap-4">
                            <Link href="https://www.instagram.com/tumyai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaInstagram className="text-lg" />
                            </Link>
                            <Link href="https://www.tiktok.com/@tumyai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaTiktok className="text-lg" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/tumyai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <FaLinkedin className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 dark:border-gray-900 py-6 px-6 md:px-16 lg:px-24">
                <p className="text-center text-xs text-gray-400 dark:text-gray-600">
                    {year} &copy; Tumy.ai. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
