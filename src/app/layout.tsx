import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ibmPlexMono, geistSans } from './fonts';
import { Toaster } from "@/components/Toaster/Toaster";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

export const metadata: Metadata = {
  title: "Tumy.ai (Tumyai) | Soluciones de Inteligencia Artificial para Empresas",
  description: "Impulsa la innovación de tu empresa con Tumy.ai (Tumyai). Desarrollo de herramientas, automatización y soluciones de IA (Inteligencia Artificial) adaptadas a tus necesidades.",
  keywords: ["Tumy.ai", "Tumyai", "Tumy AI", "Tumy ai", "IA", "Inteligencia Artificial", "Soluciones empresariales", "Automatización", "Machine Learning"],
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
    title: "Tumy.ai (Tumyai) | IA para Empresas",
    description: "Tumy.ai es tu socio estratégico en IA. Soluciones basadas en Inteligencia Artificial para automatizar procesos y transformar digitalmente tu empresa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tumy.ai (Tumyai) | IA para Empresas",
    description: "Soluciones basadas en IA para automatizar procesos, aumentar la eficiencia y transformar digitalmente tu empresa.",
  },
  icons: {
    icon: "/logos/icon.ico",
    shortcut: "/logos/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://tumy.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tumy.ai",
              "alternateName": ["Tumyai", "Tumy ai", "Tumy AI", "Tumy.ai Inteligencia Artificial"],
              "url": "https://tumy.ai",
              "logo": "https://tumy.ai/logos/icon.ico",
              "description": "Tumy.ai (Tumyai) es una empresa especializada en soluciones empresariales de Inteligencia Artificial y automatización.",
              "sameAs": [
                "https://www.linkedin.com/company/tumyai",
                "https://twitter.com/tumyai"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col min-w-[400px] max-w-[1920px] mx-auto font-sans antialiased">
        <ThemeProvider attribute="class">
          <SmoothScroll />
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
            height="90vh"
          />
          <Toaster />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
