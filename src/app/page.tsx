import Introduction from "@/pages/Home/Introduction";
import Services from "@/pages/Home/Services";
import ProductsSection from "@/pages/Home/ProductsSection";
import AboutSection from "@/pages/Home/AboutSection";
import Advantages from "@/pages/Home/Advantages";
import Team from "@/pages/Home/Team";
import ContactPage from "@/pages/Contact/ContactPage";
import CTA from "@/pages/Home/CTA";

export default function Home() {
  return (
    <div className="relative w-full bg-transparent flex flex-col">
      {/* 1. Introduction/Hero (scrolls normally with internal molecule rotation) */}
      <Introduction />
      
      {/* 2. Servicios */}
      <div id="services" className="border-t border-neutral-200/10 dark:border-white/[0.04] bg-transparent">
        <Services />
      </div>

      {/* 3. Productos / Portafolio */}
      <div id="products" className="border-t border-neutral-200/10 dark:border-white/[0.04] bg-transparent">
        <ProductsSection />
      </div>

      {/* 4. Sobre Nosotros (Historia y Valores) */}
      <div id="about" className="border-t border-neutral-200/10 dark:border-white/[0.04] bg-transparent">
        <AboutSection />
      </div>

      {/* 5. Ventajas (Contiene la frase TextReveal y la lista de ventajas) */}
      <div className="w-full bg-transparent border-t border-neutral-200/10 dark:border-white/[0.04]">
        <Advantages />
      </div>

      {/* 6. Equipo */}
      <div className="border-t border-neutral-200/10 dark:border-white/[0.04] bg-transparent">
        <Team />
      </div>

      {/* 8. Formulario de Contacto */}
      <div id="contact" className="border-t border-neutral-200/10 dark:border-white/[0.04] bg-transparent">
        <ContactPage />
      </div>

      {/* 9. Llamada a la acción final */}
      <div className="relative z-10 bg-transparent border-t border-neutral-200/10 dark:border-white/[0.04] py-20 md:py-32">
        <CTA />
      </div>
    </div>
  );
}
