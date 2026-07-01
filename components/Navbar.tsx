"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#productos", label: "Productos" },
    { href: "/desarrollo-web", label: "Desarrollo Web" },
    { href: "/#nuestrometodo", label: "Nuestro método" },
    { href: "/#exito", label: "Casos de éxito" },
    { href: "/#porque-elegirnos", label: "Por qué elegirnos" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
        >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo Progress in Line */}
            <Link href="/#inicio" className="flex items-center gap-2 group">
            <img 
                src="/logos/logo/logo_color.png" 
                alt="Progress in Line" 
                className="h-24 w-auto"
            />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                {link.label}
                </Link>
            ))}
            <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
            <Link href="/#contacto" className="border border-white/40 px-5 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all">
                Hablar con un asesor
            </Link>
            </div>

            {/* Mobile Button */}
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
            {isMobileMenuOpen && (
            <div className="lg:hidden bg-black absolute top-full left-0 w-full border-b border-white/10 p-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
                </Link>
            ))}
            <Link href="/#contacto" className="w-full py-3 bg-white text-black font-bold rounded-md text-center" onClick={() => setIsMobileMenuOpen(false)}>Hablar con un asesor</Link>
            </div>
        )}
        </nav>
    );
}
