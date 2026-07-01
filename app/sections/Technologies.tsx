"use client";

import { motion } from "framer-motion";

const technologies = [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", color: "#ffffff" },
    { name: "TypeScript", category: "Frontend", color: "#3178C6" },
    { name: "Tailwind", category: "Frontend", color: "#06B6D4" },
    { name: "Node.js", category: "Backend", color: "#339933" },
    { name: "Python", category: "Backend", color: "#3776AB" },
    { name: "PostgreSQL", category: "Database", color: "#336791" },
    { name: "MongoDB", category: "Database", color: "#47A248" },
    { name: "AWS", category: "Cloud", color: "#FF9900" },
    { name: "Docker", category: "DevOps", color: "#2496ED" },
    { name: "Kubernetes", category: "DevOps", color: "#326CE5" },
    { name: "TensorFlow", category: "Automatización", color: "#FF6F00" },
];

export default function Technologies() {
    return (
        <section id="tecnologias" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-gray-400 font-light tracking-widest uppercase text-[11px] mb-4 block">Stack Tecnológico</span>
                <h2 className="text-[40px] md:text-[56px] font-normal text-white leading-tight tracking-tight mb-6">
                Tecnologías <span className="text-white/50">modernas</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400">
                Utilizamos las mejores herramientas del mercado para garantizar calidad y escalabilidad.
                </p>
            </motion.div>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
                <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                <div className="flex flex-col items-center text-center">
                    <div 
                    className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center text-2xl font-bold"
                    style={{ 
                        backgroundColor: `${tech.color}15`,
                        color: tech.color,
                        border: `1px solid ${tech.color}30`
                    }}
                    >
                    {tech.name[0]}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                    <span className="text-xs text-gray-500">{tech.category}</span>
                </div>
                
                {/* Hover Glow */}
                <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                    style={{ backgroundColor: `${tech.color}10` }}
                />
                </motion.div>
            ))}
            </div>

            {/* Automation Banner */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-white/10 relative overflow-hidden"
            >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                <h3 className="text-2xl font-bold text-white mb-2">¿Listo para optimizar procesos?</h3>
                <p className="text-gray-400">Implementamos automatizaciones, análisis operativo y soluciones inteligentes aplicadas a procesos reales.</p>
                </div>
                <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                Solicitar diagnóstico
                </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
            </motion.div>
        </div>
        </section>
    );
}
