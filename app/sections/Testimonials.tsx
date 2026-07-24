"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const successCases = [
  {
    product: "PIL Access",
    acquired: "PIL Access",
    initials: "H",
    name: "Hernán",
    testimonial:
      "Antes llevábamos los ingresos y movimientos de forma bastante manual. Con PIL Access pudimos ordenar los accesos, consultar registros rápido y tener más control sobre lo que pasa todos los días.",
  },
  {
    product: "PIL Access",
    acquired: "PIL Access",
    initials: "F",
    name: "Federico",
    testimonial:
      "Lo que más nos sirvió de PIL Access fue poder centralizar la información. Dejamos de depender de planillas sueltas y ahora tenemos un seguimiento mucho más claro de visitantes, permisos y movimientos.",
  },
  {
    product: "PIL Sync",
    acquired: "PIL Sync",
    initials: "P",
    name: "Pablo",
    testimonial:
      "Necesitábamos que la tienda online y el sistema interno dejaran de trabajar por separado. Con PIL Sync pudimos conectar ventas, stock y pedidos sin cargar la misma información dos veces.",
  },
  {
    product: "PIL Sync",
    acquired: "PIL Sync",
    initials: "G",
    name: "Gonzalo",
    testimonial:
      "PIL Sync nos ayudó a ordenar la operación comercial. Ahora los pedidos entran más prolijos, el stock se actualiza mejor y el equipo pierde menos tiempo corrigiendo datos a mano.",
  },
  {
    product: "PIL Totem",
    acquired: "PIL Totem",
    initials: "M",
    name: "Mariana",
    testimonial:
      "Con PIL Totem logramos que muchas consultas se resuelvan directamente desde el punto de atención. Eso nos ayudó a ordenar turnos, reducir esperas y mejorar la experiencia de las personas.",
  },
  {
    product: "PIL Totem",
    acquired: "PIL Totem",
    initials: "E",
    name: "Erica",
    testimonial:
      "El tótem nos permitió resolver gestiones simples sin depender siempre de una persona del equipo. La atención quedó más ágil y el flujo de trabajo mucho más ordenado.",
  },
] as const;

const columns = [
  { offset: 0, duration: "38s", className: "", direction: "normal" },
  { offset: 2, duration: "46s", className: "hidden md:block", direction: "reverse" },
  { offset: 4, duration: "54s", className: "hidden lg:block", direction: "normal" },
] as const;

function getColumnItems(offset: number) {
  return successCases.map((_, index) => successCases[(index + offset) % successCases.length]);
}

function CaseCard({ item }: { item: (typeof successCases)[number] }) {
  return (
    <article className="group flex min-h-[320px] flex-col rounded-lg border border-white/[0.05] bg-white/[0.022] p-6 shadow-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_34px_rgba(255,255,255,0.055),0_22px_70px_rgba(0,0,0,0.28)] md:min-h-[340px] md:p-7">
      <div className="mb-5 text-5xl font-serif leading-none text-white/10" aria-hidden="true">
        «
      </div>
      <p className="flex-1 text-[17px] font-light italic leading-relaxed text-gray-200 md:text-lg">
        {item.testimonial}
      </p>
      <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
          <span className="text-xs font-bold tracking-widest text-white/70">{item.initials}</span>
        </div>
        <div className="min-w-0 text-left">
          <p className="text-sm font-medium leading-snug text-white">{item.name}</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
            {item.acquired}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="exito" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 font-sans md:py-24">
      <style>{`
        @keyframes success-cases-wall-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }

        .success-cases-wall-track {
          animation-name: success-cases-wall-scroll;
          animation-duration: 46s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .success-cases-wall:hover .success-cases-wall-track,
        .success-cases-wall:focus-within .success-cases-wall-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .success-cases-wall-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-4 block text-sm font-light uppercase tracking-widest text-gray-400">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-[34px] font-normal leading-tight tracking-tight text-white md:text-[56px]">
            Casos de éxito
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-light leading-relaxed text-gray-400 md:text-lg">
            Experiencias de uso con soluciones activas de Progress in Line aplicadas a accesos, e-commerce integrado y atención en espacios físicos.
          </p>
        </motion.div>
      </div>

      <div className="success-cases-wall relative z-10 mx-auto max-w-7xl px-6">
        <div
          className="relative h-[560px] overflow-hidden md:h-[680px]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" aria-hidden="true" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {columns.map((column) => {
              const items = getColumnItems(column.offset);

              return (
                <div key={column.offset} className={cn("min-w-0", column.className)}>
                  <div
                    className="success-cases-wall-track will-change-transform"
                    style={{ animationDuration: column.duration, animationDirection: column.direction }}
                  >
                    {[0, 1].map((group) => (
                      <div key={group} className="flex flex-col gap-5 pb-5" aria-hidden={group === 1}>
                        {items.map((item) => (
                          <CaseCard key={`${group}-${item.product}-${item.testimonial}-${column.offset}`} item={item} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
