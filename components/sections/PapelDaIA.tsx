"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/**
 * Ato IV — O papel da IA.
 * Estratégia e responsabilidade: quem decide é a direção humana.
 * Sem posts, sem mockups, sem comparador — isso pertence ao Ato V.
 */

const blocos = [
  {
    n: "01",
    nome: "Direção humana",
    frase: "Briefing, tema, público, fotografia e mensagem.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c.8-3.2 3.6-5 7-5s6.2 1.8 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    nome: "IA como apoio",
    frase: "Variações, exploração e agilidade dentro dos limites definidos.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    nome: "Curadoria final",
    frase: "Manual, contraste, composição, marca e aprovação.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function PapelDaIA() {
  return (
    <section className="relative overflow-hidden bg-praia-black py-32 text-white md:py-44">
      {/* Fragmentos discretos do grafismo institucional */}
      <div className="pointer-events-none absolute -left-6 top-24 opacity-[0.08]" aria-hidden>
        <div className="h-28 w-28 rounded-tr-full bg-praia-yellow" />
      </div>
      <div className="pointer-events-none absolute -right-4 bottom-24 opacity-[0.08]" aria-hidden>
        <div className="h-0 w-0 border-b-[96px] border-l-[96px] border-b-praia-yellow border-l-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Ato IV — O papel da IA
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="A ferramenta não decide." />
        </h2>
        <Reveal delay={1}>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-white/60 md:text-2xl">
            Pessoas definem a marca.
            <br />
            <span className="text-praia-yellow">A IA acelera a execução.</span>
          </p>
        </Reveal>

        {/* Fluxo institucional: humano → IA → curadoria */}
        <div className="mx-auto mt-20 flex max-w-xl flex-col">
          {blocos.map((bloco, i) => (
            <div key={bloco.n} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7"
              >
                <span className="mt-0.5 text-sm font-semibold text-praia-yellow">
                  {bloco.n}
                </span>
                <span className="text-white/70">{bloco.icone}</span>
                <span>
                  <span className="block text-lg font-semibold tracking-tight md:text-xl">
                    {bloco.nome}
                  </span>
                  <span className="mt-1 block text-sm font-light leading-relaxed text-white/55 md:text-base">
                    {bloco.frase}
                  </span>
                </span>
              </motion.div>
              {i < blocos.length - 1 ? (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mx-auto h-8 w-px origin-top bg-praia-yellow/40"
                  aria-hidden
                />
              ) : null}
            </div>
          ))}
        </div>

        <Reveal delay={2} className="mt-16">
          <p className="mx-auto max-w-xl text-balance text-center text-lg font-light leading-relaxed text-white/60 md:text-xl">
            A IA não é diretora de arte.
            <br />
            Ela entra depois da direção criativa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
