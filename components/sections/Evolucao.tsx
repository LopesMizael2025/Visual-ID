"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * A travessia do tempo: as oito fotografias do acervo em tela cheia.
 * O scroll funde uma época na seguinte — do preto-e-branco de 1935
 * à vista de drone dos 90 anos. Sem containers: só a imagem.
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

function Painel({
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
  const inicio = i / total;
  const fim = (i + 1) / total;
  const margem = 0.35 / total;

  const opacity = useTransform(
    progress,
    i === 0
      ? [0, 0, fim - margem, fim]
      : i === total - 1
        ? [inicio - margem, inicio, 1, 1]
        : [inicio - margem, inicio, fim - margem, fim],
    [0, 1, 1, 0]
  );
  // Ken burns contínuo enquanto o painel está em cena
  const scale = useTransform(progress, [inicio - margem, fim], [1.12, 1.02]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={foto.src}
        alt={foto.alt}
        loading="lazy"
        style={{ scale }}
        className="h-full w-full object-cover"
      />
      {/* Gradiente para a legenda */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-10 left-6 md:bottom-14 md:left-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-praia-yellow">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
          {foto.legenda}
        </p>
      </div>
    </motion.div>
  );
}

export default function Evolucao() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-praia-black">
      {/* Abertura do capítulo */}
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-28 text-center text-white md:pt-36">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/80">
          1935 — 2025
        </p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
          O tempo passa.
          <span className="text-white/40"> A identidade fica.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-light text-white/50 md:text-lg">
          Role para atravessar nove décadas do acervo do clube.
        </p>
      </div>

      {/* Travessia em tela cheia */}
      <div ref={ref} className="relative h-[500vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {fotos.map((foto, i) => (
            <Painel
              key={foto.src}
              foto={foto}
              i={i}
              total={fotos.length}
              progress={scrollYProgress}
            />
          ))}

          {/* Linha do tempo do capítulo */}
          <div className="absolute bottom-4 left-6 right-6 md:left-14 md:right-14">
            <div className="h-px bg-white/15">
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
