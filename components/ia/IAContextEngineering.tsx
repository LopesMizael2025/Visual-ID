"use client";

import { Reveal, WordReveal } from "@/components/ui/Reveal";

/** Prompt vs Contexto: de onde nasce a qualidade. */

const contexto = [
  "Marca",
  "Objetivo",
  "Campanha",
  "Público",
  "Fotografia",
  "Tom",
  "Paleta",
  "Grid",
  "Campanhas anteriores",
];

export default function IAContextEngineering() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Context engineering
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="A qualidade não nasce do prompt." />
          <br />
          <span className="text-white/35">
            <WordReveal text="Nasce do contexto." />
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Só o prompt */}
          <Reveal className="h-full">
            <div className="glass flex h-full flex-col rounded-3xl p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Prompt
              </p>
              <div className="mt-6 rounded-2xl bg-white/5 p-5">
                <p className="font-mono text-sm text-white/70">
                  &quot;Crie um post para o Instagram.&quot;
                </p>
              </div>
              <div className="mt-6 flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 p-10">
                <p className="text-center font-serif text-2xl italic text-white/50">
                  qualquer marca?
                </p>
              </div>
              <p className="mt-6 text-center text-sm font-light uppercase tracking-[0.25em] text-white/40">
                Resultado genérico
              </p>
            </div>
          </Reveal>

          {/* Contexto antes do prompt */}
          <Reveal delay={1} className="h-full">
            <div className="glass flex h-full flex-col rounded-3xl border border-praia-yellow/25 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-praia-yellow">
                Contexto
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {contexto.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl bg-praia-black p-10 outline outline-1 outline-white/10">
                <div className="h-8 w-8 rounded-full bg-praia-yellow" />
                <p className="text-center text-2xl font-semibold tracking-tightest text-white">
                  Praia Clube
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-praia-yellow">
                  Conexão · Tradição · Inovação
                </p>
              </div>
              <p className="mt-6 text-center text-sm font-light uppercase tracking-[0.25em] text-praia-yellow/80">
                Resultado consistente
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="mt-16">
          <p className="mx-auto max-w-2xl text-center text-lg font-light leading-relaxed text-white/60 md:text-xl">
            A IA produz resultados consistentes quando recebe identidade antes
            de receber comandos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
