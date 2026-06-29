import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tumy.ai | Soluciones de Inteligencia Artificial para Empresas',
    short_name: 'Tumy.ai',
    description: 'Desarrollo de herramientas, automatización y soluciones de IA (Inteligencia Artificial) adaptadas a tus necesidades.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/logos/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logos/logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
