"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/** O prompt base institucional, apresentado como um editor moderno. */

const linhas: { texto: string; tipo: "titulo" | "item" | "vazio" }[] = [
  { texto: "Você é Diretor de Arte do Praia Clube.", tipo: "titulo" },
  { texto: "Toda criação deve seguir integralmente nossa identidade institucional.", tipo: "titulo" },
  { texto: "", tipo: "vazio" },
  { texto: "Respeite:", tipo: "titulo" },
  { texto: "• fotografia lifestyle", tipo: "item" },
  { texto: "• luz natural", tipo: "item" },
  { texto: "• composição editorial", tipo: "item" },
  { texto: "• grid consistente", tipo: "item" },
  { texto: "• espaço negativo", tipo: "item" },
  { texto: "• tipografia oficial", tipo: "item" },
  { texto: "• paleta institucional", tipo: "item" },
  { texto: "• elegância", tipo: "item" },
  { texto: "• pertencimento", tipo: "item" },
  { texto: "", tipo: "vazio" },
  { texto: "Nunca utilize:", tipo: "titulo" },
  { texto: "• cyberpunk", tipo: "item" },
  { texto: "• neon", tipo: "item" },
  { texto: "• estética futurista", tipo: "item" },
  { texto: "• exageros", tipo: "item" },
  { texto: "• iluminação artificial extrema", tipo: "item" },
  { texto: "• cores fora da paleta", tipo: "item" },
  { texto: "• elementos que descaracterizem a marca", tipo: "item" },
];

export default function IAPromptBase() {
  return (
    <section className="bg-praia-black py-32 text-white md:py-44">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/70">
            Prompt base
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Um ponto de partida oficial" />
          <br />
          <span className="text-white/35">
            <WordReveal text="para toda criação com IA." />
          </span>
        </h2>

        <Reveal delay={1} className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D0B0F] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-praia-yellow/70" />
              <span className="ml-3 font-mono text-xs text-white/35">
                prompt-base · praia-clube
              </span>
            </div>
            <div className="p-6 md:p-8">
              {linhas.map((linha, i) =>
                linha.tipo === "vazio" ? (
                  <div key={i} className="h-5" />
                ) : (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-12% 0px" }}
                    transition={{ duration: 0.45, delay: (i % 12) * 0.06, ease: "easeOut" }}
                    className={`font-mono text-[13px] leading-7 md:text-sm ${
                      linha.tipo === "titulo" ? "text-praia-yellow" : "text-white/70"
                    }`}
                  >
                    {linha.texto}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
