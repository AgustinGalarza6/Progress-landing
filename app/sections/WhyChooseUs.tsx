"use client";

import { motion } from "framer-motion";
// import { useLanguage } from "../../components/LanguageProvider";

const differentiators = [
    {
        title: "Equipo senior multidisciplinario",
        text: "Arquitectos, ingenieros y diseñadores con experiencia real en proyectos complejos."
    },
    {
        title: "Integración total de sistemas",
        text: "Conectamos tu software con APIs, ERPs, CRMs y cualquier plataforma que uses."
    },
    {
        title: "Automatización y performance",
        text: "Optimizamos procesos críticos y mejoramos la eficiencia operativa de tu empresa."
    },
    {
        title: "Soporte y evolución continua",
        text: "Acompañamiento post-lanzamiento y mejoras constantes para tu negocio digital."
    }
];

const metrics = [
    { value: "120+", label: "Proyectos entregados" },
    { value: "180+", label: "Integraciones exitosas" },
    { value: "100%", label: "Satisfacción de clientes" }
];

    export default function WhyChooseUs() {
        // const { t } = useLanguage();
        return (
            <section id="porque-elegirnos" className="py-20 md:py-28 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                    ¿Por qué elegirnos?
                    </span>
                    <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                    Expertos en ingeniería <br />
                    <span className="text-[#6B9FF0] font-normal">y arquitectura digital</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                    Más de 120 proyectos entregados, 180 integraciones y 100% de satisfacción.
                    </p>

                    <div className="space-y-6">
                    {differentiators.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
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
                    className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 md:p-10"
                >
                    <h3 className="text-white text-2xl font-normal mb-10 tracking-tight">
                    Resultados comprobados <br /> <span className="text-gray-500">en cada proyecto</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-10">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="border-l border-[#6B9FF0]/30 pl-6">
                        <p className="text-4xl md:text-5xl font-light text-white mb-2">{metric.value}</p>
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
