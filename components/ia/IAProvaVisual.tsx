"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";

/**
 * Ato V · Prova visual — campanha real do Manual de Marca (pág. 54):
 * a mesma peça da Masterclass de Zumba, sem direção × com o Manual.
 */

const criterios = [
  { n: "01", t: "Foto ligada ao tema" },
  { n: "02", t: "Contraste para leitura" },
  { n: "03", t: "Grafismo aplicado com equilíbrio" },
  { n: "04", t: "Área de reserva preservada" },
];

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
            A mesma campanha, dois tratamentos. As peças abaixo são do Manual
            de Marca — Masterclass de Zumba.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Arraste para comparar — mouse, toque ou setas do teclado
          </p>
          <BeforeAfter
            aspectClass="aspect-[3/1]"
            before={
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/prova-visual/zumba-sem-direcao.webp"
                alt="Peça da campanha com fotografia de tratamento errado: dessaturada e fora do padrão do manual"
                className="h-full w-full object-cover"
              />
            }
            after={
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/prova-visual/zumba-com-manual.webp"
                alt="Peça correta da campanha: fotografia com cores naturais, headline com contraste, grafismo equilibrado e área de assinatura preservada"
                className="h-full w-full object-cover"
              />
            }
            beforeLabel="Sem direção"
            afterLabel="Com o Manual"
          />
          <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
            Fonte: Manual de Marca Praia Clube · pág. 54
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
