import { BlurFade } from "@/components/ui/blur-fade";

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32 pb-24">
      <div className="w-full max-w-3xl px-6 mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">
              [ LEGAL ]
            </p>
            <h1 className="text-3xl font-bold lg:text-5xl tracking-tight mb-6">
              Términos de Servicio
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">1. Aceptación de los términos</h2>
              <p>Al acceder y utilizar el sitio web de Tumy.ai, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.</p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">2. Uso de la licencia</h2>
              <p>Se concede permiso temporal para interactuar con los materiales en el sitio web de Tumy.ai solo para uso personal o para propósitos de evaluación corporativa. Bajo estos términos, usted no puede:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modificar o copiar los materiales de diseño e identidad visual de manera íntegra.</li>
                <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web.</li>
                <li>Eliminar derechos de autor u otras notaciones de propiedad.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">3. Exención de responsabilidad</h2>
              <p>Los materiales en el sitio web de Tumy.ai se proporcionan "tal cual". Tumy.ai no otorga ninguna garantía, expresa o implícita, y por la presente niega todas las demás garantías, incluidas, entre otras, las condiciones implícitas de comerciabilidad y adecuación para un propósito particular.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">4. Limitaciones</h2>
              <p>En ningún caso Tumy.ai será responsable de daños que surjan del uso o la imposibilidad de utilizar los materiales o servicios presentados en el sitio, incluso si Tumy.ai o un representante autorizado ha sido notificado de la posibilidad de tales daños.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">5. Modificaciones de los términos</h2>
              <p>Tumy.ai puede revisar estos términos de servicio en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos de Servicio.</p>
            </section>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
