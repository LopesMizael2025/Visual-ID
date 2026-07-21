"use client";

import { motion } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

/**
 * Ato V · Dicas práticas — como usar as ferramentas de IA
 * com mais eficácia no dia a dia da equipe.
 */

const dicas = [
  {
    n: "01",
    titulo: "Comece pelas referências",
    texto:
      "Antes do primeiro pedido, anexe o manual, peças aprovadas e fotos reais do clube. A IA só respeita o que ela conhece.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9h4M12 13h4" stroke="#F4D800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    titulo: "Uma mudança por vez",
    texto:
      "Ao iterar, peça um ajuste só: \"mantenha tudo, troque apenas o fundo\". Vários pedidos juntos fazem a IA refazer o que já estava certo.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m11 8 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="12" r="2" fill="#F4D800" />
      </svg>
    ),
  },
  {
    n: "03",
    titulo: "Peça variações, escolha com curadoria",
    texto:
      "Gere 3 ou 4 opções e selecione com olhar crítico. A primeira resposta raramente é a melhor — quem decide é você, não a ferramenta.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3" y="5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m13.5 17 1.5 1.5 3-3" stroke="#F4D800" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "04",
    titulo: "Fale a língua do manual",
    texto:
      "Use nos prompts o vocabulário da marca: amarelo Praia, grafismo orgânico, foto lifestyle, área de reserva. Palavras certas geram peças certas.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 18V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 10h6M9 13h3" stroke="#F4D800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "05",
    titulo: "Guarde o que funcionou",
    texto:
      "Prompt aprovado vira patrimônio: salve na biblioteca da equipe com o resultado ao lado. O próximo post começa do acerto, não do zero.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 8h6" stroke="#F4D800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "06",
    titulo: "Finalize fora da IA",
    texto:
      "Exporte em alta e faça a arte-final no editor: logo oficial, textos revisados, área de reserva. E nada vai ao ar sem passar pelo ritual.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="m14.5 5.5 4 4L8 20H4v-4L14.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m12.5 7.5 4 4" stroke="#F4D800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function IADicasFerramentas() {
  return (
    <section className="bg-praia-paper py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-ink/40">
            Na prática
          </p>
        </Reveal>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          <WordReveal text="Seis hábitos que mudam" />
          <br />
          <span className="text-praia-ink/35">
            <WordReveal text="o resultado da ferramenta." />
          </span>
        </h2>
        <Reveal delay={1}>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-praia-ink/60">
            Valem para qualquer IA — de imagem, texto ou vídeo. O que muda o
            resultado não é a ferramenta: é como a equipe a conduz.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dicas.map((d, i) => (
            <motion.article
              key={d.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-praia-ink/8 bg-white p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-praia-ink">{d.icone}</span>
                <span className="text-xs font-semibold text-praia-ink/30">{d.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {d.titulo}
              </h3>
              <p className="mt-2.5 text-sm font-light leading-relaxed text-praia-ink/55">
                {d.texto}
              </p>
            </motion.article>
          ))}
        </div>

        <Reveal delay={2} className="mt-14">
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-praia-ink/35">
            Ferramenta boa é ferramenta bem dirigida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
