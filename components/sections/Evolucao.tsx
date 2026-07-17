"use client";

import { motion } from "framer-motion";

/**
 * A evolução do clube em cards contidos sobre fundo escuro:
 * oito retratos do acervo, do preto-e-branco de 1935 à vista
 * de drone dos 90 anos, com legenda na base de cada card.
 */

const fotos = [
  { src: "/historia/01.jpg", era: "1935", legenda: "O rio e a primeira sede", alt: "Foto histórica do rio Uberabinha e da primeira sede do Praia Clube" },
  { src: "/historia/02.jpg", era: "Primeiros anos", legenda: "Os trampolins do Uberabinha", alt: "Banhistas e trampolins no rio nos primeiros anos do clube" },
  { src: "/historia/03.jpg", era: "Acervo", legenda: "A chegada ao clube", alt: "Carros de época no estacionamento do clube" },
  { src: "/historia/04.jpg", era: "Acervo", legenda: "A alameda de palmeiras", alt: "Alameda de palmeiras nos jardins do clube" },
  { src: "/historia/05.jpg", era: "Décadas", legenda: "O clube toma forma", alt: "Vista aérea antiga do clube com o ginásio e as quadras" },
  { src: "/historia/06.jpg", era: "Décadas", legenda: "Crescendo com a cidade", alt: "Vista aérea do campo e das piscinas junto ao rio" },
  { src: "/historia/07.jpg", era: "Hoje", legenda: "O complexo moderno", alt: "Vista aérea moderna do complexo aquático do clube" },
  { src: "/historia/08.jpg", era: "2025", legenda: "90 anos vistos do céu", alt: "Vista aérea atual do Praia Clube na malha urbana de Uberlândia" },
];

export default function Evolucao() {
  return (
    <section className="bg-praia-black py-28 text-white md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-praia-yellow/80">
            1935 — 2026
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
            O tempo passa.
            <span className="text-white/40"> A identidade fica.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {fotos.map((foto, i) => (
            <motion.figure
              key={foto.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
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

              {/* Gradiente e legenda na base */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-center md:p-5">
                <p className="text-sm font-semibold tracking-tight text-white md:text-base">
                  {foto.legenda}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-16 text-center text-xs font-medium uppercase tracking-[0.3em] text-white/30 lg:mt-24">
          Acervo Praia Clube · 1935 — 2026
        </p>
      </div>
    </section>
  );
}
