"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FaTiktok, FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import { IconType } from "react-icons";
import axios from "axios";

interface SocialMediaCardProps {
  icon: IconType;
  username: string;
}

interface FormValues {
  nombre: string;
  correo: string;
  mensaje: string;
}

const SocialMedias: SocialMediaCardProps[] = [
  { icon: FaInstagram, username: "@TumyAI" },
  { icon: FaTiktok, username: "@TumyAI" },
  { icon: FaWhatsapp, username: "+51 999999999" },
  { icon: FaEnvelope, username: "tumy.ai.pe@gmail.com" },
  { icon: FaLinkedinIn, username: "Tumy AI" },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await axios.post("/api/email", data);
      toast.success(
        "Mensaje enviado con éxito. Nos pondremos en contacto contigo.",
        { duration: 3000 }
      );
      reset();
    } catch {
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.", {
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-6xl px-6 py-24 mx-auto">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center lg:text-left">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4 font-mono">
              Contacto
            </p>
            <h1 className="text-3xl font-bold lg:text-5xl tracking-tight mb-4">
              Contáctanos
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
              Estamos aquí para ayudarte. Escríbenos por cualquiera de estos
              medios.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form */}
          <BlurFade delay={0.2} inView direction="right">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-8 tracking-tight">
                Escríbenos un mensaje
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-5 w-full"
              >
                <div>
                  <input
                    {...register("nombre", {
                      required: "El nombre es requerido",
                    })}
                    type="text"
                    placeholder="Nombre"
                    className={`w-full p-4 rounded-xl border bg-transparent text-base outline-none transition-colors duration-200 ${
                      errors.nombre
                        ? "border-red-500"
                        : "border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("correo", {
                      required: "El correo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo electrónico inválido",
                      },
                    })}
                    type="email"
                    placeholder="Correo electrónico"
                    className={`w-full p-4 rounded-xl border bg-transparent text-base outline-none transition-colors duration-200 ${
                      errors.correo
                        ? "border-red-500"
                        : "border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600"
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.correo.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("mensaje", {
                      required: "El mensaje es requerido",
                      minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres",
                      },
                    })}
                    placeholder="¿Cómo podemos ayudarte?"
                    rows={5}
                    className={`w-full p-4 rounded-xl border bg-transparent text-base outline-none resize-none transition-colors duration-200 ${
                      errors.mensaje
                        ? "border-red-500"
                        : "border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600"
                    }`}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.4)"
                  shimmerSize="0.05em"
                  background="rgba(0,0,0,1)"
                  className="w-full py-4 text-base font-medium dark:border-white/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </ShimmerButton>
              </form>
            </div>
          </BlurFade>

          {/* Social Media */}
          <BlurFade delay={0.3} inView direction="left">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-8 tracking-tight">
                Redes sociales
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {SocialMedias.map((socialMedia, index) => (
                  <MagicCard
                    key={index}
                    className="rounded-xl cursor-pointer"
                    gradientFrom="#ffffff"
                    gradientTo="#a0a0a0"
                    gradientColor="rgba(150,150,150,0.06)"
                    gradientOpacity={0.6}
                  >
                    <div className="flex flex-col items-center space-y-3 p-6">
                      <socialMedia.icon className="text-3xl" />
                      <p className="text-xs font-medium text-center break-words overflow-hidden w-full text-neutral-500 dark:text-neutral-400">
                        {socialMedia.username}
                      </p>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Stats */}
        <BlurFade delay={0.2} inView>
          <div className="grid grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-16">
            <div className="bg-white dark:bg-black p-10 text-center">
              <div className="text-2xl font-bold mb-1 tracking-tight">+500</div>
              <p className="text-xs text-neutral-400 font-mono tracking-wide uppercase">
                Clientes satisfechos
              </p>
            </div>
            <div className="bg-white dark:bg-black p-10 text-center">
              <div className="text-2xl font-bold mb-1 tracking-tight">
                98%
              </div>
              <p className="text-xs text-neutral-400 font-mono tracking-wide uppercase">
                Respuesta en 24h
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Testimonial */}
        <BlurFade delay={0.3} inView>
          <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl mb-16">
            <p className="text-lg italic mb-4 text-neutral-600 dark:text-neutral-400">
              &quot;Tumy AI ha transformado la manera en que gestionamos
              nuestras consultas y nos ha permitido llegar al mercado más
              rápido.&quot;
            </p>
            <p className="font-medium text-sm">Empresa Cliente</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
