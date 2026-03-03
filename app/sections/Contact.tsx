"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        type: "Desarrollo a Medida",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contacto" className="py-32 relative overflow-hidden bg-black">
        {/* Background Elements - Coherencia con CTA */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B9FF0]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A7EDF]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Info - Estilo Canales de Atención CTC */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                CANALES DE ATENCIÓN
                </span>
                <h2 className="text-[40px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                Hablar con <br />
                <span className="text-[#6B9FF0] font-normal">un consultor</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg font-light max-w-md">
                Un asesor de nuestro equipo se pondrá en contacto para analizar su requerimiento técnico de manera personalizada.
                </p>

                <div className="space-y-4">
                {[
                    { icon: Mail, label: "EMAIL", value: "info@ctcsistemas.com.ar" },
                    { icon: Phone, label: "TELÉFONO", value: "+54 9 11 3892-3268" },
                    { icon: Clock, label: "HORARIO", value: "Lunes a viernes · 9 a 18 hs" },
                    { icon: MapPin, label: "UBICACIÓN", value: "Av. Regimientos de Patricios 176" },
                ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] p-4 rounded-2xl hover:bg-white/[0.05] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#6B9FF0]/10 border border-[#6B9FF0]/20 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-[#6B9FF0]" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                        <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Form - Estilo Glassmorphism CTC */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative"
            >
                {/* Brillo superior decorativo */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#6B9FF0]/40 to-transparent" />
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre Completo *</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#6B9FF0]/50 transition-all"
                        placeholder="Ej: Martín González"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    </div>
                    <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Corporativo *</label>
                    <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#6B9FF0]/50 transition-all"
                        placeholder="martin@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Empresa</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#6B9FF0]/50 transition-all"
                        placeholder="Empresa S.A."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    </div>
                    <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Tipo de Consulta *</label>
                    <select 
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#6B9FF0]/50 transition-all appearance-none"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <option>Desarrollo a Medida</option>
                        <option>Integración de Sistemas</option>
                        <option>Automatización / IA</option>
                        <option>PIL Access / PILSoft</option>
                    </select>
                    </div>
                </div>

                <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Mensaje *</label>
                    <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#6B9FF0]/50 transition-all resize-none"
                    placeholder="Describa brevemente su requerimiento técnico..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-[#6B9FF0] text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#8bb7f7] transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-[0_0_20px_rgba(107,159,240,0.3)]"
                >
                    Solicitar Contacto
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <div className="flex justify-center gap-6 pt-2">
                    <span className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                    <div className="w-1 h-1 rounded-full bg-[#6B9FF0]" /> Atención Profesional
                    </span>
                    <span className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                    <div className="w-1 h-1 rounded-full bg-[#6B9FF0]" /> Asesoramiento Especializado
                    </span>
                </div>
                </form>
            </motion.div>
            </div>
        </div>
        </section>
    );
}