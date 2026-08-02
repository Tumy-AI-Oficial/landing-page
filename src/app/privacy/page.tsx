import { BlurFade } from "@/components/ui/blur-fade";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32 pb-24">
      <div className="w-full max-w-3xl px-6 mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">
              [ LEGAL ]
            </p>
            <h1 className="text-3xl font-bold lg:text-5xl tracking-tight mb-6">
              Política de Privacidad
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">1. Información que recopilamos</h2>
              <p>En Tumy.ai, recopilamos información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico y detalles de su empresa al utilizar nuestro formulario de contacto o al solicitar nuestros servicios.</p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">2. Uso de la información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveer, operar y mantener nuestros servicios.</li>
                <li>Mejorar y personalizar la experiencia del usuario.</li>
                <li>Comprender y analizar cómo utiliza nuestra plataforma.</li>
                <li>Comunicarnos con usted para servicio al cliente y fines promocionales.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">3. Protección de datos</h2>
              <p>Implementamos una variedad de medidas de seguridad de alto nivel para mantener la seguridad de su información personal cuando realiza una solicitud o accede a nuestros servicios. No compartimos su información con terceros sin su consentimiento, excepto cuando sea requerido por la ley.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">4. Servicios de terceros</h2>
              <p>Este sitio está protegido por Google reCAPTCHA para prevenir el spam y el abuso. El uso de reCAPTCHA está sujeto a la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">Política de Privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">Términos de Servicio</a> de Google.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">5. Contacto</h2>
              <p>Si tiene preguntas adicionales o necesita más información sobre nuestra Política de Privacidad, no dude en contactarnos a través de nuestro correo: <a href="mailto:tumy.ai.pe@gmail.com" className="underline hover:text-black dark:hover:text-white transition-colors">tumy.ai.pe@gmail.com</a>.</p>
            </section>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
