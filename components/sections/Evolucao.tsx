"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * A evolução do clube em uma única fita de fotografias:
 * a seção fica presa na tela e o scroll revela uma foto por vez,
 * da esquerda para a direita — de 1935 a 2026.
 */

const fotos = [
  { src: "/historia/01.jpg", legenda: "O rio e a primeira sede", alt: "Foto histórica do rio Uberabinha e da primeira sede do Praia Clube" },
  { src: "/historia/02.jpg", legenda: "Os trampolins do Uberabinha", alt: "Banhistas e trampolins no rio nos primeiros anos do clube" },
  { src: "/historia/03.jpg", legenda: "A chegada ao clube", alt: "Carros de época no estacionamento do clube" },
  { src: "/historia/04.jpg", legenda: "A alameda de palmeiras", alt: "Alameda de palmeiras nos jardins do clube" },
  { src: "/historia/05.jpg", legenda: "O clube toma forma", alt: "Vista aérea antiga do clube com o ginásio e as quadras" },
  { src: "/historia/06.jpg", legenda: "Crescendo com a cidade", alt: "Vista aérea do campo e das piscinas junto ao rio" },
  { src: "/historia/07.jpg", legenda: "O complexo moderno", alt: "Vista aérea moderna do complexo aquático do clube" },
  { src: "/historia/08.jpg", legenda: "90 anos vistos do céu", alt: "Vista aérea atual do Praia Clube na malha urbana de Uberlândia" },
];

function Foto({
  foto,
  i,
  total,
  progress,
}: {
  foto: (typeof fotos)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cada foto acende em sua janela do scroll, em sequência
  const inicio = (i / total) * 0.85;
  const fim = inicio + 0.85 / total;

  const opacity = useTransform(progress, [inicio, fim], [0, 1]);
  const y = useTransform(progress, [inicio, fim], [48, 0]);
  const scale = useTransform(progress, [inicio, fim], [0.94, 1]);

  return (
    <motion.figure
      style={{ opacity, y, scale }}
      className="group relative min-w-0 flex-1 overflow-hidden rounded-xl md:rounded-2xl"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={foto.src}
          alt={foto.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-2 text-center md:p-4">
        <p className="text-[9px] font-semibold tracking-tight text-white md:text-xs lg:text-sm">
          {foto.legenda}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function Evolucao() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-praia-black text-white">
      <div ref={ref} className="relative h-[280vh]">
        <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-4 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/80">
              1935 — 2026
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
              O tempo passa.
              <span className="text-white/40"> A identidade fica.</span>
            </h2>
          </div>

          {/* Fita única: o scroll revela foto a foto */}
          <div className="flex w-full max-w-[1700px] gap-2 md:gap-3">
            {fotos.map((foto, i) => (
              <Foto
                key={foto.src}
                foto={foto}
                i={i}
                total={fotos.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Progresso da travessia */}
          <div className="mt-10 w-full max-w-[1700px] md:mt-12">
            <div className="h-px bg-white/15">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-px origin-left bg-praia-yellow"
              />
            </div>
            <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              Acervo Praia Clube · 1935 — 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
