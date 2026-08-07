import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Nav } from "@/components/aba/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://archanza.com.br"),
  title: {
    default: "Archanza — Arquitetura & Interiores",
    template: "%s — Archanza",
  },
  description:
    "Projetos de arquitetura e interiores com design autoral e funcionalidade. Transformando espaços em experiências únicas em Curitiba/PR.",
  keywords: [
    "arquitetura",
    "interiores",
    "design de interiores",
    "projeto residencial",
    "projeto comercial",
    "arquitetura Curitiba",
    "Archanza",
  ],
  openGraph: {
    title: "Archanza — Arquitetura & Interiores",
    description:
      "Projetos de arquitetura e interiores com design autoral e funcionalidade.",
    type: "website",
    locale: "pt_BR",
    siteName: "Archanza",
    images: [{ url: "/hero-architecture.jpg", width: 1200, height: 630, alt: "Archanza Arquitetura & Interiores" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
