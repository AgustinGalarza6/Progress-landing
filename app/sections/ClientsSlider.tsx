"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type ClientLogo = {
    name: string;
    url: string;
    alt: string;
    maxWidth: string;
    maxHeight: string;
    clipPath?: string;
};

const logos: ClientLogo[] = [
    {
        name: "Sakya Tec",
        url: "/clients_slider/sakya_tec.png",
        alt: "Logo de Sakya Tec",
        maxWidth: "128px",
        maxHeight: "72px",
    },
    {
        name: "Comahue",
        url: "/clients_slider/comahue_alarmas.png",
        alt: "Logo de Comahue Alarmas",
        maxWidth: "104px",
        maxHeight: "72px",
    },
    {
        name: "YPF",
        url: "/clients_slider/ypf.svg",
        alt: "Logo de YPF",
        maxWidth: "128px",
        maxHeight: "58px",
    },
    {
        name: "Mostaza",
        url: "/clients_slider/mostaza.png",
        alt: "Logo de Mostaza",
        maxWidth: "116px",
        maxHeight: "70px",
    },
    {
        name: "Hospital Británico",
        url: "/clients_slider/hospital-britanico.webp",
        alt: "Logo de Hospital Británico",
        maxWidth: "190px",
        maxHeight: "58px",
    },
    {
        name: "CableVisión",
        url: "/clients_slider/cablevision.png",
        alt: "Logo de CableVisión",
        maxWidth: "140px",
        maxHeight: "66px",
        clipPath: "inset(28% 5% 28% 5%)",
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
                            className="flex h-24 w-44 flex-shrink-0 items-center justify-center overflow-hidden md:w-56"
                        >
                            <img
                                src={logo.url}
                                alt={logo.alt}
                                className="block object-contain"
                                style={{
                                    width: "auto",
                                    height: "auto",
                                    maxWidth: logo.maxWidth,
                                    maxHeight: logo.maxHeight,
                                    clipPath: logo.clipPath,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
