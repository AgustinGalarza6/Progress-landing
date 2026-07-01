"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Fintech Dashboard",
        category: "Web App",
        description: "Plataforma de análisis financiero con visualización de datos en tiempo real.",
        image: "https://placehold.co/600x400/1a1a2e/6B9FF0?text=Fintech+Dashboard",
        tech: ["React", "D3.js", "Node.js"],
        color: "from-[#6B9FF0] to-[#4A7EDF]",
    },
    {
        title: "E-commerce automatizado",
        category: "Mobile + Web",
        description: "Tienda online con recomendaciones personalizadas y procesos comerciales optimizados.",
        image: "https://placehold.co/600x400/1a1a2e/6B9FF0?text=E-commerce+automatizado",
        tech: ["Next.js", "Python", "TensorFlow"],
        color: "from-[#6B9FF0] to-[#4A7EDF]",
    },
    {
        title: "Health Tracker",
        category: "Mobile App",
        description: "App de salud con integración de wearables e inteligencia operativa.",
        image: "https://placehold.co/600x400/1a1a2e/22c55e?text=Health+Tracker",
        tech: ["React Native", "Firebase", "Automatización"],
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "SaaS Platform",
        category: "Enterprise",
        description: "Plataforma B2B para gestión de equipos y recursos.",
        image: "https://placehold.co/600x400/1a1a2e/f97316?text=SaaS+Platform",
        tech: ["TypeScript", "AWS", "PostgreSQL"],
        color: "from-orange-500 to-red-500",
    },
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-32 relative overflow-hidden bg-[#050505]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-gray-400 font-light tracking-widest uppercase text-[11px] mb-4 block">Portfolio</span>
                <h2 className="text-[40px] md:text-[56px] font-normal text-white leading-tight tracking-tight">
                Proyectos <span className="text-white/50">destacados</span>
                </h2>
            </motion.div>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mt-6 md:mt-0 text-white/60 font-light hover:text-white transition-colors flex items-center gap-2"
            >
                Ver todos los proyectos <ExternalLink className="w-4 h-4" />
            </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center text-gray-600">
                    <span className="text-lg font-medium">{project.title}</span>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                        <ExternalLink className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                        <Github className="w-6 h-6 text-white" />
                    </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                    </span>
                    </div>
                    <h3 className="text-2xl font-normal text-white mb-3 group-hover:text-[#6B9FF0] transition-colors tracking-tight">
                    {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {t}
                        </span>
                    ))}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
