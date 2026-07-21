import type { Metadata } from "next";
import { Be_Vietnam_Pro, Exo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A IA não cria marcas. Pessoas criam. — Praia Clube",
  description:
    "Uma experiência imersiva sobre o uso estratégico da Inteligência Artificial e a preservação da identidade visual do Praia Clube.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${beVietnam.variable} ${exo.variable}`}>
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
