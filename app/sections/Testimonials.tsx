"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
// import { useLanguage } from "../../components/LanguageProvider";
import "swiper/css";
import "swiper/css/free-mode";

const testimonials = [
    {
        content: "El equipo de Progress in line superó nuestras expectativas. La integración fue impecable y el soporte, excelente.",
        initials: "M.G.",
        author: "Martín Gómez, CTO Comahue Alarmas"
    },
    {
        content: "Nos ayudaron a automatizar procesos críticos y logramos escalar nuestro negocio sin fricciones.",
        initials: "L.S.",
        author: "Laura Sosa, CEO Sakya Tec"
    },
    {
        content: "La calidad técnica y la atención al detalle es de primer nivel. Recomendados para proyectos exigentes.",
        initials: "F.P.",
        author: "Federico Pérez, Fundador PIL Cloud"
    },
    {
        content: "Excelente partner tecnológico. Cumplieron en tiempo y forma, y el producto final superó lo esperado.",
        initials: "C.R.",
        author: "Carla Ruiz, Gerente de Innovación"
    }
];

    export default function Testimonials() {
        // const { t } = useLanguage();
        return (
            <section id="exito" className="py-24 relative bg-[#0a0a0a] overflow-hidden font-sans border-t border-white/5">
                <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-gray-400 text-sm font-light mb-4 block uppercase tracking-widest">
                            CASOS DE ÉXITO
                        </span>
                        <h2 className="text-[40px] md:text-[56px] font-normal text-white leading-tight tracking-tight">
                            Clientes que confiaron <br />
                            <span>en nuestro equipo</span>
                        </h2>
                    </motion.div>
                </div>
                <div className="relative z-10 flex">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        loop={true}
                        speed={10000}
                        freeMode={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 3.5 },
                        }}
                        className="testimonials-swiper-linear !ease-linear"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#141414] border border-white/[0.05] rounded-2xl p-8 md:p-10 flex flex-col h-full min-h-[380px] transition-all duration-300 hover:border-[#6B9FF0]/40">
                                    <div className="text-5xl text-[#6B9FF0]/10 font-serif leading-none mb-6">«</div>
                                    <div className="flex-grow">
                                        <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 italic">
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full flex-shrink-0 border border-[#6B9FF0]/30 bg-[#6B9FF0]/10 flex items-center justify-center shadow-2xl">
                                        <span className="text-[#6B9FF0] text-xs font-bold tracking-widest">{item.initials}</span>
                                    </div>
                                    <div className="flex flex-col text-left mt-4">
                                        <span className="text-white text-sm font-medium tracking-tight">
                                            {item.author}
                                        </span>
                                        <span className="text-[#6B9FF0] text-[9px] font-bold uppercase tracking-widest mt-0.5 opacity-70">
                                            Verificado
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <style jsx global>{`
                    .testimonials-swiper-linear .swiper-wrapper {
                        transition-timing-function: linear !important;
                    }
                `}</style>
            </section>
        );
    }