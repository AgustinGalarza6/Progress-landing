"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";

const processSteps = [
    {
        stage: "ETAPA 1",
        title: "Kickoff & Visión Estratégica",
        items: [
        "Sesión de alineación técnica para definir el ecosistema del proyecto, el roadmap inicial y los protocolos de comunicación.",
        "Establecemos los KPI de negocio y el alcance del producto digital desde una perspectiva de ingeniería."
        ]
    },
    {
        stage: "ETAPA 2",
        title: "Arquitectura & Prototipado",
        items: [
        "Diseño de la arquitectura de software y validación de viabilidad técnica (PoC) para mitigar riesgos tempranos.",
        "Desarrollo de prototipos funcionales y flujos de usuario (UX) para validar la lógica del sistema antes de la construcción.",
        "Definición de integraciones con terceros (API, ERP, Pasarelas) y selección del stack tecnológico óptimo."
        ]
    },
    {
        stage: "ETAPA 3",
        title: "Desarrollo Ágil e Iterativo",
        items: [
        "Ejecución en ciclos de Sprints con entregas funcionales constantes y visibilidad total del progreso.",
        "Acceso a nuestra plataforma de seguimiento para decisiones en tiempo real y gestión del backlog técnico.",
        "Enfoque en escalabilidad y mantenibilidad del código bajo estándares de desarrollo senior."
        ]
    },
    {
        stage: "ETAPA 4",
        title: "QA, Lanzamiento & Evolución",
        items: [
        "Protocolos de QA Hardening y pruebas de rendimiento para garantizar un despliegue controlado y seguro.",
        "Acompañamiento integral en el Go-Live y monitoreo post-lanzamiento de la infraestructura.",
        "Mantenimiento proactivo y evolución del producto basada en métricas de uso y necesidades del mercado."
        ]
    }
];

export default function Process() {
    return (
        <section id="nuestrometodo" className="py-24 bg-[#0a0a0a] overflow-hidden font-sans border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
            >
            <span className="text-gray-400 text-sm font-light mb-4 block uppercase tracking-widest">
                Nuestro Método
            </span>
            <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-normal text-white tracking-tight">
                Rigor técnico, metodología ágil <br />
                <span className="text-white/50">y productos de ingeniería</span>
            </h2>
            </motion.div>
        </div>

        <div className="relative pl-6 lg:pl-[calc((100vw-1280px)/2+24px)]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-10" />

            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            speed={800}
            breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.5 },
                1440: { slidesPerView: 3.2 },
            }}
            className="process-swiper !overflow-visible"
            >
            {processSteps.map((step, index) => (
                <SwiperSlide key={index} className="opacity-40 swiper-slide-active:opacity-100 transition-opacity duration-500">
                <div className="pt-12 pb-8 pr-8">
                    <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                    <span className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em]">
                        {step.stage}
                    </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl text-white font-normal mb-8 tracking-tight">
                    {step.title}
                    </h3>

                    <ul className="space-y-6">
                    {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                        <div className="mt-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-400 text-base font-light leading-relaxed">
                            {item}
                        </p>
                        </li>
                    ))}
                    </ul>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
}