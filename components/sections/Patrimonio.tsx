"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Reveal, WordReveal } from "@/components/ui/Reveal";

type Item =
  | {
      tipo: "marco";
      ano: string;
      titulo: string;
      texto: string;
      foto: string;
      alt: string;
    }
  | {
      tipo: "foto";
      foto: string;
      alt: string;
      legenda: string;
      rot: number;
      offset: number;
    };

const itens: Item[] = [
  {
    tipo: "marco",
    ano: "1935",
    titulo: "Uma praia de cascalho",
    texto:
      "Doze amigos que nadavam no rio Uberabinha fundam o Praia Clube em 10 de julho. O nome nasce da praia de cascalho onde tudo começou.",
    foto: "/historia/01.jpg",
    alt: "Foto histórica do rio Uberabinha e da primeira sede do Praia Clube",
  },
  {
    tipo: "marco",
    ano: "1935",
    titulo: "Amarelo e preto",
    texto:
      "Roman Balparda, sócio fundador, sugere as cores do clube. Nove décadas depois, elas continuam sendo reconhecidas à distância.",
    foto: "/historia/02.jpg",
    alt: "Banhistas e trampolins no rio, nos primeiros anos do clube",
  },
  {
    tipo: "foto",
    foto: "/historia/03.jpg",
    alt: "Carros de época no estacionamento do clube",
    legenda: "Acervo histórico · Praia Clube",
    rot: -2.5,
    offset: 70,
  },
  {
    tipo: "foto",
    foto: "/historia/04.jpg",
    alt: "Alameda de palmeiras nos jardins do clube",
    legenda: "Os jardins que viraram memória",
    rot: 2,
    offset: -50,
  },
  {
    tipo: "marco",
    ano: "Décadas",
    titulo: "Patrimônio construído",
    texto:
      "Geração após geração, o clube se torna referência em esporte, lazer e convivência — um dos maiores clubes do Brasil.",
    foto: "/historia/05.jpg",
    alt: "Vista aérea antiga do clube com o ginásio e as quadras",
  },
  {
    tipo: "foto",
    foto: "/historia/06.jpg",
    alt: "Vista aérea do campo e das piscinas junto ao rio",
    legenda: "O clube cresce com a cidade",
    rot: -1.5,
    offset: 60,
  },
  {
    tipo: "marco",
    ano: "Hoje",
    titulo: "Esporte de elite",
    texto:
      "Equipes profissionais levam o nome do Praia Clube a pódios nacionais e internacionais, carregando a marca em cada quadra.",
    foto: "/historia/07.jpg",
    alt: "Vista aérea moderna do complexo aquático do clube",
  },
  {
    tipo: "marco",
    ano: "2025",
    titulo: "90 anos",
    texto:
      "Conexão. Tradição. Inovação. Um patrimônio de Uberlândia que cada peça de comunicação tem a responsabilidade de preservar.",
    foto: "/historia/08.jpg",
    alt: "Vista aérea atual do Praia Clube na malha urbana de Uberlândia",
  },
];

function Polaroid({
  item,
  progress,
}: {
  item: Extract<Item, { tipo: "foto" }>;
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, [0, 1], [0, item.offset]);
  return (
    <motion.figure
      style={{ x, rotate: item.rot }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-[52vw] shrink-0 self-center rounded-sm bg-white p-3 pb-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)] md:w-[22vw]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.foto}
        alt={item.alt}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-[2px] object-cover"
      />
      <figcaption className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-praia-ink/40">
        {item.legenda}
      </figcaption>
    </motion.figure>
  );
}

export default function Patrimonio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-74%"]);

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

      {/* Timeline horizontal: marcos e fotografias atravessando o tempo */}
      <div ref={trackRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-stretch gap-6 pl-[8vw] md:gap-8">
            {itens.map((item) =>
              item.tipo === "marco" ? (
                <article
                  key={item.titulo}
                  className="flex w-[78vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-praia-ink/8 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] md:w-[36vw]"
                >
                  <div className="h-44 overflow-hidden md:h-56">
                    <motion.img
                      src={item.foto}
                      alt={item.alt}
                      loading="lazy"
                      initial={{ scale: 1.16 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-5%" }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <span className="text-5xl font-semibold tracking-tightest text-praia-yellow md:text-6xl">
                      {item.ano}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-base font-light leading-relaxed text-praia-ink/60">
                      {item.texto}
                    </p>
                  </div>
                </article>
              ) : (
                <Polaroid key={item.foto} item={item} progress={scrollYProgress} />
              )
            )}
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
