"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Ato V · Seção 3 — Ritual de aprovação.
 * Quatro decisões na mesma viewport; o scroll acende uma por vez.
 */

const etapas = [
  {
    n: "01",
    pergunta: "Parece o Praia?",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 13.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    pergunta: "Respeita o Manual?",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    n: "03",
    pergunta: "Parece uma campanha nossa?",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m7 15 3.2-4 2.6 3 1.8-2.2L18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "04",
    pergunta: "Está pronto para publicar?",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 12.5 20 5l-4.5 15-4-6.5L4 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Etapa({
  etapa,
  i,
  progress,
  estatico,
}: {
  etapa: (typeof etapas)[number];
  i: number;
  progress: MotionValue<number>;
  estatico: boolean;
}) {
  const ponto = 0.12 + i * 0.15;
  const opacity = useTransform(progress, [ponto - 0.04, ponto], [0.25, 1]);
  const checkOpacity = useTransform(progress, [ponto, ponto + 0.04], [0, 1]);

  return (
    <motion.li
      style={estatico ? undefined : { opacity }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 md:px-6 md:py-5"
    >
      <span className="text-sm font-semibold text-praia-yellow">{etapa.n}</span>
      <span className="text-white/70">{etapa.icone}</span>
      <span className="flex-1 text-base font-semibold tracking-tight text-white md:text-lg">
        {etapa.pergunta}
      </span>
      <motion.span
        style={estatico ? undefined : { opacity: checkOpacity }}
        className="flex items-center gap-1.5 text-praia-yellow"
      >
        <span aria-hidden>✓</span>
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Aprovado
        </span>
      </motion.span>
    </motion.li>
  );
}

export default function IARitualDeAprovacao() {
  const ref = useRef<HTMLElement>(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const finalOpacity = useTransform(scrollYProgress, [0.76, 0.84], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.76, 0.84], [14, 0]);

  const estatico = !!reduzir;

  return (
    <section
      ref={ref}
      className={estatico ? "relative bg-black" : "relative h-[260vh] bg-black"}
    >
      <div
        className={
          estatico
            ? "flex flex-col items-center justify-center px-6 py-28"
            : "sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
          Ritual de aprovação
        </p>
        <h2 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tightest text-white md:text-5xl">
          Quatro decisões antes de publicar.
        </h2>

        <ul className="mt-10 flex w-full max-w-xl flex-col gap-3">
          {etapas.map((etapa, i) => (
            <Etapa
              key={etapa.n}
              etapa={etapa}
              i={i}
              progress={scrollYProgress}
              estatico={estatico}
            />
          ))}
        </ul>

        <motion.div
          style={estatico ? undefined : { opacity: finalOpacity, y: finalY }}
          className="mt-10 text-center"
        >
          <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            <span className="text-praia-yellow">✓</span> Aprovado para
            representar o Praia Clube.
          </p>
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-praia-yellow">
              Prompt base
            </p>
            <p className="mt-2 text-sm font-light text-white/70 md:text-base">
              Marca + objetivo + público + referências + regras do manual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
