"use client";

import { Reveal, WordReveal } from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";

const fluxo = [
  {
    passo: "01",
    titulo: "Briefing",
    texto: "Objetivo, público e mensagem definidos por pessoas.",
  },
  {
    passo: "02",
    titulo: "Direção de arte",
    texto: "Identidade visual, referências e limites criativos.",
  },
  {
    passo: "03",
    titulo: "IA como ferramenta",
    texto: "Acelera variações, rascunhos e produção — dentro das regras da marca.",
  },
  {
    passo: "04",
    titulo: "Curadoria humana",
    texto: "Revisão de marca, tom e qualidade antes de qualquer publicação.",
  },
  {
    passo: "05",
    titulo: "Publicação",
    texto: "Cada peça no ar reforça o patrimônio de 90 anos.",
  },
];

function ArteSemDirecao() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-fuchsia-600 via-orange-500 to-lime-400 p-8">
      <p className="rotate-[-3deg] font-serif text-3xl italic text-white drop-shadow md:text-5xl">
        praia CLUBE!!
      </p>
      <p className="font-mono text-xs uppercase text-white/80 md:text-sm">
        7 fontes · 12 cores · nenhuma regra
      </p>
    </div>
  );
}

function ArteComIdentidade() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-praia-black p-8">
      <div className="h-10 w-10 rounded-full bg-praia-yellow md:h-14 md:w-14" />
      <p className="text-3xl font-semibold tracking-tightest text-white md:text-5xl">
        Praia Clube
      </p>
      <p className="text-xs uppercase tracking-[0.3em] text-praia-yellow md:text-sm">
        Conexão · Tradição · Inovação
      </p>
    </div>
  );
}

export default function PapelDaIA() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Ato IV — O papel da IA
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="A IA acelera a produção." />
          <br />
          <span className="text-white/35">
            <WordReveal text="A identidade preserva a personalidade." />
          </span>
        </h2>

        {/* Fluxo de criação profissional */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-5">
          {fluxo.map((etapa, i) => (
            <Reveal key={etapa.passo} delay={i} className="h-full">
              <div className="glass h-full rounded-2xl p-6">
                <span className="text-sm font-semibold text-praia-yellow">
                  {etapa.passo}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                  {etapa.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparador Antes x Depois */}
        <Reveal delay={1} className="mt-24">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Arraste para comparar
          </p>
          <BeforeAfter
            before={<ArteSemDirecao />}
            after={<ArteComIdentidade />}
            beforeLabel="IA sem direção"
            afterLabel="IA com identidade"
          />
        </Reveal>

        <Reveal delay={2} className="mt-16">
          <p className="mx-auto max-w-2xl text-center text-lg font-light leading-relaxed text-white/60 md:text-xl">
            A mesma ferramenta. Dois resultados. A diferença nunca é a
            tecnologia — é o briefing, a direção de arte e a identidade visual
            que a orientam.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
