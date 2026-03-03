"use client";

import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
    variant?: "primary" | "outline" | "gradient";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    }

    export default function Button({ 
    variant = "primary", 
    size = "md", 
    isLoading, 
    children, 
    className = "",
    onClick 
    }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 disabled:opacity-50";
    
    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        outline: "border-2 border-white/20 text-white hover:bg-white/10",
        gradient: "bg-gradient-to-r from-[#6B9FF0] to-[#4A7EDF] text-white hover:shadow-lg hover:shadow-[#6B9FF0]/25",
    };
    
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button 
        onClick={onClick}
        disabled={isLoading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
        {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
        {children}
        </button>
    );
}