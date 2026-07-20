"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

const artesInconsistentes = [
  { fonte: "font-serif italic", cor: "bg-rose-400", rotulo: "Fonte aleatória" },
  { fonte: "font-mono", cor: "bg-sky-500", rotulo: "Cor fora da paleta" },
  { fonte: "font-sans font-black uppercase", cor: "bg-emerald-500", rotulo: "Tom exagerado" },
  { fonte: "font-serif", cor: "bg-violet-500", rotulo: "Logo distorcido" },
];

export default function ProblemaInvisivel() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Ato II — O Problema Invisível
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Nenhuma arte destrói uma marca sozinha." />
          <br />
          <span className="text-white/35">
            <WordReveal text="Mil artes inconsistentes, sim." />
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artesInconsistentes.map((arte, i) => (
            <motion.div
              key={arte.rotulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
            >
              <div className={`mb-5 h-32 rounded-xl ${arte.cor} opacity-80`} />
              <p className={`text-lg ${arte.fonte}`}>praia clube?</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                {arte.rotulo}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={2} className="mt-20">
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
            Quando cada peça fala uma língua diferente, o público deixa de
            reconhecer quem fala. A inconsistência não grita — ela corrói em
            silêncio, post após post, arte após arte.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
