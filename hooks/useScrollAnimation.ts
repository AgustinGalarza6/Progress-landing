"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollAnimationOptions = {}
    ): [RefObject<T>, boolean] {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
                observer.unobserve(element);
            }
            } else if (!triggerOnce) {
            setIsVisible(false);
            }
        },
        {
            threshold,
            rootMargin,
        }
        );

        observer.observe(element);

        return () => {
        observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref as RefObject<T>, isVisible];
    }

    // Hook para animación de progreso en scroll
    export function useScrollProgress(): number {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = windowHeight > 0 ? totalScroll / windowHeight : 0;
        setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return progress;
    }

    // Hook para parallax effect
    export function useParallax(speed: number = 0.5): [RefObject<HTMLDivElement>, number] {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const relativeScroll = scrolled - elementTop + window.innerHeight;
        setOffset(relativeScroll * speed);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return [ref, offset];
    }

    // Hook para detectar dirección del scroll
    export function useScrollDirection(): "up" | "down" | null {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setScrollDirection("down");
        } else if (currentScrollY < lastScrollY) {
            setScrollDirection("up");
        }
        
        setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return scrollDirection;
}