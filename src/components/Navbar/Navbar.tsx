"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaX } from "react-icons/fa6";
import { Button } from '../ui/button';

interface NavbarItem {
    title: string;
    href: string;
}

const navbarItems: NavbarItem[] = [
    { title: 'Productos', href: '/products' },
    { title: 'Soluciones', href: '/solutions' },
    { title: 'Recursos', href: '/resources' },
    { title: 'Nosotros', href: '/about' },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`z-200 fixed inset-0 bg-black/80 backdrop-blur-xl md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`flex flex-col h-full p-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-end">
                        <button
                            className="p-2 text-white"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <FaX className="text-lg" />
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-6 mt-16">
                        {navbarItems.map((item, index) => (
                            <li
                                key={index}
                                className={`transform transition-all duration-300 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${index * 75}ms` }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-2xl font-medium text-white hover:text-gray-300 transition-colors tracking-tight"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li
                            className={`transform transition-all duration-300 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: `${navbarItems.length * 75}ms` }}
                        >
                            <button
                                className="text-lg text-white/70 hover:text-white transition-colors flex items-center gap-2"
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            >
                                {resolvedTheme === 'dark' ? (
                                    <><FaSun className="text-base" /><span>Modo claro</span></>
                                ) : (
                                    <><FaMoon className="text-base" /><span>Modo oscuro</span></>
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 flex items-center justify-between w-full z-100 py-3 px-6 md:px-8 lg:px-12 select-none transition-all duration-500 ${scrolled
                    ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50'
                    : 'bg-transparent'
                    }`}
            >
                <Link className='flex items-center gap-2.5' href="/">
                    <Image
                        src="/logos/logo.webp"
                        alt="Logo"
                        width={32}
                        height={32}
                        className={resolvedTheme === 'dark' ? 'invert' : ''}
                    />
                    <span className="text-base font-semibold tracking-tight">Tumy.ai</span>
                </Link>

                <ul className="hidden md:flex items-center gap-8">
                    {navbarItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden flex items-center gap-3">
                    <Link href="/contact">
                        <Button variant="default" size="sm">
                            Contacto
                        </Button>
                    </Link>
                    <button
                        className="p-1.5 z-50 relative"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <FaBars className='text-lg' />
                    </button>
                </div>

                <div className='hidden md:flex items-center gap-3'>
                    <button
                        className="p-2 rounded-lg text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    >
                        {resolvedTheme === 'dark' ? (
                            <FaSun className="text-sm" />
                        ) : (
                            <FaMoon className="text-sm" />
                        )}
                    </button>
                    <Link href="/contact">
                        <Button variant="default" size="sm">
                            Contáctanos
                        </Button>
                    </Link>
                </div>
            </nav>

            <div className="h-16"></div>
        </>
    );
}
