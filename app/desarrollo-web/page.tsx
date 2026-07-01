import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Gauge, Search, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WebConfigurator from "../sections/WebConfigurator";

export const metadata: Metadata = {
    title: {
        absolute: "Desarrollo web profesional | Progress in Line",
    },
    description:
        "Planes de desarrollo web, landing pages y sitios corporativos para empresas. Diseño moderno, velocidad, SEO y enfoque en conversión.",
    alternates: {
        canonical: "/desarrollo-web",
    },
    openGraph: {
        type: "website",
        locale: "es_AR",
        url: "/desarrollo-web",
        siteName: "Progress in Line",
        title: "Desarrollo web profesional | Progress in Line",
        description:
            "Planes de desarrollo web, landing pages y sitios corporativos para empresas. Diseño moderno, velocidad, SEO y enfoque en conversión.",
        images: [
            {
                url: "/background/hero_background.jpg",
                alt: "Desarrollo web profesional - Progress in Line",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Desarrollo web profesional | Progress in Line",
        description:
            "Planes de desarrollo web, landing pages y sitios corporativos para empresas. Diseño moderno, velocidad, SEO y enfoque en conversión.",
        images: ["/background/hero_background.jpg"],
    },
};

const webTypes = [
    "Landing pages para campañas y captación de oportunidades.",
    "Sitios institucionales para presentar servicios, trayectoria y canales comerciales.",
    "Webs corporativas con estructura clara, performance y foco en conversión.",
];

const benefits = [
    {
        icon: Gauge,
        title: "Velocidad y performance",
        text: "Estructuras livianas, responsive y preparadas para una experiencia fluida en mobile y desktop.",
    },
    {
        icon: Search,
        title: "Base SEO",
        text: "Jerarquía de contenido, metadata y buenas prácticas para que tu sitio pueda posicionarse mejor.",
    },
    {
        icon: ShieldCheck,
        title: "Imagen profesional",
        text: "Diseño consistente con tu marca, mensajes claros y una presentación institucional sólida.",
    },
    {
        icon: Sparkles,
        title: "Foco en conversión",
        text: "Secciones, llamados a la acción y recorridos pensados para transformar visitas en consultas.",
    },
];

const processSteps = [
    "Relevamos objetivos, público y contenido clave.",
    "Definimos estructura, secciones y propuesta visual.",
    "Desarrollamos la web responsive y optimizada.",
    "Publicamos, medimos y dejamos una base lista para evolucionar.",
];

const faqs = [
    {
        question: "¿Qué incluye cada plan?",
        answer: "Cada plan incluye diseño responsive, desarrollo web y una cantidad de secciones acorde al alcance elegido. Los adicionales permiten sumar dominio, hosting o SSL.",
    },
    {
        question: "¿Puedo pedir una web fuera de los planes?",
        answer: "Sí. Si tu empresa necesita integraciones, funcionalidades especiales o una estructura distinta, podemos armar una propuesta a medida.",
    },
    {
        question: "¿Los precios son finales?",
        answer: "Los valores son una referencia en USD. La cotización final se confirma según alcance, contenidos, adicionales y condiciones vigentes al momento de contratar.",
    },
];

export default function DesarrolloWebPage() {
    return (
        <main className="relative bg-black text-white">
            <Navbar />

            <section className="relative min-h-[78vh] flex items-center overflow-hidden pt-32 md:pt-36 pb-20 bg-black">
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)`,
                        backgroundSize: "44px 44px",
                    }}
                />
                <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#6B9FF0]/10 rounded-full blur-[128px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-5 block">
                        Desarrollo web
                    </span>
                    <h1 className="max-w-5xl text-[42px] md:text-[72px] lg:text-[86px] font-light tracking-[-0.04em] text-white/90 leading-[1.05] mb-8">
                        Desarrollo web profesional <br />
                        <span className="text-[#6B9FF0] font-normal">para empresas</span>
                    </h1>
                    <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                        Diseñamos landing pages, sitios institucionales y webs corporativas con foco en imagen profesional, velocidad, SEO y conversión.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/5491138923268"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all active:scale-95"
                        >
                            Consultar por mi web
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <Link
                            href="#desarrollo-web"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-lg font-medium text-white/90 hover:bg-white/5 transition-all"
                        >
                            Ver planes de desarrollo web
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                            Qué desarrollamos
                        </span>
                        <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                            Webs claras, rápidas <br />
                            <span className="text-[#6B9FF0] font-normal">y orientadas a negocio</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Construimos sitios pensados para presentar tu empresa con solidez, ordenar tu oferta y generar un camino simple hacia el contacto comercial.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {webTypes.map((item) => (
                            <div key={item} className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                                <Check className="w-5 h-5 text-[#6B9FF0] mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <p className="text-gray-300 font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WebConfigurator />

            <section className="py-20 md:py-24 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-10 md:mb-14 max-w-3xl">
                        <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                            Beneficios
                        </span>
                        <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight">
                            Una web preparada <br />
                            <span className="text-[#6B9FF0] font-normal">para crecer con tu empresa</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="group relative bg-black/60 border border-white/[0.08] rounded-2xl p-6 md:p-7 hover:border-[#6B9FF0]/40 transition-all">
                                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-7">
                                    <benefit.icon className="w-5 h-5 text-[#6B9FF0]" aria-hidden="true" />
                                </div>
                                <h3 className="text-white text-xl font-normal mb-3 tracking-tight">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                            Proceso
                        </span>
                        <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight">
                            Un recorrido simple <br />
                            <span className="text-[#6B9FF0] font-normal">para publicar mejor</span>
                        </h2>
                    </div>
                    <div className="space-y-5">
                        {processSteps.map((step, index) => (
                            <div key={step} className="flex gap-5 border-b border-white/10 pb-5 last:border-0">
                                <div className="w-10 h-10 rounded-full bg-[#6B9FF0]/10 border border-[#6B9FF0]/20 flex items-center justify-center text-[#6B9FF0] text-sm font-semibold flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-black border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-[#6B9FF0] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">
                            Preguntas frecuentes
                        </span>
                        <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight">
                            Antes de contratar
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-6">
                                <h3 className="text-white text-lg font-normal mb-3">{faq.question}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <Clock className="w-10 h-10 text-[#6B9FF0] mx-auto mb-6" aria-hidden="true" />
                    <h2 className="text-[34px] md:text-[56px] font-light text-white leading-tight tracking-tight mb-6">
                        ¿Listo para mejorar tu presencia digital?
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed mb-10">
                        Contanos qué necesitás y te orientamos sobre el plan o alcance más conveniente para tu empresa.
                    </p>
                    <a
                        href="https://wa.me/5491138923268"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all active:scale-95"
                    >
                        Hablar con un asesor
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
