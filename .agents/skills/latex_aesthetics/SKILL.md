---
name: latex-aesthetics
description: Directrices estéticas y de diseño editorial premium para documentos PDF generados en LaTeX.
---

# Guía de Diseño Editorial y Estética en LaTeX (PDF)

Esta guía resume las directrices estéticas para diseñar documentos PDF de alta gama en **LaTeX** (como reportes ejecutivos, propuestas comerciales, CVs de lujo o especificaciones técnicas). Su propósito es servir de prompt o referencia conceptual para que otros agentes de IA o diseñadores configuren plantillas de LaTeX minimalistas, sofisticadas y sumamente legibles.

---

## 1. El Concepto Core: "Academic Precision meets Editorial Luxury"
La estética busca alejarse del estilo académico convencional y rígido de LaTeX (las plantillas estándar que lucen fechadas) para transformarlo en un documento editorial de lujo, similar a una publicación de diseño independiente o un reporte de consultoría internacional (estilo McKinsey, Monocle o reportes anuales de marcas de moda).

*   **Identidad**: Minimalista, asimétrica, limpia y espaciosa.
*   **Sensación**: De gran autoridad intelectual, elegante y pulida. El uso del espacio en blanco es un elemento de diseño activo, no un vacío.

---

## 2. Tipografía: La Fuerza del Carácter
La tipografía en LaTeX define el tono de lectura. Se busca una combinación equilibrada de tradición y modernidad.

*   **Cuerpo de Texto**: Tipografías con serifa (serif) clásicas y de alta legibilidad (ej. *Charter*, *Garamond*, *Bembo* o *Computer Modern Roman* bien espaciada). Aporta elegancia clásica, fluidez de lectura y peso institucional.
*   **Títulos y Secciones**: Tipografías de palo seco (sans-serif) geométricas y limpias (ej. *Inter*, *Helvetica Neue* o *Fira Sans*) en pesos semibold o light para crear un contraste moderno inmediato con el texto principal.
*   **Códigos y Datos**: Tipografías monoespaciadas de estilo "máquina de escribir" en tamaños reducidos para bloques de código o notas marginales técnicas.

---

## 3. Disposición del Espacio (Maquetación y Rejilla)
El lujo editorial en papel digital se transmite a través de márgenes generosos y asimetría controlada.

*   **Márgenes**: Amplios y aireados. El margen exterior y el margen inferior deben ser mayores para permitir que el pulgar del lector sostenga el documento (o para notas marginales limpias).
*   **Asimetría**: Uso de márgenes asimétricos o una rejilla de doble columna asimétrica (una columna ancha principal para el texto y una columna estrecha lateral para citas, imágenes de apoyo o notas breves).
*   **Cabeceras y Pies de Página (Folios)**: Limpios e imperceptibles. Una línea horizontal ultrafina (hairline) que separa el texto de la cabecera. Números de página discretos centrados en la base o alineados en los márgenes exteriores.

---

## 4. Elementos Gráficos y Tablas: Limpieza Absoluta
El diseño LaTeX de alta gama prohíbe el uso de líneas gruesas, bordes dobles o sombreados de celdas saturados en las tablas.

*   **Tablas (Estilo Booktabs)**: 
    *   **Cero líneas verticales**: El uso de líneas verticales está prohibido.
    *   **Líneas horizontales ultrafinas**: Solo se usan líneas horizontales extremadamente delgadas para delimitar la cabecera de la tabla y la base del contenido (`\toprule`, `\midrule`, `\bottomrule`).
    *   **Espaciado generoso**: Fórmulas y celdas con suficiente espacio vertical para que respiren.
*   **Líneas de División**: Líneas horizontales finas y discretas para separar secciones importantes o artículos dentro del documento.
*   **Figuras**: Monocromáticas o en escala de grises de alto contraste. Los pies de figura deben estar en tipografía monoespaciada o sans-serif de tamaño reducido, colocados elegantemente en la base o en la columna lateral.

---

## 5. Paleta de Colores en Documento
Aunque el PDF se lee en pantalla, los colores deben evocar la calidez del papel impreso.

*   **El Fondo**: Si se lee digitalmente, el fondo del PDF puede ser de un tono hueso o crema imperceptible para evitar el brillo cegador del blanco puro.
*   **La Tinta**: El texto principal no debe ser negro puro (`#000000`), sino un carbón muy oscuro (`#1c1c1c` o similar) que se integra de manera más suave con el color del papel.
*   **Color de Acento (Enlaces y Resaltados)**: Un único tono para enlaces y referencias internas. Debe ser un color corporativo oscuro o desaturado (ej. azul marino profundo, verde bosque apagado o rojo teja), nunca colores brillantes o fluorescentes.

---

## 6. Portada: La Primera Impresión Minimalista
La portada debe ser una pieza de póster de diseño, limpia y desprovista de bloques densos de información.

*   **Diseño**: Gran cantidad de espacio en blanco (60-70% de la página libre).
*   **Tipografía**: El título del documento en un tamaño imponente pero ligero en la mitad superior de la página, con un tracking fino.
*   **Detalles**: La fecha, el autor y la afiliación colocados en la esquina inferior derecha o izquierda en un tamaño muy pequeño y discreto, alineados perfectamente con la rejilla invisible del documento.
