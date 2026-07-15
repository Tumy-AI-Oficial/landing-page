---
name: tumy-aesthetics
description: Guía de estilo y directrices estéticas del diseño premium, monocromático y traslúcido (Liquid Glass) de Tumy.ai.
---

# Sistema de Diseño y Estética Tumy.ai

Esta guía resume la identidad visual, la atmósfera y las pautas estéticas de la landing page de **Tumy.ai**. Su propósito es servir de prompt o referencia conceptual para que otros agentes de IA, diseñadores o desarrolladores repliquen fielmente este estilo de alta gama sin recurrir a reglas rígidas de código (como píxeles o clases específicas).

---

## 1. El Concepto Core: "Monochromatic Luxury & Software Consulting"
La estética general se inspira en el diseño de hardware minimalista y las marcas de software premium de vanguardia (estilo Apple, Linear o Vercel). Combina la sobriedad técnica con el lujo visual.

*   **Identidad Visual**: Limpia, monocromática, espaciosa y sofisticada.
*   **Sensación**: Premium, precisa, de alta ingeniería. No busca ser "tecnológica" en el sentido sci-fi común (no hay neones invasivos, partículas flotando ni rejillas 3D saturadas), sino elegante e institucional.

---

## 2. Paleta de Colores: El Arte del Contraste Monocromo
La paleta rechaza el uso de colores primarios puros o planos (rojos, azules o verdes estándar). Se basa en la sutileza de los tonos neutros y las transparencias.

*   **Modo Oscuro (Cinemático)**: Fondos negros puros y grises carbón profundos. Los textos utilizan blancos suaves y grises satinados que reducen la fatiga visual.
*   **Modo Claro (Oficina Premium)**: Fondos blanco-tiza y gris-perla muy tenues. El texto es de un negro carbón profundo.
*   **Acentos**: La iluminación y los destellos son extremadamente sutiles (como el reflejo de la luz sobre un metal pulido), utilizando gradientes imperceptibles de tonos plata, cianes muy lavados o violetas traslúcidos en opacidades mínimas (del 2% al 5%).

---

## 3. La Firma Visual: "Liquid Glass" (Cristal Líquido)
El elemento distintivo de la marca es la simulación de superficies físicas traslúcidas que flotan sobre el contenido.

*   **Glassmorphism Físico**: Los contenedores y tarjetas se comportan como placas de vidrio esmerilado o cristal líquido pulido.
*   **Comportamiento**: Tienen un desenfoque de fondo profundo (backdrop blur) que deforma y suaviza los elementos y colores que pasan por detrás de ellos.
*   **Bordes de Luz**: Los bordes de las tarjetas simulan la refracción física de la luz en la arista de un vidrio (bordes ultrafinos con opacidades del 4% al 8% en oscuro, y del 20% al 40% en claro).

---

## 4. Tipografía y Estilo Editorial
El diseño editorial del texto se asemeja al de un libro de arte o un reporte técnico institucional de lujo.

*   **Jerarquía de Fuentes**: Se combinan fuentes de palo seco (sans-serif) geométricas y modernas con toques elegantes de fuentes monoespaciadas de estilo "terminal" para etiquetas de número (ej. `[01]`) o créditos de marca.
*   **Espaciado**: Títulos con tracking (espaciado entre letras) muy ajustado para dar sensación de bloque sólido y corporativo, y etiquetas pequeñas con tracking ultra-expandido para dar sensación de orden técnico.

---

## 5. Dinámica y Transiciones: El Efecto Cortina (Curtains Mixed)
Las animaciones y el movimiento en la página se diseñan bajo la premisa de "menos es más", evitando movimientos rápidos, saltos bruscos o animaciones 3D invasivas.

*   **Movimiento de Cortina (Wipe Reveal)**: El contenido y el fondo se revelan mediante máscaras de clip-path u overlays que se deslizan suavemente, como paneles o cortinas físicas de lujo que se abren con suavidad.
*   **Físicas de Scroll**: El desplazamiento se acompaña de un retardo imperceptible (spring damping) que simula peso físico y fricción natural.
*   **Inversión Inteligente en Modo Claro**: Los elementos tridimensionales complejos diseñados para brillar en fondo oscuro (como moléculas de luz) se invierten cromáticamente en el modo claro, transformándose en siluetas oscuras de alto contraste que evitan el aspecto lavado y los halos blancos en pantallas claras.

---

## 6. Fotografía e Iconografía
Las imágenes se integran como elementos de textura y no como relleno genérico.

*   **Fotografía**: Se prioriza la fotografía de oficina/workspace corporativo en escala de grises con opacidades reducidas. Tienen efectos interactivos de transición al pasar el cursor (el color se recupera suavemente al hacer hover).
*   **Iconografía 3D (Clay/Glass Style)**: Los iconos de interfaz son figuras tridimensionales de arcilla o cristal con sombras integradas. Nativamente no tienen fondo sólido (están recortados) para permitir que floten libremente dentro de esferas y tarjetas "liquid glass".
