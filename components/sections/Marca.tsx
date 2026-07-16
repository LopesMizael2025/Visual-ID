"use client";

import { Reveal, WordReveal } from "@/components/ui/Reveal";

const LOGO_POSITIVA =
  "https://praiaclube.org.br/wp-content/uploads/2025/02/Praia-clube-Logo-500px.png";
const LOGO_NEGATIVA =
  "https://praiaclube.org.br/wp-content/uploads/2023/01/Patrocinadores-Dentil-Praia-Clube_0004_praia-clube.png";

const aplicacoes = [
  {
    nome: "Positiva",
    uso: "Fundos claros",
    logo: LOGO_POSITIVA,
    bg: "bg-white",
    border: "border border-praia-ink/8",
    label: "text-praia-gray",
  },
  {
    nome: "Oficial",
    uso: "Fundo preto",
    logo: LOGO_NEGATIVA,
    bg: "bg-praia-black",
    border: "",
    label: "text-white/50",
  },
  {
    nome: "Fundo amarelo",
    uso: "Versão em contorno",
    logo: "/logo-fundo-amarelo.png",
    bg: "bg-[#FFD500]",
    border: "",
    label: "text-praia-ink/60",
  },
];

const paleta = [
  { hex: "#F4D800", nome: "Amarelo Praia", uso: "Ícones, títulos e fundos", texto: "text-praia-ink" },
  { hex: "#130F14", nome: "Preto", uso: "Títulos e grandes áreas", texto: "text-white" },
  { hex: "#1D1D1B", nome: "Grafite", uso: "Texto corrido", texto: "text-white" },
  { hex: "#5B5B5F", nome: "Cinza", uso: "Texto em fundo branco", texto: "text-white" },
  { hex: "#008BD2", nome: "Azul", uso: "Destaques do layout", texto: "text-white" },
  { hex: "#FFFFFF", nome: "Branco", uso: "Títulos sobre fotos", texto: "text-praia-ink" },
];

const proibicoes = [
  "Não distorcer a logo",
  "Não alterar as cores",
  "Não rotacionar",
  "Não usar contorno em fundo branco",
  "Jamais usar a logo incompleta",
];

export default function Marca() {
  return (
    <section className="bg-praia-paper py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            A Marca — Versões e aplicações
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Uma marca. Regras claras." />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="Aplicações consistentes." />
          </span>
        </h2>
        <Reveal delay={1}>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-praia-gray">
            O Manual de Identidade Visual define como a marca vive em cada
            superfície — do post ao uniforme. Com ou sem IA, é ele quem manda.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {aplicacoes.map((ap, i) => (
            <Reveal key={ap.nome} delay={i}>
              <figure
                className={`flex h-64 flex-col items-center justify-center rounded-3xl ${ap.bg} ${ap.border} shadow-[0_16px_50px_-28px_rgba(0,0,0,0.35)]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ap.logo}
                  alt={`Logo Praia Clube — versão ${ap.nome}`}
                  className="h-32 w-auto object-contain md:h-36"
                />
                <figcaption
                  className={`mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] ${ap.label}`}
                >
                  {ap.nome} · {ap.uso}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {paleta.map((cor) => (
              <div
                key={cor.hex}
                className="overflow-hidden rounded-2xl border border-praia-ink/8 bg-white shadow-[0_10px_40px_-24px_rgba(0,0,0,0.25)]"
              >
                <div
                  className={`flex h-24 items-end p-3 text-xs font-semibold ${cor.texto}`}
                  style={{ backgroundColor: cor.hex }}
                >
                  {cor.hex}
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold tracking-tight">{cor.nome}</p>
                  <p className="mt-1 text-xs font-light leading-snug text-praia-gray">
                    {cor.uso}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-16">
          <div className="rounded-3xl bg-praia-black p-10 text-white md:p-14">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              O que <span className="text-praia-yellow">nunca</span> fazemos
            </h3>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {proibicoes.map((regra) => (
                <li
                  key={regra}
                  className="flex items-center gap-3 text-base font-light text-white/70"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-praia-yellow">
                    ✕
                  </span>
                  {regra}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm font-light text-white/40">
              Área de proteção, dimensões mínimas e demais regras: Manual de
              Identidade Visual do Praia Clube (versão atualizada 2025).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
