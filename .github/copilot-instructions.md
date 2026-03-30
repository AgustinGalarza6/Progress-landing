# Copilot Instructions — Progress Landing Page

## Descripción del Proyecto
Landing page para **Progress**, empresa de ingeniería de software y soluciones digitales de alta complejidad. Dark theme (fondo negro, acento azul acero `#6B9FF0`). Arquitectura sin CMS — datos estáticos. Incluye Swiper para carruseles.

## Stack Tecnológico
- **Framework**: Next.js 14+ App Router, TypeScript estricto
- **Estilos**: Tailwind CSS 3 con tokens minimal en `tailwind.config.js`
- **Animaciones**: Framer Motion 11 (`whileInView`, `motion.*`)
- **Carruseles**: Swiper.js
- **Iconografía**: Lucide React
- **Utilities**: `cn()` de `@/lib/utils` (clsx + tailwind-merge)
- **Sin CMS**: datos hardcodeados en componentes o archivos de data

## Paleta de Colores
- Fondo base: `bg-black` / `#000000`
- Acento primario: `#6B9FF0` (azul acero) — en texto highlight y glow
- Texto: `text-white/90`, `text-gray-400`
- Botón CTA: `bg-white text-black`

## Estructura del Proyecto
```
app/
├── layout.tsx
├── page.tsx              # Importa y compone todas las secciones
├── globals.css
└── sections/             # Secciones de la landing
    ├── Hero.tsx
    ├── ClientsSlider.tsx
    ├── Services.tsx
    ├── Process.tsx
    ├── Projects.tsx
    ├── Technologies.tsx
    ├── Testimonials.tsx
    ├── IsForYou.tsx
    ├── WhyChooseUs.tsx
    ├── FAQ.tsx
    ├── CTA.tsx
    └── Contact.tsx
components/               # Componentes reutilizables
├── Navbar.tsx
├── Footer.tsx
└── Button.tsx
hooks/
└── useScrollAnimation.ts # Hook de IntersectionObserver
lib/
├── animations.ts         # Variantes Framer Motion
└── utils.ts              # cn() utility
public/
```

## Reglas de Código
1. **Dark theme**: fondo `bg-black`, acentos con `#6B9FF0` via className o style para glow/gradients
2. **"use client"** solo para componentes con interactividad (Swiper, formularios, `useState`)
3. **cn()** para clases condicionales: `import { cn } from "@/lib/utils"`
4. **Imágenes**: `next/image` con `alt` descriptivo
5. **Íconos**: `lucide-react` con `className="w-5 h-5"` o `size` explícito
6. **Contenedor base**: `max-w-7xl mx-auto px-4`
7. **Secciones**: `py-20 md:py-28`, con `id=` para smooth scroll
8. **Glow backgrounds**: `radial-gradient` con `blur-[120px] opacity-30`, sin animar por performance
9. **Tipografía hero**: `font-light tracking-[-0.04em]` para estilo premium
10. **Mobile-first**: responsive `base → md → lg`

## Patrones de Animación Estándar
```tsx
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

// Entrada de elemento
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>

// Hero con entrada directa (no whileInView)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## Swiper (para ClientsSlider y similares)
```tsx
"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
```

## Glow Background (patrón Progress)
```tsx
<div className="absolute inset-0 pointer-events-none">
  <div 
    className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] opacity-30 blur-[120px]"
    style={{ background: 'radial-gradient(circle, #6B9FF0 0%, #2d4a7a 50%, transparent 70%)', borderRadius: '50% 50% 0 0' }}
  />
</div>
```

## NO modificar sin consultar
- Logos y assets en `/public/`
- Textos de los clientes/proyectos del portfolio
- Información de contacto
