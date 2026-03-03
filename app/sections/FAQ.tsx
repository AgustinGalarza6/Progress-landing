"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "¿Qué procesos comprende la ingeniería a medida?",
        answer:
        "Abarca el ciclo de vida completo: Discovery técnico, diseño de arquitectura escalable, desarrollo iterativo por Sprints, QA Hardening, despliegue controlado (CI/CD) y evolución continua del producto.",
    },
    {
        question: "¿Cuáles son los tiempos estimados para una PoC o MVP?",
        answer:
        "Dependiendo de la complejidad arquitectónica, una Proof of Concept (PoC) o MVP funcional suele iterarse entre 8 y 16 semanas, con entregas de valor técnico verificables en cada ciclo de desarrollo.",
    },
    {
        question: "¿Cómo integran soluciones de Inteligencia Artificial?",
        answer:
        "Implementamos IA (LLMs, Computer Vision o modelos predictivos) únicamente cuando existe un caso de uso técnico que optimice procesos, reduzca costos operativos o mejore significativamente la conversión.",
    },
    {
        question: "¿Progress in Line actúa como partner técnico de largo plazo?",
        answer:
        "Sí. Nos integramos en el ecosistema de startups, scaleups y corporaciones, gestionando la gobernanza técnica y asegurando que la tecnología escale a la par de los objetivos de negocio.",
    },
    ];

    export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Encabezado con estilo de ingeniería */}
            <div className="text-center mb-16">
            <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                CONSULTAS TÉCNICAS
            </span>
            <h2 className="text-[40px] md:text-[56px] font-light text-white leading-tight tracking-tight">
                Despejamos tus <span className="text-[#6B9FF0] font-normal">dudas clave</span>
            </h2>
            </div>

            <div className="space-y-4">
            {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#6B9FF0]/30 transition-colors"
                >
                    <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                    <span className={`text-lg transition-colors ${isOpen ? "text-[#6B9FF0]" : "text-white/90"}`}>
                        {item.question}
                    </span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#6B9FF0]" : "rotate-0 text-white/20"
                        }`}
                    />
                    </button>

                    <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                        <p className="px-8 pb-6 text-gray-400 leading-relaxed font-light text-[15px] border-t border-white/[0.05] pt-4">
                            {item.answer}
                        </p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.div>
                );
            })}
            </div>
        </div>
        </section>
    );
}