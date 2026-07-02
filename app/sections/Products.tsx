"use client";

import { motion } from "framer-motion";

const products = [
    {
        name: "PIL Access",
        description:
            "Solución para control de accesos, gestión de visitantes, turnos y operaciones internas con trazabilidad centralizada.",
        isComingSoon: false,
    },
    {
        name: "PIL Soft",
        description:
            "Software de gestión adaptable para empresas que necesitan digitalizar procesos específicos, ordenar información y mejorar la operación diaria.",
        isComingSoon: true,
    },
    {
        name: "PIL Sync",
        description:
            "E-commerce integrado a tu software para conectar ventas online, stock, pedidos y procesos internos.",
        isComingSoon: true,
    },
    {
        name: "PIL Totem",
        description:
            "Terminal interactiva para atención, autogestión, turnos o consultas internas, pensada para mejorar la experiencia operativa en espacios físicos.",
        isComingSoon: false,
    },
];

export default function Products() {
    return (
        <section id="productos" className="py-20 md:py-24 relative bg-[#0a0a0a] overflow-hidden font-sans border-t border-white/5">
            <div className="absolute inset-0 opacity-[0.18] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff15 1px, transparent 1px), linear-gradient(90deg, #ffffff15 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block"
                    >
                        Productos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6"
                    >
                        Soluciones listas para operar <br />
                        <span className="text-[#6B9FF0] font-normal">con tecnología escalable</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-gray-400 text-lg font-light leading-relaxed"
                    >
                        Soluciones desarrolladas por Progress in Line para resolver necesidades operativas concretas con tecnología escalable.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.08 }}
                            className="group relative h-full min-h-[280px] bg-black/60 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:border-[#6B9FF0] transition-all duration-300 flex flex-col justify-between text-left overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div>
                                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B9FF0]">
                                        Producto PIL
                                    </p>
                                    {product.isComingSoon && (
                                        <span className="rounded-full border border-[#6B9FF0]/25 bg-[#6B9FF0]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9bbcf3]">
                                            Próximamente
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-normal text-white mb-5 tracking-tight transition-colors duration-300 group-hover:text-[#6B9FF0]">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                    {product.description}
                                </p>
                            </div>
                            <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#6B9FF0]/40 via-white/10 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6B9FF0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
