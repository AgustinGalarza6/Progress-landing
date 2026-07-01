import { Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
    servicios: [
        { label: "Sistemas a medida", href: "/#servicios" },
        { label: "Integración de ecosistemas", href: "/#servicios" },
        { label: "Automatización de procesos", href: "/#servicios" },
        { label: "Desarrollo web", href: "/desarrollo-web" },
    ],
    productos: [
        { label: "PIL Access", href: "/#productos" },
        { label: "PIL Soft", href: "/#productos" },
    ],
    empresa: [
        { label: "Por qué elegirnos", href: "/#porque-elegirnos" },
        { label: "Nuestro método", href: "/#nuestrometodo" },
        { label: "Casos de éxito", href: "/#exito" },
        { label: "Contacto", href: "/#contacto" },
    ],
    legal: [
        { label: "Política de Privacidad", href: "#" },
        { label: "Términos de Servicio", href: "#" },
    ],
};

    const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    ];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
                <Link href="/" className="flex items-center mb-6">
                <img 
                    src="/logos/logo/logo_color.png" 
                    alt="Progress in Line" 
                    className="h-24 w-auto"
                />
                </Link>
                <p className="text-gray-400 mb-6 max-w-sm">
                Transformamos ideas en soluciones digitales de alto impacto utilizando tecnologías modernas y automatización.
                </p>
                <div className="flex gap-4">
                {[
                    { icon: Phone, href: 'https://wa.me/5491138923268', label: 'WhatsApp' },
                    ...socialLinks
                ].map((social) => (
                    <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <social.icon className="w-5 h-5" />
                    </a>
                ))}
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="text-white font-semibold mb-4">Servicios</h4>
                <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Productos</h4>
                <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
                <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
                © 2026 Progress in Line. Todos los derechos reservados.
            </p>
            </div>
        </div>
        </footer>
    );
}
