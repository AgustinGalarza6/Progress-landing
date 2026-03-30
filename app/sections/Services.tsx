"use client";

import { motion } from "framer-motion";

const solutionsKeys = [
    "customSystems",
    "integration",
    "automation",
    "pilAccess",
    "pilSoft"
];

export default function Services() {
    return (
        <section id="servicios" className="py-24 relative bg-black overflow-hidden font-sans">
            {/* Background Grid - Se mantiene igual */}
            <div className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Encabezado: Texto fino y centrado con copy de ingeniería */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight"
                    >
                        Soluciones digitales a medida <br />
                        <span className="font-normal text-[#6B9FF0]">para empresas exigentes</span>
                    </motion.h2>
                </div>

                {/* Grid de Servicios: 3 arriba, 2 abajo centrado */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <SolutionCard
                            key="customSystems"
                            title="Sistemas a Medida"
                            description="Desarrollo de plataformas, portales y soluciones 100% personalizadas para tu negocio."
                        />
                        <SolutionCard
                            key="integration"
                            title="Integración de Ecosistemas"
                            description="Conectamos tus sistemas, APIs y herramientas para lograr eficiencia y automatización real."
                        />
                        <SolutionCard
                            key="automation"
                            title="Automatización de Procesos"
                            description="Optimizamos tareas repetitivas y flujos críticos con tecnología de punta."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[66%] mx-auto">
                        <SolutionCard
                            key="pilAccess"
                            title="PIL Access"
                            description="Control de accesos, turnos y gestión de visitantes para empresas modernas."
                        />
                        <SolutionCard
                            key="pilSoft"
                            title="PIL Soft"
                            description="Software de gestión y soluciones verticales para industrias específicas."
                        />
                    </div>
                </div>
            </section>
        );
    }

function SolutionCard({ title, description }: { title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[240px] bg-black/60 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-[#6B9FF0] transition-all duration-300 flex flex-col justify-start text-left overflow-hidden"
        >
            {/* Transparencia superior */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <h3 className="text-3xl font-normal text-white mb-4 tracking-tight transition-colors duration-300 group-hover:text-[#6B9FF0]">
                {title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed font-light">
                {description}
            </p>

            {/* Efecto de brillo sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B9FF0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
        </motion.div>
    );
}