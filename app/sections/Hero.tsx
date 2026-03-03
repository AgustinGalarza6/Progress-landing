"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-[90vh] flex flex-col bg-black overflow-hidden pt-20">
        {/* Glow de fondo calibrado en Azul Acero para un perfil técnico */}
        <div className="absolute inset-0 pointer-events-none">
            <div 
            className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] opacity-30 blur-[120px]"
            style={{
                background: 'radial-gradient(circle, #6B9FF0 0%, #2d4a7a 50%, transparent 70%)',
                borderRadius: '50% 50% 0 0'
            }}
            />
        </div>

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
            <button className="px-10 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all active:scale-95 text-sm tracking-tight">
                Consultoría técnica
            </button>
            </motion.div>
        </div>
        </section>
    );
}