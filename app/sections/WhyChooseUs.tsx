"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
    {
        title: "Seniority en Producto",
        text: "Talento senior con visión integral en arquitectura, escalabilidad y ciclo de vida de producto."
    },
    {
        title: "Partner Estratégico",
        text: "Participación activa en decisiones de negocio para asegurar que la técnica impulse la rentabilidad."
    },
    {
        title: "Gobernanza Técnica",
        text: "Metodología ágil con visibilidad total de deuda técnica, roadmaps y releases para stakeholders."
    },
    {
        title: "Cultura de Performance",
        text: "Foco en resultados de ingeniería medibles: estabilidad, eficiencia de procesos y optimización de recursos."
    },
    ];

    const metrics = [
    { value: "120+", label: "Soluciones de alta complejidad" },
    { value: "180+", label: "Ecosistemas integrados" },
    { value: "100%", label: "Eficiencia operativa técnica" },
    ];

    export default function WhyChooseUs() {
    return (
        <section id="diferenciales" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                Por qué elegirnos
                </span>
                <h2 className="text-[40px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                Ingeniería que <br />
                <span className="text-[#6B9FF0] font-normal">escala tu visión</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                Nos integramos como un partner tecnológico de alto nivel para acelerar la toma de decisiones y eliminar la fricción entre la visión estratégica y la ejecución técnica de calidad.
                </p>

                <div className="space-y-6">
                {differentiators.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B9FF0] mt-2 group-hover:shadow-[0_0_8px_#6B9FF0] transition-all" />
                    <div>
                        <h4 className="text-white text-base font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-400 font-light text-sm leading-relaxed">{item.text}</p>
                    </div>
                    </div>
                ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-10"
            >
                <h3 className="text-white text-2xl font-normal mb-10 tracking-tight">
                Métricas de impacto <br /> <span className="text-gray-500">en ingeniería</span>
                </h3>
                <div className="grid grid-cols-1 gap-10">
                {metrics.map((metric) => (
                    <div key={metric.label} className="border-l border-[#6B9FF0]/30 pl-6">
                    <p className="text-5xl font-light text-white mb-2">{metric.value}</p>
                    <p className="text-xs text-[#6B9FF0] font-bold uppercase tracking-widest opacity-80">{metric.label}</p>
                    </div>
                ))}
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    );
}