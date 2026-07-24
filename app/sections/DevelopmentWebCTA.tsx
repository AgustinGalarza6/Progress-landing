"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DevelopmentWebCTA() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rawY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-180, 180]);
    const imageY = useSpring(rawY, {
        stiffness: 80,
        damping: 24,
        mass: 0.4,
    });

    return (
        <section
            ref={sectionRef}
            id="desarrollo-web-preview"
            className="relative overflow-hidden border-t border-white/5 bg-black py-20 md:py-24"
        >
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-180px] right-0 top-[-180px] z-0 w-full md:w-[52%]"
                style={{ y: imageY }}
            >
                <img
                    src="/backgrounds/diseno.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center opacity-65 md:object-[62%_50%] md:opacity-70 lg:opacity-75"
                    loading="lazy"
                    decoding="async"
                />
            </motion.div>
            <div
                aria-hidden="true"
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.58) 62%, rgba(0,0,0,0.14) 100%), linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.16) 52%, rgba(0,0,0,0.82) 100%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl"
                >
                    <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B9FF0]">
                        Desarrollo web
                    </span>
                    <h2 className="mb-6 text-[34px] font-light leading-tight tracking-tight text-white md:text-[56px]">
                        ¿Necesitás una web profesional <br />
                        <span className="font-normal text-[#6B9FF0]">para tu empresa?</span>
                    </h2>
                    <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                        Creamos landing pages, sitios institucionales y webs corporativas modernas, rápidas y preparadas para convertir visitas en oportunidades comerciales.
                    </p>
                    <Link
                        href="/desarrollo-web"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200 active:scale-95 sm:w-auto"
                    >
                        Ver planes de desarrollo web
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
