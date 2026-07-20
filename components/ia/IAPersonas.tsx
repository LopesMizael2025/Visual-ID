"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/** Personas visuais: referências reutilizadas em toda criação com IA. */

const personas = [
  { nome: "Família Praia", desc: "Convivência, gerações, fim de semana no clube." },
  { nome: "Atleta Praia", desc: "Alto rendimento, disciplina, orgulho amarelo e preto." },
  { nome: "Eventos", desc: "Celebrações, shows e encontros institucionais." },
  { nome: "Lazer", desc: "Piscinas, sol, descanso e bem-estar." },
  { nome: "Esporte", desc: "Escolinhas, quadras e competições internas." },
  { nome: "Cultura", desc: "Arte, música e programação para o sócio." },
  { nome: "Infantil", desc: "Crianças em segurança, alegria e descoberta." },
];

export default function IAPersonas() {
  return (
    <section className="bg-praia-paper pb-32 text-praia-ink md:pb-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Personas visuais
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="A consistência começa" />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="pelas referências." />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-praia-ink/8 bg-white p-7 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.2)]"
            >
              <div className="h-1.5 w-10 rounded-full bg-praia-yellow" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.nome}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-praia-ink/55">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={2} className="mt-14">
          <p className="mx-auto max-w-2xl text-center text-lg font-light text-praia-ink/55 md:text-xl">
            Essas referências devem acompanhar toda criação de IA — em cada
            briefing, em cada prompt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
