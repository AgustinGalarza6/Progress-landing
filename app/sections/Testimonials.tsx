"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/free-mode";

const testimonials = [
    {
        content: "La integración de nuestro ecosistema ERP con la plataforma de e-commerce fue impecable. Logramos una sincronización de datos en tiempo real que optimizó toda nuestra operación logística.",
        author: "Facundo Sanchez",
        image: "/avatars/facundo.jpg",
    },
    {
        content: "Progress in Line desarrolló una arquitectura robusta para nuestra solución de control de accesos. El rigor técnico en el manejo de identidades superó nuestras expectativas de seguridad.",
        author: "Federico Fernandez",
        image: "/avatars/federico.jpg",
    },
    {
        content: "Implementamos procesos de automatización crítica que eliminaron cuellos de botella operativos. La visión de ingeniería que aportan al producto digital marca una diferencia real.",
        author: "Pablo Citro",
        image: "/avatars/pablo.jpg",
    },
    {
        content: "Al terminar el desarrollo inicial, la escalabilidad del código nos permitió seguir evolucionando la plataforma de manera natural y sin deuda técnica acumulada.",
        author: "Nordicflow",
        image: "/avatars/nordic.jpg",
    }
    ];

    export default function Testimonials() {
    return (
        <section id="exito" className="py-24 relative bg-[#0a0a0a] overflow-hidden font-sans border-t border-white/5">
        
        {/* Background Grid eliminado para igualar la sobriedad de la sección Proceso */}

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
                Historias reales, <br />
                <span>resultados de ingeniería</span>
            </h2>
            </motion.div>
        </div>

        {/* Slider con movimiento lineal continuo */}
        <div className="relative z-10 flex">
            <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            speed={10000} 
            freeMode={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 3.5 },
            }}
            className="testimonials-swiper-linear !ease-linear"
            >
            {testimonials.map((t, index) => (
                <SwiperSlide key={index} className="h-auto">
                <div className="bg-[#141414] border border-white/[0.05] rounded-2xl p-8 md:p-10 flex flex-col h-full min-h-[380px] transition-all duration-300 hover:border-[#6B9FF0]/40">
                    
                    <div className="text-5xl text-[#6B9FF0]/10 font-serif leading-none mb-6">«</div>

                    <div className="flex-grow">
                    <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 italic">
                        "{t.content}"
                    </p>
                    </div>

                    <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl">
                        <img 
                        src={t.image} 
                        alt={t.author} 
                        className="w-full h-full object-cover grayscale opacity-80" 
                        />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-white text-sm font-medium tracking-tight">
                        {t.author}
                        </span>
                        <span className="text-[#6B9FF0] text-[9px] font-bold uppercase tracking-widest mt-0.5 opacity-70">
                        CLIENTE VERIFICADO
                        </span>
                    </div>
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