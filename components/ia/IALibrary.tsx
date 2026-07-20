"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/** A biblioteca institucional de IA: tudo que a IA precisa conhecer, num só lugar. */

const pastas = [
  "Manual",
  "Prompt Base",
  "Logos",
  "Paleta",
  "Fotografia",
  "Moodboards",
  "Campanhas",
  "Templates",
  "Personas",
  "Eventos",
  "Prompts aprovados",
  "Prompts reprovados",
];

export default function IALibrary() {
  return (
    <section className="bg-praia-paper py-32 text-praia-ink md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Biblioteca de IA
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Praia AI." />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="A memória da marca, organizada." />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {pastas.map((pasta, i) => (
            <motion.div
              key={pasta}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-praia-ink/8 bg-white p-6 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.2)]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
                <path
                  d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                  fill="#F4D800"
                  stroke="#130F14"
                  strokeWidth="1.2"
                />
              </svg>
              <p className="mt-4 text-sm font-semibold tracking-tight md:text-base">
                {pasta}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={2} className="mt-14">
          <p className="mx-auto max-w-2xl text-center text-lg font-light text-praia-ink/55 md:text-xl">
            Antes de pedir qualquer imagem, a IA visita a biblioteca. É ali que
            ela aprende quem somos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
