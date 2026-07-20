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
 * Ato V · Seção 1 — Contexto antes do prompt.
 * Uma única sequência sticky em três cenas:
 * transição → o erro → o método.
 */

const blocos = [
  {
    nome: "Briefing",
    frase: "Objetivo, público e mensagem.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nome: "Contexto de Marca",
    frase: "Manual, referências e linguagem.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m4 12 8 4.5L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m4 16 8 4.5L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: "Prompt",
    frase: "A instrução final.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="m5 7 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Cena({
  progress,
  faixa,
  children,
  className = "",
}: {
  progress: MotionValue<number>;
  faixa: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, faixa, [0, 1, 1, 0]);
  const y = useTransform(progress, [faixa[0], faixa[1]], [26, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-x-0 px-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ArteGenerica({ pequena = false }: { pequena?: boolean }) {
  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-stone-200 via-rose-100 to-slate-300 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)] ${
        pequena ? "w-36 md:w-44" : "w-52 md:w-64"
      }`}
    >
      <div className={`flex flex-col items-center justify-center ${pequena ? "aspect-[4/5] p-4" : "aspect-[4/5] p-6"}`}>
        <p className={`font-serif italic text-stone-500 ${pequena ? "text-xl" : "text-3xl"}`}>verão</p>
        <p className={`mt-2 font-mono uppercase tracking-widest text-stone-400 ${pequena ? "text-[8px]" : "text-[10px]"}`}>
          promo • imperdível
        </p>
      </div>
    </div>
  );
}

function Metodo() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-stretch">
      {blocos.map((bloco, i) => (
        <div key={bloco.nome} className="flex flex-col items-center">
          <div className="flex w-full items-center gap-4 rounded-2xl border border-praia-ink/10 bg-white px-5 py-4 shadow-[0_12px_36px_-24px_rgba(0,0,0,0.25)]">
            <span className="text-praia-ink/70">{bloco.icone}</span>
            <span>
              <span className="block text-base font-semibold tracking-tight md:text-lg">
                {bloco.nome}
              </span>
              <span className="block text-sm font-light text-praia-ink/55">
                {bloco.frase}
              </span>
            </span>
          </div>
          {i < blocos.length - 1 ? (
            <div className="h-5 w-px bg-praia-ink/20" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function IAComIdentidade() {
  const ref = useRef<HTMLElement>(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const msgOpacity = useTransform(scrollYProgress, [0.74, 0.8], [0, 1]);
  const msgY = useTransform(scrollYProgress, [0.74, 0.8], [16, 0]);

  if (reduzir) {
    return (
      <section className="bg-praia-paper py-28 text-praia-ink md:py-36">
        <div className="mx-auto max-w-3xl space-y-20 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-praia-ink/40">
            Ato V — IA com identidade
          </p>
          <h2 className="text-4xl font-semibold tracking-tightest md:text-6xl">
            A IA muda. <span className="text-praia-ink/35">Nossa identidade permanece.</span>
          </h2>
          <div>
            <p className="font-mono text-sm text-praia-ink/60">&quot;Crie uma arte para Instagram.&quot;</p>
            <div className="mt-6"><ArteGenerica /></div>
            <p className="mx-auto mt-6 max-w-md text-lg font-light text-praia-ink/60">
              Um comando sem contexto produz uma imagem sem pertencimento.
            </p>
          </div>
          <Metodo />
          <p className="text-3xl font-semibold tracking-tightest md:text-4xl">
            O prompt não é o começo. <span className="bg-praia-yellow px-2">Ele é consequência.</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-praia-paper text-praia-ink">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <p className="absolute top-16 w-full text-center text-xs font-semibold uppercase tracking-[0.35em] text-praia-ink/40 md:top-24">
          Ato V — IA com identidade
        </p>

        {/* Cena 1 — Transição */}
        <Cena progress={scrollYProgress} faixa={[0.02, 0.07, 0.18, 0.24]} className="text-center">
          <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.08] tracking-tightest md:text-7xl">
            A IA muda.
            <br />
            <span className="text-praia-ink/35">Nossa identidade permanece.</span>
          </h2>
        </Cena>

        {/* Cena 2 — O erro */}
        <Cena progress={scrollYProgress} faixa={[0.26, 0.32, 0.48, 0.54]} className="text-center">
          <p className="font-mono text-sm text-praia-ink/60 md:text-base">
            &quot;Crie uma arte para Instagram.&quot;
          </p>
          <div className="mt-6"><ArteGenerica /></div>
          <p className="mx-auto mt-6 max-w-md text-balance text-lg font-light text-praia-ink/60 md:text-xl">
            Um comando sem contexto
            <br />
            produz uma imagem sem pertencimento.
          </p>
        </Cena>

        {/* Cena 3 — O método */}
        <Cena progress={scrollYProgress} faixa={[0.56, 0.62, 0.94, 1]} className="text-center">
          <Metodo />
          <motion.p
            style={{ opacity: msgOpacity, y: msgY }}
            className="mx-auto mt-10 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tightest md:text-5xl"
          >
            O prompt não é o começo.
            <br />
            <span className="bg-praia-yellow px-2">Ele é consequência.</span>
          </motion.p>
        </Cena>
      </div>
    </section>
  );
}
