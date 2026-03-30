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
  title: "Progress in line",
  description: "Protegemos tu futuro digital con soluciones innovadoras y confiables.",
  icons: {
    icon: [
      { url: "/logos/logo/logo_negro.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "128x128", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "256x256", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo blanco.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "128x128", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "256x256", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: dark)" }
    ]
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

        {/* Script cliente: detecta prefers-color-scheme y actualiza favicon dinámicamente */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var lightIcon = '/logos/logo/logo_negro.png';
              var darkIcon = '/logos/logo/logo_blanco.png';
              function setIcon(isDark){
                var href = isDark ? darkIcon : lightIcon;
                var link = document.querySelector('link[rel="icon"]');
                if(!link){
                  link = document.createElement('link');
                  link.rel = 'icon';
                  link.type = 'image/png';
                  link.sizes = '64x64';
                  document.head.appendChild(link);
                }
                if(link.href.indexOf(href) === -1) link.href = href;
                var metaTheme = document.querySelector('meta[name="theme-color"]');
                if(!metaTheme){ metaTheme = document.createElement('meta'); metaTheme.name = 'theme-color'; document.head.appendChild(metaTheme); }
                metaTheme.content = isDark ? '#000000' : '#ffffff';
              }
              var m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
              setIcon(m ? m.matches : false);
              if(m && m.addEventListener) m.addEventListener('change', function(e){ setIcon(e.matches); });
            }catch(e){ console.error(e); }
          })();
        `}} />
      </body>
    </html>
  );
}