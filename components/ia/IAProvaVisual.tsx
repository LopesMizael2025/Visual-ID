"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";

/**
 * Ato V · Prova visual — a mesma campanha de acessibilidade, dois caminhos:
 * estética genérica de IA × identidade do feed oficial do Praia Clube.
 * Peças recriadas como demonstração de composição.
 */

const criterios = [
  { n: "01", t: "Grafismo do manual, não efeito genérico" },
  { n: "02", t: "Contraste para leitura" },
  { n: "03", t: "Ícones e hierarquia organizados" },
  { n: "04", t: "Assinatura com área de reserva" },
];

function Icones({ escuro = false }: { escuro?: boolean }) {
  const cor = escuro ? "#F4D800" : "#1D1D1B";
  const sw = 1.6;
  return (
    <div className={`flex items-center justify-center gap-3 md:gap-4 ${escuro ? "text-white" : "text-praia-ink"}`}>
      {/* cadeira de rodas */}
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7" aria-hidden>
        <circle cx="10" cy="17" r="4.5" stroke={cor} strokeWidth={sw} />
        <path d="M10 12.5V7.5h5l1.5 4h3" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="4.5" r="1.6" fill="currentColor" />
      </svg>
      <span className={escuro ? "h-6 w-px bg-white/25" : "h-6 w-px bg-praia-ink/20"} />
      {/* mente */}
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7" aria-hidden>
        <path d="M13 3.5c3.6 0 6.5 2.9 6.5 6.5 0 1.7-.6 3.2-1.7 4.4V20h-6v-2.5H9.5A5.5 5.5 0 0 1 13 3.5Z" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
        <path d="M12 8.5c.4-1 1.4-1.6 2.4-1.4 1.2.2 2 1.3 1.8 2.5-.1.9-.8 1.6-1.7 1.9" stroke={cor} strokeWidth={sw} strokeLinecap="round" />
      </svg>
      <span className={escuro ? "h-6 w-px bg-white/25" : "h-6 w-px bg-praia-ink/20"} />
      {/* infinito pontilhado */}
      <svg viewBox="0 0 32 20" fill="none" className="h-6 w-8 md:h-7 md:w-9" aria-hidden>
        <circle cx="9" cy="10" r="6" stroke="currentColor" strokeWidth={sw} strokeDasharray="1.5 2.4" />
        <circle cx="23" cy="10" r="6" stroke={cor} strokeWidth={sw} strokeDasharray="1.5 2.4" />
      </svg>
      <span className={escuro ? "h-6 w-px bg-white/25" : "h-6 w-px bg-praia-ink/20"} />
      {/* ouvido */}
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7" aria-hidden>
        <path d="M8 9a5 5 0 0 1 10 0c0 3-2.5 3.7-2.5 6a2.8 2.8 0 0 1-5.5.5" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" />
        <path d="M11.5 9a2.5 2.5 0 0 1 4 2" stroke={cor} strokeWidth={sw} strokeLinecap="round" />
        <path d="m19.5 4 1.4-1.4M21 8h2" stroke={cor} strokeWidth={sw} strokeLinecap="round" />
      </svg>
      <span className={escuro ? "h-6 w-px bg-white/25" : "h-6 w-px bg-praia-ink/20"} />
      {/* mão + coração */}
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7" aria-hidden>
        <path d="M5 13V6.5a1.5 1.5 0 0 1 3 0V11m0-5.5v-1a1.5 1.5 0 0 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4 14.2c-.5-.5-.5-1.4 0-1.9s1.3-.5 1.8 0c.5-.5 1.3-.5 1.8 0s.5 1.4 0 1.9L13.2 16l-1.8-1.8Z" fill={cor} />
      </svg>
    </div>
  );
}

function PecaSemDirecao() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0b0a08] p-5 text-center md:p-8">
      {/* Ondas douradas genéricas de IA */}
      <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full border-[3px] border-amber-300/70 blur-[1px]" style={{ borderRadius: "58% 42% 55% 45% / 60% 45% 55% 40%" }} aria-hidden />
      <div className="pointer-events-none absolute -left-24 -top-2 h-64 w-64 rounded-full border-2 border-amber-500/40" style={{ borderRadius: "58% 42% 55% 45% / 60% 45% 55% 40%" }} aria-hidden />
      <div className="pointer-events-none absolute -bottom-14 -right-10 h-52 w-72 rotate-12 bg-gradient-to-tr from-amber-400/30 via-amber-200/10 to-transparent blur-md" aria-hidden />
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 h-10 bg-[repeating-linear-gradient(100deg,transparent_0px,transparent_14px,rgba(251,191,36,0.25)_15px,transparent_17px)]" aria-hidden />

      <p className="font-serif text-2xl font-bold uppercase tracking-tight text-white md:text-4xl">
        Você precisa
      </p>
      <div className="my-1 flex items-center gap-2 md:my-2">
        <span className="h-px w-8 bg-amber-300/80 md:w-12" />
        <span className="font-serif text-lg font-bold uppercase text-white md:text-2xl">de</span>
        <span className="h-px w-8 bg-amber-300/80 md:w-12" />
      </div>
      <p className="bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text font-serif text-3xl font-black uppercase leading-none text-transparent md:text-5xl">
        Acessibilidade?
      </p>
      <p className="mt-2 text-[10px] font-light text-white/80 md:text-sm">
        (Pessoa com deficiência ou Neurodivergente)
      </p>
      <div className="mt-4 md:mt-6"><Icones escuro /></div>
      <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 md:mt-6 md:h-14 md:w-14">
        <span className="text-center text-[6px] font-bold uppercase leading-tight text-black md:text-[7px]">
          Praia<br />Clube
        </span>
      </div>
    </div>
  );
}

function PecaComIdentidade() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white p-5 text-center md:p-8">
      {/* Grafismo orgânico oficial: formas amarelas com traço fino */}
      <div className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 bg-praia-yellow" style={{ borderRadius: "0 0 78% 0" }} aria-hidden />
      <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 border border-praia-ink/50" style={{ borderRadius: "0 0 82% 0" }} aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -right-14 h-44 w-52 bg-praia-black" style={{ borderRadius: "85% 0 0 0" }} aria-hidden />
      <div className="pointer-events-none absolute bottom-3 left-0 right-24 h-8 bg-[repeating-linear-gradient(100deg,transparent_0,transparent_18px,rgba(29,29,27,0.12)_19px,transparent_21px)]" aria-hidden />

      <p className="text-2xl font-black uppercase tracking-tight text-praia-ink md:text-4xl" style={{ fontStretch: "condensed" }}>
        Você precisa
      </p>
      <div className="my-1 flex items-center gap-2 md:my-2">
        <span className="h-[2px] w-8 bg-praia-yellow md:w-12" />
        <span className="text-lg font-black uppercase text-praia-ink md:text-2xl">de</span>
        <span className="h-[2px] w-8 bg-praia-yellow md:w-12" />
      </div>
      <p className="text-3xl font-black uppercase leading-none tracking-tight text-praia-yellow md:text-5xl" style={{ fontStretch: "condensed" }}>
        Acessibilidade?
      </p>
      <p className="mt-2 text-[10px] font-light text-praia-ink/80 md:text-sm">
        (Pessoa com deficiência ou Neurodivergente)
      </p>
      <div className="mt-4 md:mt-6"><Icones /></div>

      {/* Assinatura com área de reserva */}
      <div className="mt-4 flex items-center gap-2.5 md:mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://praiaclube.org.br/wp-content/uploads/2025/02/Praia-clube-Logo-500px.png"
          alt=""
          className="h-10 w-10 object-contain md:h-12 md:w-12"
        />
        <span className="text-left">
          <span className="block text-sm font-black uppercase leading-none tracking-tight text-praia-ink md:text-lg">
            Praia Dança
          </span>
          <span className="mt-0.5 block text-[8px] font-semibold uppercase tracking-[0.3em] text-praia-ink/60 md:text-[10px]">
            Praia Clube
          </span>
        </span>
      </div>
    </div>
  );
}

export default function IAProvaVisual() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Prova visual
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Bonita não basta." />
          <br />
          <span className="text-white/35">
            <WordReveal text="Precisa parecer Praia." />
          </span>
        </h2>
        <Reveal delay={1}>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55 md:text-xl">
            A mesma campanha de acessibilidade, dois caminhos: a estética
            genérica que a IA entrega sozinha × a identidade do nosso feed.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Arraste para comparar — mouse, toque ou setas do teclado
          </p>
          <div className="mx-auto max-w-md md:max-w-lg">
            <BeforeAfter
              aspectClass="aspect-[7/9]"
              before={<PecaSemDirecao />}
              after={<PecaComIdentidade />}
              beforeLabel="Sem direção"
              afterLabel="Com identidade"
            />
          </div>
          <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
            Demonstração de composição · referências: feed @praiaclubeoficial e Manual de Marca
          </p>
        </Reveal>

        {/* Critérios que separam as duas peças */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {criterios.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-praia-yellow py-1 pl-4"
            >
              <p className="text-xs font-semibold text-praia-yellow">{c.n}</p>
              <p className="mt-1 text-sm font-medium leading-snug text-white/80 md:text-base">
                {c.t}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={2} className="mt-16">
          <p className="mx-auto max-w-2xl text-balance text-center text-2xl font-semibold leading-snug tracking-tightest md:text-4xl">
            A IA pode criar a imagem.
            <br />
            <span className="text-white/45 text-lg font-light leading-relaxed md:text-2xl">
              O Manual decide se ela pode representar o Praia.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
