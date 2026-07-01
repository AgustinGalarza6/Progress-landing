import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = new URL("https://progressinline.com");

const title = "Progress in Line | Software a medida, integración y automatización";
const description =
  "Desarrollamos software a medida, integramos sistemas y automatizamos procesos para empresas que buscan escalar su operación con soluciones digitales robustas.";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-host",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | Progress in Line",
  },
  description,
  applicationName: "Progress in Line",
  keywords: [
    "software a medida",
    "integración de sistemas",
    "automatización de procesos",
    "desarrollo web",
    "Progress in Line",
  ],
  authors: [{ name: "Progress in Line" }],
  creator: "Progress in Line",
  publisher: "Progress in Line",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Progress in Line",
    title,
    description,
    images: [
      {
        url: "/background/hero_background.jpg",
        alt: "Progress in Line - soluciones digitales para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/background/hero_background.jpg"],
  },
  icons: {
    icon: [
      { url: "/logos/logo/logo_negro.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "128x128", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "256x256", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo_negro.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logo/logo blanco.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "128x128", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "256x256", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/logo/logo blanco.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Progress in Line",
    url: "https://progressinline.com/",
    logo: "https://progressinline.com/logos/logo/logo_color.png",
    email: "Pil@progressinline.com",
    telephone: "+54 9 11 3892-3268",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Regimientos de Patricios 178",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54 9 11 3892-3268",
      contactType: "sales",
      availableLanguage: "es",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Progress in Line",
    url: "https://progressinline.com/",
    inLanguage: "es-AR",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${hostGrotesk.variable} font-sans bg-black text-white antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var lightIcon = '/logos/logo/logo_negro.png';
              var darkIcon = '/logos/logo/logo blanco.png';
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
