import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ibmPlexMono } from './fonts';
import { Toaster } from "@/components/Toaster/Toaster";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Tumy.ai | Soluciones de Inteligencia Artificial para Empresas",
  description: "Impulsa la innovación de tu empresa con Tumy.ai: herramientas y soluciones basadas en inteligencia artificial adaptadas a tus necesidades.",
  keywords: ["IA", "Inteligencia Artificial", "Soluciones empresariales", "Automatización", "Machine Learning", "Tumy.ai", "Tecnología", "Software empresarial"],
  authors: [{ name: "Tumy.ai", url: "https://tumy.ai" }],
  creator: "Tumy.ai",
  publisher: "Tumy.ai",
  robots: "index, follow",
  metadataBase: new URL("https://tumy.ai"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tumy.ai",
    siteName: "Tumy.ai",
    title: "Tumy.ai | Soluciones de Inteligencia Artificial para Empresas",
    description: "Soluciones basadas en IA para automatizar procesos, aumentar la eficiencia y transformar digitalmente tu empresa.",
    images: [
      {
        url: "/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Tumy.ai - Soluciones IA",
      },
    ],
  },
  icons: {
    icon: "/logos/icon.ico",
    shortcut: "/logos/icon.ico",
  },
  //manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${ibmPlexMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://tumy.ai" />
      </head>
      <body className="min-h-screen flex flex-col min-w-[400px] max-w-[1920px] mx-auto px-8 font-ibm">
        <ThemeProvider attribute="class">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
            height="90vh"
          />
          <Toaster />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
