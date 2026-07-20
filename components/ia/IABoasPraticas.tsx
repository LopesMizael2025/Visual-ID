"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/** Dez princípios para usar IA sem perder a identidade. */

const praticas = [
  { t: "Nunca comece pelo prompt.", d: "Sempre comece pelo briefing." },
  { t: "Manual antes da IA.", d: "Releia a identidade antes de criar." },
  { t: "Use campanhas anteriores.", d: "Elas são a memória visual da marca." },
  { t: "Envie imagens reais.", d: "Sempre que possível, mostre o Praia à IA." },
  { t: "Padronize o vocabulário.", d: "As mesmas palavras, os mesmos nomes." },
  { t: "Use o prompt base.", d: "O ponto de partida institucional." },
  { t: "Contexto antes de comandos.", d: "Identidade primeiro, pedido depois." },
  { t: "Evite estilos genéricos.", d: "O que serve para todos não serve para nós." },
  { t: "Revise com o checklist.", d: "Toda peça passa pelo crivo institucional." },
  { t: "A IA aprende o que ensinamos.", d: "Exatamente. Nada mais, nada menos." },
];

export default function IABoasPraticas() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Boas práticas
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Dez princípios." />
          <br />
          <span className="text-white/35">
            <WordReveal text="Uma identidade." />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {praticas.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-7 md:p-8"
            >
              <span className="text-sm font-semibold text-praia-yellow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                {p.t}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/55 md:text-base">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
