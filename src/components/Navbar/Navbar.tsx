"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// High-fidelity morphing Theme Toggle component (Sun/Moon rotative switch)
function ThemeToggle({ theme, setTheme }: { theme: string; setTheme: (theme: string) => void }) {
    const isDark = theme === "dark";
    
    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-8 h-8 rounded-full border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-white/[0.04] backdrop-blur-md flex items-center justify-center cursor-pointer shadow-xs hover:scale-105 active:scale-95 transition-all duration-200 text-neutral-600 dark:text-neutral-350 hover:text-black dark:hover:text-white shrink-0"
            aria-label="Cambiar tema"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <FaSun className="text-[13px]" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <FaMoon className="text-[13px]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
import { FaMoon, FaSun, FaBars, FaX } from "react-icons/fa6";
import { Button } from '../ui/button';

interface NavbarItem {
    title: string;
    href: string;
}

const navbarItems: NavbarItem[] = [
    { title: 'Inicio', href: '/' },
    { title: 'Servicios', href: '/#services' },
    { title: 'Productos', href: '/#products' },
    { title: 'Nosotros', href: '/#about' },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const { setTheme, resolvedTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Track scroll hash dynamically using a highly accurate viewport position listener
    useEffect(() => {
        if (pathname !== '/') {
            setActiveHash('');
            return;
        }

        const handleScroll = () => {
            if (window.scrollY < 150) {
                setActiveHash('');
                return;
            }

            const sections = ['services', 'products', 'about'];
            let current = '';

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Detect if the section takes up the primary focus area of the screen
                    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
                        current = '#' + id;
                        break;
                    }
                }
            }

            if (current) {
                setActiveHash(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`z-200 fixed inset-0 bg-black/80 backdrop-blur-xl md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`flex flex-col h-full p-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-end">
                        <button
                            className="p-2 text-white cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <FaX className="text-lg" />
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-6 mt-16">
                        {navbarItems.map((item, index) => {
                            const isActive = item.href === '/'
                                ? activeHash === ''
                                : activeHash === item.href.substring(item.href.indexOf('#'));
                            return (
                                <li
                                    key={index}
                                    className={`transform transition-all duration-300 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 75}ms` }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-2xl font-medium tracking-tight transition-colors ${
                                            isActive ? 'text-white' : 'text-white/60 hover:text-neutral-300'
                                        }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                        <li
                            className={`transform transition-all duration-300 flex items-center justify-between border-t border-white/10 pt-6 mt-4 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: `${navbarItems.length * 75}ms` }}
                        >
                            <span className="text-lg text-white/60 font-medium">Modo oscuro</span>
                            {mounted ? (
                                <ThemeToggle theme={resolvedTheme || 'dark'} setTheme={setTheme} />
                            ) : (
                                <div className="w-8 h-8 rounded-full border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-white/[0.04] backdrop-blur-md" />
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Navbar */}
            <nav
                className={`fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl z-100 py-2.5 px-6 md:px-8 select-none rounded-full transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/35 dark:bg-black/45 backdrop-blur-2xl border border-white/25 dark:border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]'
                        : 'bg-white/15 dark:bg-black/20 backdrop-blur-xl border border-white/15 dark:border-white/[0.04] shadow-[0_6px_20px_rgba(0,0,0,0.02)]'
                    }`}
            >
                <Link className='flex items-center gap-2.5 cursor-pointer' href="/">
                    <Image
                        src="/logos/logo.webp"
                        alt="Logo"
                        width={32}
                        height={32}
                        className={mounted && resolvedTheme === 'dark' ? 'invert' : ''}
                    />
                    <span className="text-base font-semibold tracking-tight">Tumy.ai</span>
                </Link>

                <ul className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.04] p-1 rounded-full border border-black/[0.03] dark:border-white/[0.04]">
                    {navbarItems.map((item, index) => {
                        const isActive = item.href === '/'
                            ? activeHash === ''
                            : activeHash === item.href.substring(item.href.indexOf('#'));
                        return (
                            <li key={index} className="relative">
                                <Link
                                    href={item.href}
                                    className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 block ${
                                        isActive
                                            ? 'text-black dark:text-white'
                                            : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                                    }`}
                                >
                                    {item.title}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-pill"
                                        className="absolute inset-0 bg-white dark:bg-white/[0.08] rounded-full border border-black/[0.02] dark:border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.1)] -z-0"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="md:hidden flex items-center gap-3">
                    <Link href="/#contact">
                        <Button variant="default" size="sm" className="cursor-pointer rounded-full font-semibold px-4 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 active:scale-95 transition-all text-xs h-8">
                            Contacto
                        </Button>
                    </Link>
                    <button
                        className="p-1.5 z-50 relative cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <FaBars className='text-lg' />
                    </button>
                </div>

                <div className='hidden md:flex items-center gap-4 min-w-[32px] h-8 justify-center'>
                    {mounted ? (
                        <ThemeToggle theme={resolvedTheme || 'dark'} setTheme={setTheme} />
                    ) : (
                        <div className="w-8 h-8 rounded-full border border-neutral-200/50 dark:border-white/[0.08] bg-white/20 dark:bg-white/[0.04] backdrop-blur-md" />
                    )}
                    <Link href="/#contact">
                        <Button variant="default" size="sm" className="cursor-pointer rounded-full font-semibold px-5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hover:scale-105 active:scale-95 transition-all text-xs h-8 shadow-xs">
                            Contáctanos
                        </Button>
                    </Link>
                </div>
            </nav>

            <div className="h-20"></div>
        </>
    );
}
