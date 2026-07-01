"use client";

import { motion } from "framer-motion";
import { Rocket, BarChart3, User, Building2 } from "lucide-react";

const segments = [
    {
        icon: Rocket,
        title: "Startups",
        description: "Equipos en etapa temprana que necesitan lanzar un MVP robusto y validable sin perder el foco en el core del negocio.",
    },
    {
        icon: BarChart3,
        title: "Scaleups",
        description: "Empresas con tracción que buscan escalar su arquitectura técnica, mejorar performance y acelerar su roadmap de producto.",
    },
    {
        icon: User,
        title: "Fundadores",
        description: "Perfiles de negocio que requieren un partner técnico senior para traducir su visión estratégica en una solución digital real.",
    },
    {
        icon: Building2,
        title: "Corporaciones",
        description: "Áreas de innovación que impulsan iniciativas complejas de transformación digital, automatización y procesos inteligentes.",
    },
    ];

    export default function IsForYou() {
    return (
        <section id="perfil" className="py-24 relative bg-black overflow-hidden font-sans border-t border-white/5">
        
        {/* Background Grid unificado con la sección de Servicios sobre fondo negro */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
            style={{ 
            backgroundImage: `linear-gradient(#ffffff15 1px, transparent 1px), linear-gradient(90deg, #ffffff15 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
            }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
            
            {/* Encabezado: Mix de Host Grotesk y Azul Acero */}
            <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[40px] md:text-[56px] font-light text-white leading-tight tracking-tight">
                    <span className="text-[#6B9FF0] font-normal">Nos adaptamos</span> al momento de tu idea
                </h2>
            </motion.div>
            </div>

            {/* Grid de perfiles: Estilo de tarjetas premium sobre negro */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {segments.map((item, index) => (
                <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/60 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 hover:border-[#6B9FF0]/40"
                >
                {/* Icono minimalista con el azul acero */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-[#6B9FF0] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-normal text-white mb-4 tracking-tight group-hover:text-[#6B9FF0] transition-colors">
                    {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.description}
                </p>

                {/* Efecto de resplandor superior en hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B9FF0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
