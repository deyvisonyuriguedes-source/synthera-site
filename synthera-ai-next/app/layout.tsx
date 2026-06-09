import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.synthera.ai"),
  title: "Synthera AI — Menos faltas, agenda cheia para clínicas | IA no WhatsApp",
  description:
    "A Synthera AI instala um sistema inteligente que confirma consultas, lembra pacientes e recupera inativos direto no WhatsApp da sua clínica. Menos faltas, mais consultas, no automático.",
  keywords: ["IA para clínicas", "confirmação de consulta WhatsApp", "reduzir faltas clínica", "agendamento automático", "automação para clínicas"],
  authors: [{ name: "Synthera AI" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.synthera.ai/",
    title: "Synthera AI — Menos faltas, agenda cheia para clínicas",
    description: "Sistema inteligente que confirma, lembra e recupera pacientes direto no WhatsApp. Você só vê a agenda encher.",
    images: ["/og-image.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Synthera AI",
  description:
    "Arquitetura inteligente que transforma a operação de clínicas em crescimento, automatizando confirmação, lembretes e reativação de pacientes via WhatsApp.",
  slogan: "Transformando operações em crescimento.",
  areaServed: "BR",
  url: "https://www.synthera.ai/",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
