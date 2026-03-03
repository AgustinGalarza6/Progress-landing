import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google"; //
import "./globals.css";

// Configuración de Host Grotesk para un look fino y moderno
const hostGrotesk = Host_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Pesos calibrados para el diseño
  variable: "--font-host",
});

export const metadata: Metadata = {
  title: "Progress in line | Ciberseguridad",
  description: "Protegemos tu futuro digital con soluciones innovadoras y confiables.",
  icons: {
    icon: "/background/logo/logo-final-png-p10v44ze70il2vzkwoprdvo9o3gj73hq7lhjb3roa8.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${hostGrotesk.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}