"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, GitBranch, Settings2 } from "lucide-react";

const trustIndicators = [
    { icon: Settings2, label: "Sistemas a medida" },
    { icon: GitBranch, label: "Integraciones API / ERP / CRM" },
    { icon: Bot, label: "Automatización de procesos" },
];

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-[90vh] flex flex-col overflow-hidden pt-36 md:pt-24"
            style={{ background: "url(/background/hero_background.jpg) center/cover no-repeat, #0a0a0a" }}
        >
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 flex-grow flex flex-col items-center justify-start md:justify-center px-4 pb-12 text-center max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl"
                >
                    <span className="inline-flex items-center justify-center rounded-full border border-[#6B9FF0]/30 bg-[#6B9FF0]/10 px-4 py-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.22em] text-[#6B9FF0] mb-7">
                        Ingeniería de software para empresas
                    </span>

                    <h1 className="text-[38px] leading-[1.05] md:text-[64px] lg:text-[78px] font-light tracking-[-0.04em] text-white/90 mb-8">
                        Software a medida, integración y automatización <br className="hidden lg:block" />
                        <span className="text-[#6B9FF0] font-normal">para empresas que quieren escalar</span>
                    </h1>

                    <p className="max-w-[820px] mx-auto text-gray-300/85 text-base md:text-xl mb-10 leading-relaxed font-light">
                        Diseñamos soluciones digitales robustas para conectar sistemas, optimizar procesos críticos y convertir operaciones complejas en flujos simples, medibles y eficientes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all active:scale-95 text-base border border-black/10"
                        >
                            Hablar con un asesor
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="/#servicios"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-black/20 border border-white/20 rounded-lg font-medium text-base hover:bg-white/5 transition-all text-white/90 backdrop-blur-sm"
                        >
                            Ver soluciones
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                        {trustIndicators.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-center gap-3 rounded-xl border border-white/[0.08] bg-black/35 px-4 py-3 text-gray-300 backdrop-blur-sm"
                            >
                                <item.icon className="w-4 h-4 text-[#6B9FF0] flex-shrink-0" aria-hidden="true" />
                                <span className="text-sm font-light">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
