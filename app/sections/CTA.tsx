"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section id="cta" className="py-32 relative overflow-hidden bg-black">
        {/* Background Elements - Se mantienen según diseño original */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B9FF0]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A7EDF]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            {/* Label superior alineado a visión de producto */}
            <span className="inline-block text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-8">
                ¿Listo para escalar tu visión?
            </span>

            {/* Título: Enfoque en arquitectura e ingeniería de producto */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
                Convirtamos tu idea en <br />
                <span className="text-[#6B9FF0] font-normal text-gradient">un producto de ingeniería</span>
            </h2>

            {/* Subtítulo: Enfoque técnico de punta a punta */}
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 font-light">
                Te acompañamos en todo el ciclo de vida: desde la arquitectura y el diseño técnico, hasta el despliegue y la evolución continua con foco en resultados reales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/5491138923268" target="_blank" rel="noreferrer" className="group px-10 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all active:scale-95 text-base flex items-center gap-2 transform-gpu will-change-transform subpixel-antialiased antialiased shadow-sm" style={{ WebkitFontSmoothing: 'antialiased' }}>
                Solicitar diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#exito" className="px-10 py-4 bg-transparent border border-white/20 rounded-lg font-medium text-base hover:bg-white/5 transition-all text-white/90">
                Ver testimonios
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-light tracking-wide">
                Respuesta técnica en menos de 24 horas · Sesión inicial de arquitectura gratuita
            </p>
            </motion.div>
        </div>
        </section>
    );
}
