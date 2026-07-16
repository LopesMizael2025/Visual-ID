"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

const pilares = [
  {
    titulo: "Cor",
    descricao:
      "Amarelo #F4D800 e preto identificam o Praia antes de qualquer palavra — com o azul de apoio para destaques.",
    demo: (
      <div className="flex h-24 items-center justify-center gap-3">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="h-14 w-14 rounded-full bg-praia-yellow"
        />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "backOut" }}
          className="h-14 w-14 rounded-full bg-praia-black"
        />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
          className="h-9 w-9 rounded-full bg-praia-blue"
        />
      </div>
    ),
  },
  {
    titulo: "Tipografia",
    descricao:
      "Uma família tipográfica consistente dá voz única a todas as mensagens.",
    demo: (
      <div className="flex h-24 items-center justify-center">
        <motion.span
          whileInView={{ opacity: [0, 1], letterSpacing: ["0.3em", "-0.02em"] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-semibold tracking-tightest"
        >
          Praia
        </motion.span>
      </div>
    ),
  },
  {
    titulo: "Forma",
    descricao:
      "Símbolo, proporções e grafismos criam memória visual que atravessa gerações.",
    demo: (
      <div className="flex h-24 items-center justify-center">
        <motion.div
          whileInView={{ rotate: [45, 0], borderRadius: ["10%", "50%"] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-14 w-14 border-4 border-praia-yellow"
        />
      </div>
    ),
  },
  {
    titulo: "Tom de voz",
    descricao:
      "Próximo, orgulhoso e acolhedor — o jeito Praia de falar com o sócio.",
    demo: (
      <div className="flex h-24 items-center justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            whileInView={{ scaleY: [0.2, 1, 0.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.08 }}
            className="h-12 w-2 origin-bottom rounded-full bg-praia-ink/70"
          />
        ))}
      </div>
    ),
  },
];

export default function Reconhecimento() {
  return (
    <section className="bg-praia-paper py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Ato III — Como reconhecemos uma marca
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Você reconhece o Praia" />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="antes de ler o nome." />
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, i) => (
            <Reveal key={pilar.titulo} delay={i}>
              <div className="h-full rounded-2xl border border-praia-ink/8 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
                {pilar.demo}
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-praia-ink/55">
                  {pilar.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
