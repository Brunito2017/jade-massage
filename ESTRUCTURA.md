# Estructura del sitio — Jade Belleza y Spa

Documento base de arquitectura, contenido y SEO. Objetivo del sitio: **posicionamiento orgánico en Google** y dar a conocer el negocio.

> **Nota sobre placeholders:** todo texto marcado `[PLACEHOLDER: ...]` debe ser reemplazado con información real antes de publicar. Son datos de Roxana que aún no tenemos (credenciales, años de experiencia, historia). No publicar el sitio con estos campos sin completar — el contenido inventado en temas de salud es un riesgo real de credibilidad y de posicionamiento.

---

## 1. Contexto

| | |
|---|---|
| **Negocio** | Jade Belleza y Spa |
| **Rubro** | Masoterapia clínica + estética integral |
| **Ubicación** | Walker Martínez, La Florida, Santiago, Chile |
| **Dueña** | Roxana — masoterapeuta clínica y esteticista integral |
| **Contacto** | +569 74765166 (WhatsApp) |
| **Instagram** | https://www.instagram.com/estetica._jade/ |
| **Servicio estrella** | Masaje descontracturante |

**Decisiones tomadas:**
- Los precios **no se publican**. El CTA siempre es consultar por WhatsApp.
- Estética visual: minimalista de lujo, cálida y sofisticada. Tonos tierra oscuros, marrón café, castaño profundo, acentos crema/beige. Serif fina en títulos, sans-serif limpia en textos.
- Toque "moderno tipo coreano": más aire, transiciones sutiles, menos decoración — no más.
- Stack: Astro 6 + Tailwind 4, SSG estático.

**Supuesto de avance:** el negocio operará con dirección pública en La Florida una vez resuelta la verificación con el arrendatario. El sitio se construye asumiendo que eso ocurre.

---

## 2. Arquitectura de URLs

```
/                                        Home
/servicios/                              Índice de servicios
/servicios/masaje-descontracturante/     ★ Página prioritaria
/servicios/masaje-relajante/
/servicios/masaje-piedras-calientes/
/servicios/drenaje-linfatico/
/servicios/masaje-champi/
/servicios/limpieza-facial-profunda/
/servicios/tratamiento-reductivo/
/sobre-roxana/                           E-E-A-T — credibilidad
/contacto/
/blog/                                   Fase 2
/aviso-legal/                            Privacidad + términos
```

**Por qué páginas individuales y no una sola con anclas:** Google rankea páginas, no secciones. Los competidores chilenos que posicionan (Clinichouse, SaludMasaje) usan páginas por servicio. Una home con siete anclas no puede competir por siete términos a la vez.

**Por qué subcarpeta `/servicios/`:** agrupa temáticamente y permite que `/servicios/` funcione como índice navegable.

**Prevención de canibalización:** la home apunta al término paraguas (*"masoterapia y estética en La Florida"*); cada página hija apunta a su término comercial específico. Nunca compiten por lo mismo.

---

## 3. Home `/`

**Keyword objetivo:** `masoterapia y estética La Florida` · **Intención:** navegacional/comercial

| # | Sección | Contenido | Propósito SEO |
|---|---|---|---|
| 1 | **Hero** | Imagen cálida a pantalla completa. H1: *"Masoterapia y estética integral en La Florida"*. Subtítulo de una línea. CTA WhatsApp. | H1 con término paraguas |
| 2 | **Intro** | 2-3 líneas sobre Jade, Roxana y el enfoque del espacio. | Contexto de marca |
| 3 | **Servicios** | Grilla de los 7 servicios, cada uno linkea a su página. Sin precios. | Enlazado interno (distribuye autoridad) |
| 4 | **Descontracturante destacado** | Bloque propio, más grande. Qué resuelve, para quién es. Link a la página estrella. | Refuerza la prioridad del estrella |
| 5 | **Por qué Jade** | 3-4 beneficios: atención personalizada, terapia clínica, espacio de desconexión. | Diferenciación |
| 6 | **Cómo es una sesión** | 3-4 pasos del proceso, desde la consulta inicial al cierre. | Reduce fricción, contenido indexable |
| 7 | **Sobre Roxana** | Foto real + resumen de credenciales. Link a `/sobre-roxana/`. | E-E-A-T |
| 8 | **Testimonios** | 2-3 reseñas reales de clientas. | Prueba social |
| 9 | **FAQ** | 4-6 preguntas frecuentes. | Cola larga (ver nota sobre FAQPage) |
| 10 | **CTA final** | Contacto por WhatsApp, teléfono visible. | Conversión |
| 11 | **Footer** | Servicios, contacto, Instagram, aviso legal. | Navegación + señales NAP |

**Extensión objetivo:** 700–900 palabras de contenido real (sin contar navegación).

---

## 4. Páginas de servicio

### Plantilla común
Todas las páginas de servicio siguen la misma estructura. Esto es deliberado: consistencia de UX y de marcado.

| Bloque | Contenido |
|---|---|
| **Hero** | H1 = nombre del servicio + contexto geográfico. Ej: *"Masaje descontracturante en La Florida"*. Imagen. CTA WhatsApp. Sin precio. |
| **Qué es** | 2-3 párrafos explicando la técnica. |
| **Para qué sirve / para quién es** | Lista de situaciones concretas. Ej: dolor cervical por oficina, contracturas lumbares, tensión por estrés. |
| **Cómo es la sesión** | Qué esperar, duración, qué llevar, cómo vestirse. |
| **Beneficios** | Lista corta, concreta. Sin promesas médicas absolutas. |
| **Contraindicaciones** | Cuándo NO hacerse el masaje. Muy importante para YMYL y para confianza. |
| **FAQ** | 3-5 preguntas específicas del servicio. |
| **CTA** | WhatsApp + link a otros servicios relacionados. |
| **Texto de cierre** | 1.500–2.000 palabras totales. Enlaza a `/sobre-roxana/` (autoridad del terapeuta). |

### Prioridad de las 7 páginas

| Prioridad | Servicio | Keyword objetivo | Justificación |
|---|---|---|---|
| **1** | Masaje descontracturante | `masaje descontracturante La Florida` | Servicio más solicitado + mayor volumen + mayor intención comercial |
| **2** | Drenaje linfático | `drenaje linfático La Florida` | Alto volumen de búsqueda informacional ("para qué sirve", "contraindicaciones") |
| **3** | Limpieza facial profunda | `limpieza facial profunda La Florida` | Vertical estética, competencia local baja |
| **4** | Masaje relajante | `masaje relajante La Florida` | Término genérico, mucha competencia — pero necesario |
| **5** | Piedras calientes | `masaje piedras calientes` | Nicho, volumen medio |
| **6** | Tratamiento reductivo | `tratamiento reductivo La Florida` | Término muy competido; requiere aparatología como diferenciador |
| **7** | Masaje Champi | `masaje champi cabeza` | Nicho pequeño, volumen bajo |

**Contenido de la página estrella (descontracturante)** — es la que más esfuerzo recibe:
1. Qué es un masaje descontracturante (mecanismo sobre el tejido muscular)
2. Para qué sirve: situaciones concretas y dolorosas
3. Cómo trabaja sobre contracturas y nudos
4. Qué esperar en una sesión
5. Diferencias con otros masajes (tabla comparativa vs. relajante, piedras, linfático)
6. Contraindicaciones
7. Rutina de autocuidado posterior
8. FAQ

---

## 5. `/sobre-roxana/` — la página de credibilidad

En temas de salud y bienestar Google aplica estándares de E-E-A-T (experiencia, pericia, autoridad, confianza) con **peso reforzado**. No existe un "puntaje de E-E-A-T" — lo que existen son señales concretas que esta página debe entregar.

| Elemento | Estado | Qué va |
|---|---|---|
| Nombre completo real | ✅ Tenemos | Roxana |
| Foto propia (no stock) | ❌ Pendiente | Foto real trabajando, no posada |
| Certificación como masoterapeuta clínica | ❌ `[PLACEHOLDER]` | Nombre de la escuela o institución, tipo de certificación, año |
| Certificación como esteticista integral | ❌ `[PLACEHOLDER]` | Ídem |
| Formación en limpieza facial | ❌ `[PLACEHOLDER]` | Ídem |
| Años de experiencia | ❌ `[PLACEHOLDER]` | Número concreto + desde qué año |
| Especialidad o enfoque | ❌ `[PLACEHOLDER]` | Ej: "enfoque clínico en dolor cervical y lumbar" |
| Historia de por qué abrió Jade | ❌ `[PLACEHOLDER]` | 1-2 párrafos, tono personal |
| Filosofía de trabajo | ❌ `[PLACEHOLDER]` | Cómo aborda a cada clienta |

**Qué NO va:** adjetivos vacíos ("apasionada", "profesional dedicada"), afirmaciones médicas absolutas, certificaciones sin institución que las respalde.

**Por qué importa:** esta página es la que convence tanto a Google como a la clienta que está evaluando si confiar su cuerpo a esta persona. Un perfil sin respaldo verificable es, en términos de Google, una forma de engaño.

---

## 6. Marcado estructurado (JSON-LD)

| Schema | Dónde | Efecto |
|---|---|---|
| `HealthAndBeautyBusiness` | Home + contacto | Rich result local. Requiere `address`. |
| `Service` | Cada página de servicio | Semántico. **No genera rich result.** Útil para comprensión e IA. |
| `Person` / `ProfilePage` | `/sobre-roxana/` | Vincula la terapeuta al negocio. |
| `BreadcrumbList` | Todas menos home | Migas de pan en resultados. |
| `Article` | Blog (fase 2) | — |

**Propiedades obligatorias de `HealthAndBeautyBusiness`:** `name`, `address`, `telephone`, `areaServed` (La Florida + comunas cubiertas), `openingHoursSpecification`, `image`, `priceRange`, `url`.

> **Advertencia:** `address` es obligatorio para el rich result. Mientras el tema del arrendatario no se resuelva, el marcado se puede incluir con la comuna como área, pero el rich result no se activará del todo. **No publicar dirección inventada.**

**FAQPage: no esperar rich results.** Google lo deprecó en mayo de 2026. El marcado se puede incluir igual (no hace daño y ayuda a la comprensión), pero el FAQ existe para el usuario y para los modelos de IA, no para estrellitas en Google.

---

## 7. Notas técnicas

- **Astro 6** (no 5) + **Tailwind 4**. Node 22+.
- Tailwind 4 usa **CSS-first** (`@theme` en el CSS), no `tailwind.config.js`. La integración es `@tailwindcss/vite`; `@astrojs/tailwind` está obsoleto.
- Servicios como **Content Collections** con schema Zod en `src/content.config.ts` (no `src/content/`).
- **SSG puro** (`output: 'static'`). Sin SSR — no hay datos dinámicos.
- **Fonts API nativa de Astro** para autoalojar las tipografías. Sin Google Fonts por CDN.
- Imágenes en `src/assets/` (no `public/`) para que Astro las optimice. Hero con `fetchpriority="high"`; el resto lazy.
- **Core Web Vitals:** LCP < 2.5s, INP < 200ms, CLS < 0.1. Es alcanzable y hay que cumplirlo, pero no es el factor decisivo que repiten los blogs de SEO.
- **Sin hreflang** (sitio monolingüe). `<html lang="es-CL">`.
- Deploy sugerido: **Cloudflare Pages** (buena latencia en Chile). Dominio `.cl` → NIC Chile.

---

## 8. Pendientes bloqueantes

| # | Pendiente | Responsable | Bloquea |
|---|---|---|---|
| 1 | Resolver verificación con el arrendatario | Roxana | Dirección pública, GBP, rich result local |
| 2 | Credenciales reales de Roxana (escuela, año, certificaciones) | Roxana | `/sobre-roxana/` y toda la credibilidad del sitio |
| 3 | Fotos propias del espacio y del trabajo | Roxana | Todas las páginas (placeholder de stock mientras tanto) |
| 4 | Confirmar grafía oficial: "Jade Belleza y Spa" | Bruno/Roxana | Título, schema, dominio |
| 5 | Revisar si las clientas actuales pueden dejar reseñas | Roxana | Prueba social en home |
| 6 | Definir dominio y registrarlo | Bruno | Deploy |

---

## 9. Fases

**Fase 1 — Núcleo (10 páginas)**
Home, índice de servicios, 7 páginas de servicio, sobre-roxana, contacto, aviso legal.

**Fase 2 — Contenido**
Blog con guías largas. Arrancar por:
1. *"Masaje descontracturante: qué es, para qué sirve y cuándo lo necesitas"*
2. *"Drenaje linfático: contraindicaciones y qué esperar"*
3. *"Dolor cervical por trabajo de oficina: cómo aliviarlo"*

Estas guías enlazan a la página de servicio correspondiente. Mix recomendado: 70% comercial (páginas de servicio) / 30% informacional (blog).

**Fase 3 — SEO local**
- Google Business Profile como **Service Area Business** (permite operar sin exponer la calle — revisar si aplica al caso del arrendatario).
- Citaciones en directorios chilenos: 2x3.cl, Cronoshare, StarOfService, Doctoralia, Agendamelo. NAP consistente.
- Sistema de reseñas.
