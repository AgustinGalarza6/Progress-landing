"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DevelopmentWebCTA() {
    return (
        <section id="desarrollo-web-preview" className="py-24 relative bg-black overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B9FF0]/10 rounded-full blur-[128px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl"
                >
                    <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                        Desarrollo web
                    </span>
                    <h2 className="text-[40px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                        ¿Necesitás una web profesional <br />
                        <span className="text-[#6B9FF0] font-normal">para tu empresa?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10">
                        Creamos landing pages, sitios institucionales y webs corporativas modernas, rápidas y preparadas para convertir visitas en oportunidades comerciales.
                    </p>
                    <Link
                        href="/desarrollo-web"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all active:scale-95"
                    >
                        Ver planes de desarrollo web
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
