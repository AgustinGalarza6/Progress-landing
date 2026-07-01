"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type ClientLogo = {
    name: string;
    url: string;
    alt: string;
};

const logos: ClientLogo[] = [
    {
        name: "Sakya Tec",
        url: "/clients_slider/sakya_tec.png",
        alt: "Logo de Sakya Tec",
    },
    {
        name: "Comahue Seguridad",
        url: "/clients_slider/comahue_alarmas.png",
        alt: "Logo de Comahue Seguridad",
    },
    {
        name: "YPF",
        url: "/clients_slider/ypf.png",
        alt: "Logo de YPF",
    },
    {
        name: "Mostaza",
        url: "/clients_slider/mostaza.png",
        alt: "Logo de Mostaza",
    },
    {
        name: "Hospital Británico",
        url: "/clients_slider/hospital-britanico.png",
        alt: "Logo de Hospital Británico",
    },
    {
        name: "CableVisión",
        url: "/clients_slider/cablevision.png",
        alt: "Logo de CableVisión",
    },
];

export default function ClientsSlider() {
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <section id="clientes" className="py-16 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/90 group cursor-default"
                >
                    <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <span className="text-sm md:text-base font-light tracking-tight opacity-80">
                        Empresas y organizaciones vinculadas a nuestros proyectos
                    </span>
                </motion.div>
            </div>

            <div className="relative group">
                <div
                    className="marquee-track flex items-center gap-10 py-4 md:gap-14"
                    style={{ animationDuration: "68s" }}
                >
                    {repeatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex h-44 w-64 flex-shrink-0 items-center justify-center overflow-hidden md:h-52 md:w-80"
                        >
                            <img
                                src={logo.url}
                                alt={logo.alt}
                                className="block h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
