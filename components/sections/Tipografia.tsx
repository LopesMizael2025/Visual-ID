"use client";

import { Be_Vietnam_Pro, Exo } from "next/font/google";
import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/**
 * A Marca · Tipografia — expõe e explica as famílias tipográficas
 * oficiais do Praia Clube. As fontes do Google (Be Vietnam Pro e Exo)
 * são carregadas apenas para os espécimes desta seção; as licenciadas
 * são apresentadas como cartões informativos.
 */

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});

const exo = Exo({ subsets: ["latin"], display: "swap" });

const secundarias = [
  {
    nome: "Denominary",
    uso: "Títulos e destaques das equipes",
    obs: "Fonte licenciada",
  },
  {
    nome: "Winner UltraComp Bold",
    uso: "Números de uniformes e placares",
    obs: "Fonte licenciada · exclusiva para números",
  },
  {
    nome: "Sharp Grotesk",
    uso: "Apoio e textos do material esportivo",
    obs: "Fonte licenciada",
  },
];

export default function Tipografia() {
  return (
    <section className="bg-praia-paper py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-ink/40">
            A Marca — Tipografia
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="A marca também tem voz." />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="Ela se chama tipografia." />
          </span>
        </h2>
        <Reveal delay={1}>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-praia-gray">
            Três famílias principais sustentam a comunicação institucional; três
            secundárias vestem o material esportivo. Fora delas, nenhuma fonte
            representa o Praia — nem em peça feita com IA.
          </p>
        </Reveal>

        {/* Principais */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-3xl bg-praia-black p-8 text-white shadow-[0_16px_50px_-28px_rgba(0,0,0,0.35)] md:p-10">
              <span className="text-6xl font-black tracking-tightest text-praia-yellow md:text-7xl">
                Aa
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                Chateau de Garage
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/60">
                A display institucional. Marca presença em títulos de campanhas
                e peças de grande impacto.
              </p>
              <p className="mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-praia-yellow/70">
                Principal · Fonte licenciada
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className={`${beVietnam.className} flex h-full flex-col rounded-3xl border border-praia-ink/8 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] md:p-10`}>
              <span className="text-6xl font-extrabold tracking-tight text-praia-ink md:text-7xl">
                Aa
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                Be Vietnam Pro
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-praia-ink/55">
                O texto do dia a dia: legendas, corpo de posts, comunicados.
                Legível do impresso à tela.
              </p>
              <p className="mt-4 border-t border-praia-ink/8 pt-4 text-lg font-light text-praia-ink/70">
                ABCDEFGHIJ abcdefghij 0123456789
              </p>
              <p className="mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-praia-ink/40">
                Principal · Google Fonts
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className={`${exo.className} flex h-full flex-col rounded-3xl border border-praia-ink/8 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] md:p-10`}>
              <span className="text-6xl font-bold tracking-tight text-praia-ink md:text-7xl">
                Aa
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Exo</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-praia-ink/55">
                Geométrica e contemporânea: subtítulos, destaques e interfaces
                digitais.
              </p>
              <p className="mt-4 border-t border-praia-ink/8 pt-4 text-lg font-light text-praia-ink/70">
                ABCDEFGHIJ abcdefghij 0123456789
              </p>
              <p className="mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-praia-ink/40">
                Principal · Google Fonts
              </p>
            </div>
          </Reveal>
        </div>

        {/* Secundárias — material esportivo */}
        <Reveal delay={1} className="mt-16">
          <div className="rounded-3xl bg-praia-black p-10 text-white md:p-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Material <span className="text-praia-yellow">esportivo</span>
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Uniformes · Quadras · Placares
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3">
              {secundarias.map((f, i) => (
                <motion.div
                  key={f.nome}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-praia-yellow pl-5"
                >
                  <p className="text-lg font-semibold tracking-tight">{f.nome}</p>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-white/60">
                    {f.uso}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                    {f.obs}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-sm font-light text-white/40">
              As fontes licenciadas não têm versão web pública — nos exemplos
              acima, apenas nome e função. Os arquivos oficiais ficam com o
              time de marketing e nunca devem ser substituídos por similares.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
