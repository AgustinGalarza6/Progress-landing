"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-[90vh] flex flex-col overflow-hidden pt-20" style={{ background: 'url(/background/hero_background.jpg) center/cover no-repeat, #0a0a0a' }}>

        <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            {/* Título: Ajustado a 2 renglones exactos y tamaño reducido (80px en LG) */}
            <h1 className="text-[38px] leading-[1.1] md:text-[68px] lg:text-[80px] font-light tracking-[-0.04em] text-white/90 mb-8">
                Ingeniería de software y soluciones
                <br className="hidden md:block" /> 
                digitales <span className="text-[#6B9FF0] font-normal">de alta complejidad</span>
            </h1>

            {/* Subtítulo: Foco en arquitectura, integración y automatización */}
            <p className="max-w-[700px] mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed opacity-80 balance font-light">
                Diseñamos y desarrollamos productos digitales a medida con foco en la arquitectura, 
                la integración de ecosistemas y la automatización de procesos críticos.
            </p>

            {/* Botón: Tono de consultoría especializada */}
            <a href="#contacto">
                <button className="px-8 py-2.5 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all active:scale-97 text-lg tracking-tight antialiased border border-black/10">
                    Hablar con un asesor
                </button>
            </a>
            </motion.div>
        </div>
        </section>
    );
}