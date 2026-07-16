"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

const marcos = [
  {
    ano: "1935",
    titulo: "Uma praia de cascalho",
    texto:
      "Doze amigos que nadavam no rio Uberabinha fundam o Praia Clube em 10 de julho. O nome nasce da praia de cascalho onde tudo começou.",
  },
  {
    ano: "1935",
    titulo: "Amarelo e preto",
    texto:
      "Roman Balparda, sócio fundador, sugere as cores do clube. Nove décadas depois, elas continuam sendo reconhecidas à distância.",
  },
  {
    ano: "Décadas",
    titulo: "Patrimônio construído",
    texto:
      "Geração após geração, o clube se torna referência em esporte, lazer e convivência — um dos maiores clubes do Brasil.",
  },
  {
    ano: "Hoje",
    titulo: "Esporte de elite",
    texto:
      "Equipes profissionais levam o nome do Praia Clube a pódios nacionais e internacionais, carregando a marca em cada quadra.",
  },
  {
    ano: "2025",
    titulo: "90 anos",
    texto:
      "Conexão. Tradição. Inovação. Um patrimônio de Uberlândia que cada peça de comunicação tem a responsabilidade de preservar.",
  },
];

export default function Patrimonio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  return (
    <section className="bg-praia-paper text-praia-ink">
      <div className="mx-auto max-w-4xl px-6 pb-10 pt-32 text-center md:pt-44">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            Ato I — O Patrimônio
          </p>
        </Reveal>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Tecnologia muda rapidamente." />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="Identidade é construída lentamente." />
          </span>
        </h2>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-praia-ink/60">
            O Praia Clube levou décadas para consolidar sua marca. Cada peça
            criada hoje reforça — ou enfraquece — esse patrimônio.
          </p>
        </Reveal>
      </div>

      {/* Timeline horizontal com scroll cinematográfico */}
      <div ref={trackRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-[8vw]">
            {marcos.map((marco) => (
              <article
                key={marco.titulo}
                className="glass-light w-[78vw] shrink-0 rounded-3xl p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] md:w-[38vw] md:p-14"
              >
                <span className="text-6xl font-semibold tracking-tightest text-praia-yellow md:text-8xl">
                  {marco.ano}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                  {marco.titulo}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-praia-ink/60 md:text-lg">
                  {marco.texto}
                </p>
              </article>
            ))}
          </motion.div>
          <div className="mt-12 pl-[8vw]">
            <div className="h-px w-[60vw] bg-praia-ink/10">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-px origin-left bg-praia-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
