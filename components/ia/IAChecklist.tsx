"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

/** O crivo institucional: cada pergunta ocupa uma tela, antes do "Aprovado.". */

const perguntas = [
  "Parece o Praia Clube?",
  "Um associado reconheceria essa peça?",
  "A fotografia parece institucional?",
  "A iluminação segue nossa identidade?",
  "As cores seguem a paleta oficial?",
  "A composição lembra campanhas anteriores?",
  "O tom emocional transmite pertencimento?",
  "Essa peça poderia entrar no nosso Instagram hoje?",
];

export default function IAChecklist() {
  return (
    <section className="bg-praia-paper text-praia-ink">
      <div className="mx-auto max-w-4xl px-6 pt-32 text-center md:pt-44">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Checklist institucional
          </p>
        </Reveal>
      </div>

      {perguntas.map((pergunta) => (
        <motion.div
          key={pergunta}
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-38% 0px -38% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-38% 0px -38% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-praia-yellow text-xl font-semibold text-praia-ink"
            aria-hidden
          >
            ✓
          </motion.span>
          <h3 className="mt-8 text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
            {pergunta}
          </h3>
        </motion.div>
      ))}

      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center px-6 pb-24 text-center">
        <Reveal>
          <p className="text-6xl font-semibold tracking-tightest md:text-8xl">
            <span className="bg-praia-yellow px-4">Aprovado.</span>
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-md text-lg font-light text-praia-ink/55">
            Oito sins. Só então a peça carrega o nome do Praia Clube.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
