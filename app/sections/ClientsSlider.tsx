"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const logos = [
    { name: "Shopery", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }, // Sustituir por tus logos locales
    { name: "solu.", url: "" },
    { name: "STANLEY", url: "" },
    { name: "Universidad Central", url: "" },
    { name: "Adidas", url: "" },
    { name: "DELL", url: "" },
    { name: "FIAT", url: "" },
    { name: "Flecha Bus", url: "" },
];

export default function ClientsSlider() {
    // Duplicamos la lista para el efecto infinito del marquee
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
            {/* Icono circular con flecha como en la foto 1 */}
            <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
                <ChevronRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm md:text-base font-light tracking-tight opacity-80">
                Nos eligieron para impulsar su crecimiento
            </span>
            </motion.div>
        </div>

        <div className="relative group">
            {/* Degradados laterales para suavizar la entrada/salida */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Marquee Track (usa la animación de tu globals.css) */}
            <div className="marquee-track flex items-center gap-16 md:gap-24 py-4">
            {repeatedLogos.map((logo, index) => (
                <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                {/* Si tienes las imágenes, usa <img />. Si no, el nombre con fuente Host Grotesk */}
                {logo.url ? (
                    <img src={logo.url} alt={logo.name} className="h-6 md:h-8 w-auto object-contain" />
                ) : (
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase italic">
                    {logo.name}
                    </span>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}