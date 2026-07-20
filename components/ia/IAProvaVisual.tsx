"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";

/**
 * Ato V · Seção 2 — Prova visual.
 * O mesmo pedido, duas entradas: sem contexto × com identidade.
 */

const sinais = ["Fotografia", "Paleta", "Composição", "Tom"];

function PecaSemContexto() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-stone-300 via-rose-200 to-violet-300 p-6 md:p-10">
      <p className="rotate-[-2deg] font-serif text-3xl italic text-stone-600 md:text-5xl">
        Mega promoção!!
      </p>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-stone-600 md:text-sm">
          clube • lazer • esporte • já!
        </p>
        <p className="mt-1 text-[10px] font-bold uppercase text-violet-700 md:text-xs">
          arte gerada sem referências
        </p>
      </div>
    </div>
  );
}

function PecaComIdentidade() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-praia-black">
      {/* Fotografia real do acervo do clube */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/historia/07.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-praia-black via-praia-black/30 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6 md:p-10">
        <div className="h-1 w-10 rounded-full bg-praia-yellow" />
        <p className="mt-3 text-2xl font-semibold tracking-tightest text-white md:text-4xl">
          Praia Clube
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-praia-yellow md:text-xs">
          Conexão · Tradição · Inovação
        </p>
      </div>
      <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-white/70 backdrop-blur">
        Demonstração
      </span>
    </div>
  );
}

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
          <WordReveal text="Sem contexto." />
          <br />
          <span className="text-white/35">
            <WordReveal text="Com identidade." />
          </span>
        </h2>

        <Reveal delay={1} className="mt-14">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Arraste para comparar — mouse, toque ou setas do teclado
          </p>
          <BeforeAfter
            before={<PecaSemContexto />}
            after={<PecaComIdentidade />}
            beforeLabel="Sem contexto"
            afterLabel="Com identidade"
          />
        </Reveal>

        {/* Sinais de consistência */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {sinais.map((sinal, i) => (
            <motion.span
              key={sinal}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-full bg-praia-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-praia-black"
            >
              {sinal}
            </motion.span>
          ))}
        </div>

        <Reveal delay={2} className="mt-16">
          <p className="mx-auto max-w-2xl text-balance text-center text-2xl font-semibold leading-snug tracking-tightest md:text-4xl">
            A mesma ferramenta.
            <br />
            <span className="text-white/45 text-lg font-light leading-relaxed md:text-2xl">
              O resultado muda quando a marca entra antes da geração.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
