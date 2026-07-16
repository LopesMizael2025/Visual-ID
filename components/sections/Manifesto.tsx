"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const linhas = [
  "A IA não substitui estratégia.",
  "A IA não substitui direção de arte.",
  "A IA não substitui branding.",
  "A IA acelera aquilo que decidimos construir.",
  "Pessoas criam significado. Marcas vivem de significado.",
];

export default function Manifesto() {
  return (
    <section className="bg-praia-paper py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-16 text-center text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Ato V — Manifesto e compromisso
          </p>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {linhas.map((linha, i) => (
            <motion.p
              key={linha}
              initial={{ opacity: 0.12, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`text-balance text-center text-3xl font-semibold leading-tight tracking-tightest md:text-5xl ${
                i === linhas.length - 1 ? "text-praia-ink" : "text-praia-ink/80"
              }`}
            >
              {i === linhas.length - 1 ? (
                <>
                  Pessoas criam significado.{" "}
                  <span className="bg-praia-yellow px-2">
                    Marcas vivem de significado.
                  </span>
                </>
              ) : (
                linha
              )}
            </motion.p>
          ))}
        </div>

        <Reveal delay={2} className="mt-24">
          <div className="rounded-3xl border border-praia-ink/8 bg-white p-10 text-center shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] md:p-14">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Nosso compromisso
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-praia-ink/60 md:text-lg">
              Toda criação — com ou sem IA — segue o briefing, a direção de
              arte e o manual de identidade visual do Praia Clube. Missão,
              visão, valores e posicionamento institucional não são opcionais:
              são o ponto de partida de cada peça.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
