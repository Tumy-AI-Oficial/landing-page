# Tumy.ai Landing Page — Design System & Skill Guide

> Skill para mantener consistencia visual y técnica al desarrollar o modificar la landing page de Tumy.ai.

---

## Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| UI | React 19 + TypeScript 5 |
| Styling | Tailwind CSS 4 + PostCSS |
| Componentes | shadcn/ui + Magic UI |
| Animaciones | Framer Motion / Motion 12 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Scroll | Lenis (smooth scroll) |
| Temas | next-themes (dark/light) |
| Iconos | Lucide React (UI) + 3dicons.co clay WebP (secciones) |
| Fonts | Geist Sans (primary) + IBM Plex Mono (mono) |

---

## Paleta de Colores — Monocromática

Toda la página es **estrictamente blanco y negro**. No hay colores de acento.

### Light Mode
```
Background:  white / bg-white
Foreground:  black / text-black
Primary:     black / bg-black text-white
Borders:     neutral-200
Muted text:  neutral-400, neutral-500
Dim text:    neutral-300
```

### Dark Mode
```
Background:  black / bg-black
Foreground:  white / text-white
Primary:     white / bg-white text-black
Borders:     neutral-800
Muted text:  neutral-400, neutral-500
Dim text:    neutral-700
```

### Reglas de color
- **NUNCA** usar colores de acento (sky, blue, red, green, etc.)
- Usar `neutral-*` para grises, no `gray-*`
- Iconos de contenedor: `bg-black dark:bg-white` con `text-white dark:text-black`
- Imágenes 3D clay: `dark:invert` para invertir en dark mode
- Opacidades: `black/10`, `white/10`, `black/[0.03]`, `white/[0.03]`
- Borders: `border-neutral-200 dark:border-neutral-800`

---

## Tipografía

### Font Families
- **Sans (body/headings)**: Geist Sans → `font-sans`
- **Mono (labels/badges)**: IBM Plex Mono → `font-mono`

### Escala de Headings
```
H1: text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
H2: text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight
H3: text-lg font-semibold tracking-tight
```

### Patrón de Heading con peso ligero
Siempre dividir headings con un `<span className="font-light">`:
```tsx
<h2 className="text-3xl md:text-4xl font-bold tracking-tight">
  Palabra fuerte{" "}
  <span className="font-light">palabra ligera</span>
</h2>
```

### Subtítulos de Sección (Label)
```tsx
<p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3 font-mono">
  Etiqueta
</p>
```

### Texto descriptivo
```
text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed
text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed
```

---

## Componentes Magic UI Usados

| Componente | Uso | Notas |
|-----------|-----|-------|
| `BlurFade` | Fade-in con blur en scroll | En TODAS las secciones. Props: `delay`, `inView`, `direction` |
| `MagicCard` | Cards con gradiente que sigue cursor | Servicios, Productos, Soluciones, Recursos |
| `ShimmerButton` | CTAs principales | Siempre negro: `background="rgba(0,0,0,1)"`, `shimmerColor="rgba(255,255,255,0.4)"` |
| `AnimatedShinyText` | Badge del hero | "Potenciado por IA" |
| `WordRotate` | Rotación de palabras en hero | Palabras clave del negocio |
| `NumberTicker` | Contadores animados | Stats y About |
| `TextReveal` | Texto que se revela con scroll | Antes de Advantages, offset `["start start", "end 0.75"]` |
| `HyperText` | Scramble de texto | CTA final "Siguiente nivel" |
| `Ripple` | Ondas en background | CTA final |
| `RetroGrid` | Grid 3D WebGL | Background del hero |
| `ScrollVelocityRow` | Marquee reactivo al scroll | Tecnologías (dual row, direcciones opuestas) |
| `Marquee` | Marquee simple | (disponible pero reemplazado por ScrollVelocity) |

### Configuración estándar de MagicCard
```tsx
<MagicCard
  className="h-full rounded-xl cursor-pointer"
  gradientFrom="#ffffff"
  gradientTo="#a0a0a0"
  gradientColor="rgba(150,150,150,0.06)"
  gradientOpacity={0.6}
>
```

### Configuración estándar de ShimmerButton
```tsx
<ShimmerButton
  shimmerColor="rgba(255,255,255,0.4)"
  shimmerSize="0.05em"
  background="rgba(0,0,0,1)"
  className="px-10 py-3 text-base font-medium dark:border-white/20"
>
```

**Centrado de botones**: Siempre envolver en `<div className="flex justify-center">`.

---

## Iconos 3D (3dicons.co)

Usamos iconos **clay style** de 3dicons.co (CC0, gratis, sin atribución).

### Ubicación
```
/public/icons3d/*.webp
```

### Iconos disponibles
```
globe.webp    → Landing Pages / Sitios web
cart.webp     → Tiendas Online / E-commerce
gear.webp     → Automatización / Herramientas
box.webp      → Inventario / Gestión
chat.webp     → Bots / Mensajería
star.webp     → Software a Medida / Premium
brain.webp    → IA / Inteligencia Artificial (rocket)
code.webp     → Desarrollo Web (computer)
mobile.webp   → Desarrollo Móvil
palette.webp  → Diseño (camera)
shield.webp   → Seguridad / QA (target)
server.webp   → Software Empresarial (cube)
bot.webp      → Chatbots (chat-text)
analytics.webp → Analítica (chart)
layers.webp   → ERP / Capas (folder)
zap.webp      → Automatización (flash)
file.webp     → Guías / Documentos (notebook)
video.webp    → Video (camera)
book.webp     → Artículos (bookmark)
download.webp → Descargas (folder-new)
target.webp   → Precisión
lightbulb.webp → Innovación (flash)
users.webp    → Colaboración (boy)
fingerprint.webp → Diseño Único (locker)
settings.webp → Flexibilidad (tools)
trending.webp → Inversión (chart)
headset.webp  → Soporte (megaphone)
trophy.webp   → Logros
medal.webp    → Premios
rocket.webp   → Lanzamiento
```

### Uso en componentes
```tsx
import Image from "next/image";

<div className="w-14 h-14">
  <Image
    src="/icons3d/globe.webp"
    alt="Landing Pages"
    width={56}
    height={56}
    className="w-full h-full object-contain dark:invert"
  />
</div>
```

### Descargar nuevos iconos
```
URL Pattern: https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/{slug}/dynamic/400/clay.webp

Slugs conocidos: 1858b9-map-pin, 49b6f4-target, 744cc0-rocket, 5f20be-computer,
f0f795-chat-text, 4a4275-chart, ff5be0-tools, 4f52f8-cube, 17125d-star,
637858-flash, 1fded0-mobile, 5656e5-camera, 313578-megaphone, f71a3e-bag,
176980-folder, 628100-notebook, 3d77e2-bookmark-fav, 34bc6f-folder-new,
a14880-boy, 49654f-trophy, 39121b-medal, e67951-locker, 634add-money,
634b4b-crown, 8bbd16-location, 8ef1fa-clock, 7d956f-wallet, b4a0af-zoom
```

---

## Layout Patterns

### Contenedor estándar
```tsx
<section className="w-full py-24 px-6 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto">
    {/* contenido */}
  </div>
</section>
```

### Grid con separadores de 1px
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
  <div className="bg-white dark:bg-black p-8">
    {/* celda */}
  </div>
</div>
```

### Grids responsive
```
Servicios/Productos: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
Stats:               grid-cols-2 lg:grid-cols-4 gap-px
Advantages:          grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px
Team:                grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Footer:              grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12
```

### Sección CTA estándar
```tsx
<section className="py-20 px-6 md:px-16 lg:px-24 border-t border-neutral-100 dark:border-neutral-900">
  <BlurFade delay={0.1} inView>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Título</h2>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8">Descripción</p>
      <div className="flex justify-center">
        <Link href="/contact">
          <ShimmerButton ...>Texto</ShimmerButton>
        </Link>
      </div>
    </div>
  </BlurFade>
</section>
```

---

## Estructura de Páginas

### Home (`/`)
```
Introduction  → Hero + 3D Sphere + RetroGrid
Services      → 6 MagicCards con iconos 3D
Stats         → 4 NumberTickers en grid
Advantages    → TextReveal + 5 columnas con iconos 3D
Team          → 3 cards con tilt 3D + grayscale photos
Technologies  → ScrollVelocity dual row
CTA           → Ripple + HyperText + ShimmerButton
```

### Otras páginas
Todas siguen el patrón:
```
Hero Section    → Label mono + H1 bold/light + descripción
Content Grid    → MagicCards con iconos 3D
CTA Section     → border-t + título + ShimmerButton centrado
```

---

## Navbar

- Items: `Inicio`, `Productos`, `Soluciones`, `Nosotros`
- **NO incluir** "Recursos" (sección no activa)
- Logo Tumy.ai con `dark:invert`
- Theme toggle + botón Contacto
- Mobile: hamburger → overlay con items staggered
- Scroll detection: `bg-white/70 dark:bg-black/70 backdrop-blur-xl` al scrollear

---

## Efecto 3D Hero (ReflectiveSphere)

Componente Three.js monocromático con:
- 3 capas de **icosaedros wireframe** rotando a distintos ejes/velocidades
- **800 puntos Fibonacci** en capa interior + 300 exterior
- **40 partículas viajeras** orbitando
- **Core sólido pulsante** con glow layers
- **3 anillos torus** orbitales
- Todo `meshBasicMaterial` — sin luces externas, sin environment maps
- Color: `darkMode ? "#ffffff" : "#000000"`
- Canvas: `frameloop="always"`, `resize={{ scroll: false }}`

---

## Animaciones — Reglas

1. **BlurFade en todo**: Cada sección usa `<BlurFade delay={n} inView>` con delays staggered (0.08-0.12s entre items)
2. **Hover states**: `transition-all duration-300` o `transition-colors duration-300`
3. **Hover scale**: `group-hover:scale-110 transition-transform duration-300`
4. **Team photos**: `grayscale group-hover:grayscale-0 transition-all duration-500`
5. **Scroll indicator**: `animate-bounce` en hero
6. **ScrollToTop**: Aparece a >400px scroll, `bg-black dark:bg-white rounded-full`

---

## Pre-Delivery Checklist (UI/UX Pro Max)

- [ ] No emojis como iconos (usar Lucide SVG o 3dicons WebP)
- [ ] `cursor-pointer` en todos los elementos clickeables
- [ ] Hover states con transiciones suaves (150-300ms)
- [ ] Contraste mínimo 4.5:1 en light mode
- [ ] Focus states visibles para navegación con teclado
- [ ] `prefers-reduced-motion` respetado
- [ ] Responsive en: 375px, 768px, 1024px, 1440px
- [ ] Botones centrados con `flex justify-center`
- [ ] Colores estrictamente monocromáticos (neutral-*)
- [ ] `dark:invert` en iconos 3D clay
