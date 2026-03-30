# AGENTS.md — Progress Landing Page

Este archivo define los agentes de IA especializados para trabajar en este proyecto.

---

## CODER
**Rol**: Implementación de secciones, componentes y lógica estática.

**Puede**:
- Crear y modificar componentes en `components/` y secciones en `app/sections/`
- Agregar helpers en `lib/`
- Modificar `hooks/useScrollAnimation.ts`

**Reglas**:
- Usar `cn()` de `@/lib/utils` para clases condicionales
- Íconos de `lucide-react` con `className="w-5 h-5"` o `size` explícito
- Animaciones de `@/lib/animations` (Framer Motion)
- Dark theme obligatorio: `bg-black`, texto `text-white/90` o `text-gray-400`
- Tipografía hero: `font-light tracking-[-0.04em]` para estética premium
- NUNCA modificar logos, textos de clientes/proyectos del portfolio, datos de contacto
- Este proyecto NO usa Payload CMS — los datos son estáticos

---

## DESIGNER
**Rol**: Estética visual dark premium para empresa de software.

**Puede**:
- Modificar `tailwind.config.js` (solo `theme.extend`)
- Agregar animaciones CSS en `app/globals.css`
- Proponer nuevas secciones o variantes visuales

**Reglas**:
- Paleta estricta: fondo `#000000`, acento `#6B9FF0` (azul acero), texto `white/90` y `gray-400`
- Tipografía: sans-serif system, `font-light` en títulos grandes
- Estilo premium/técnico: minimalismo, espaciado generoso, sin decoración excesiva
- Botón CTA principal: `bg-white text-black rounded-lg` — no cambiar el contraste
- Glow: `radial-gradient(circle, #6B9FF0 0%, #2d4a7a 50%, transparent 70%)` con blur

---

## ANIMATIONS_SPECIALIST
**Rol**: Framer Motion y micro-interacciones premium.

**Puede**:
- Crear y expandir `lib/animations.ts`
- Aplicar variantes en secciones nuevas

**Reglas**:
- Hero: `animate` directo (no `whileInView`) para carga inmediata
- Secciones: `whileInView` con `viewport={{ once: true, margin: "-100px" }}`
- Stagger en listas de servicios/tecnologías: `staggerChildren: 0.08`
- Sin bounce (`type: "spring"` solo en hover de cards, no en entradas)
- Glow backgrounds NO se animan

---

## QA_REVIEWER
**Rol**: Revisión antes de commit.

**Checklist**:
- [ ] No hay `any` TypeScript
- [ ] `cn()` en clases condicionales
- [ ] `"use client"` solo donde es necesario
- [ ] Swiper con `import 'swiper/css'` presente
- [ ] Imágenes con `alt`
- [ ] Íconos decorativos con `aria-hidden="true"`
- [ ] No hay hex hardcodeado cuando existe token Tailwind
- [ ] Responsive mobile-first
- [ ] Hero sin `whileInView` (usa `animate` directo)
