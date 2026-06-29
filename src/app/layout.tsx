import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ibmPlexMono, geistSans } from "./fonts";
import { Toaster } from "@/components/Toaster/Toaster";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import LiquidGlassBackground from "@/components/LiquidGlassBackground/LiquidGlassBackground";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Tumy.ai (Tumyai) | Soluciones de Inteligencia Artificial para Empresas",
  description:
    "Impulsa la innovación de tu empresa con Tumy.ai (Tumyai). Desarrollo de herramientas, automatización y soluciones de IA (Inteligencia Artificial) adaptadas a tus necesidades.",
  keywords: [
    "Tumy.ai",
    "Tumyai",
    "Tumy AI",
    "Tumy ai",
    "tumi ai",
    "tumi.ai",
    "tumiai",
    "Tumi AI",
    "IA",
    "Inteligencia Artificial",
    "Soluciones empresariales",
    "Automatización",
    "Machine Learning",
  ],
  authors: [{ name: "Tumy.ai", url: "https://tumy.ai" }],
  creator: "Tumy.ai",
  publisher: "Tumy.ai",
  robots: "index, follow",
  metadataBase: new URL("https://tumy.ai"),
  alternates: {
    canonical: "https://tumy.ai",
    languages: {
      "es-ES": "https://tumy.ai",
      "en-US": "https://tumy.ai",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://tumy.ai",
    siteName: "Tumy.ai",
    title: "Tumy.ai (Tumyai) | IA para Empresas",
    description:
      "Tumy.ai es tu socio estratégico en IA. Soluciones basadas en Inteligencia Artificial para automatizar procesos y transformar digitalmente tu empresa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tumy.ai (Tumyai) | IA para Empresas",
    description:
      "Soluciones basadas en IA para automatizar procesos, aumentar la eficiencia y transformar digitalmente tu empresa.",
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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://images.unsplash.com; font-src 'self' data:; object-src 'none'; upgrade-insecure-requests;"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tumy.ai",
              alternateName: [
                "Tumyai",
                "Tumy ai",
                "Tumy AI",
                "Tumy.ai Inteligencia Artificial",
                "Tumi.ai",
                "Tumi AI",
                "Tumi ai",
                "tumiai",
                "tumi ai",
                "tumy ai",
                "tumy.ai",
                "tumyai",
                "tumy.ai soluciones empresariales",
                "tumy.ai automatización",
                "tumy.ai machine learning",
                "consultoría IA",
                "tumy.ai desarrollo de herramientas",
                "tumy.ai transformación digital",
                "consultora peruana de IA",
                "tumy.ai Perú",
                "ia para empresas",
                "soluciones de inteligencia artificial",
                "automatización de procesos",
              ],
              url: "https://tumy.ai",
              logo: "https://tumy.ai/logos/icon.ico",
              description:
                "Tumy.ai (Tumyai) es una empresa especializada en soluciones empresariales de Inteligencia Artificial y automatización.",
              sameAs: [
                "https://www.linkedin.com/company/tumyai",
                "https://twitter.com/tumyai",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col min-w-[400px] max-w-[1920px] mx-auto font-sans antialiased">
        <ThemeProvider attribute="class">
          <I18nProvider>
            <SmoothScroll />
            <LiquidGlassBackground />
            <ScrollProgress />
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
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
