"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

/** O fluxo certo: o prompt é a última etapa, nunca a primeira. */

const etapas = [
  { nome: "Objetivo", desc: "O que esta peça precisa alcançar?" },
  { nome: "Público", desc: "Com quem ela conversa?" },
  { nome: "Mensagem", desc: "O que precisa ficar na memória?" },
  { nome: "Identidade", desc: "Manual, paleta, tipografia, tom." },
  { nome: "Contexto", desc: "Referências, campanhas, fotografias reais." },
  { nome: "Prompt", desc: "Só agora. Escrito com tudo acima." },
  { nome: "Imagem", desc: "Consequência natural do processo." },
];

export default function IAWorkflow() {
  return (
    <section className="bg-praia-paper py-24 text-praia-ink md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {etapas.map((etapa, i) => (
          <motion.div
            key={etapa.nome}
            initial={{ opacity: 0.12 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-42% 0px -42% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex min-h-[62vh] flex-col items-center justify-center text-center"
          >
            <span className="text-sm font-semibold text-praia-blue">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-5xl font-semibold tracking-tightest md:text-7xl">
              {etapa.nome}
            </h3>
            <p className="mt-4 max-w-md text-base font-light text-praia-ink/55 md:text-lg">
              {etapa.desc}
            </p>
            {i < etapas.length - 1 ? (
              <div className="mt-10 h-14 w-px bg-praia-ink/15" aria-hidden />
            ) : null}
          </motion.div>
        ))}

        <Reveal className="pb-16 pt-24 text-center md:pt-32">
          <p className="text-balance text-3xl font-semibold leading-tight tracking-tightest md:text-5xl">
            O prompt nunca é o começo.
            <br />
            <span className="bg-praia-yellow px-2">Ele é consequência.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
