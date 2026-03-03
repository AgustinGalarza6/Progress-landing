"use client";

import { motion } from "framer-motion";

const solutions = [
    {
        title: "Sistemas a Medida",
        description: "Diseño y desarrollo end-to-end de plataformas escalables bajo estándares de ingeniería moderna.",
    },
    {
        title: "Integración de Sistemas",
        description: "Conectamos ecosistemas complejos, ERPs y plataformas e-commerce para unificar flujos de datos.",
    },
    {
        title: "Automatización de Procesos",
        description: "Optimizamos la eficiencia operativa mediante la implementación de workflows y automatizaciones críticas.",
    },
    {
        title: "PIL Access",
        description: "Nuestra solución de producto dedicada al control de accesos y gestión inteligente de identidades.",
    },
    {
        title: "PILSoft",
        description: "Ecosistema modular de gestión empresarial diseñado para la optimización técnica de recursos.",
    },
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
                Ingeniería aplicada a <br />
                <span className="font-normal text-[#6B9FF0]">soluciones digitales</span>
            </motion.h2>
            </div>

            {/* Grid de Servicios: 3 arriba, 2 abajo centrado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {solutions.slice(0, 3).map((item, index) => (
                <SolutionCard key={index} title={item.title} description={item.description} />
            ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[66%] mx-auto">
            {solutions.slice(3, 5).map((item, index) => (
                <SolutionCard key={index} title={item.title} description={item.description} />
            ))}
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