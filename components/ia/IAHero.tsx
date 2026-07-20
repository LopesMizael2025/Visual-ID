"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Abertura do ato: tela clara, silêncio visual, frases em sequência no scroll. */

const frases = [
  { a: "A IA muda.", b: "" },
  { a: "Nossa identidade", b: "permanece." },
  { a: "Ferramentas evoluem.", b: "Princípios permanecem." },
];

function Frase({
  f,
  i,
  total,
  progress,
}: {
  f: { a: string; b: string };
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const inicio = i / total;
  const fim = (i + 1) / total;
  const m = 0.25 / total;

  const opacity = useTransform(
    progress,
    i === total - 1
      ? [inicio, inicio + m, 0.96, 1]
      : [inicio, inicio + m, fim - m, fim],
    i === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(progress, [inicio, inicio + m], [28, 0]);

  return (
    <motion.h2
      style={{ opacity, y }}
      className="absolute max-w-5xl text-balance px-6 text-center text-5xl font-semibold leading-[1.08] tracking-tightest md:text-7xl"
    >
      {f.a}
      {f.b ? (
        <>
          <br />
          <span className="text-praia-ink/35">{f.b}</span>
        </>
      ) : null}
    </motion.h2>
  );
}

export default function IAHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[400vh] bg-praia-paper text-praia-ink">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden px-6">
        <p className="absolute top-24 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue md:top-32">
          IA com identidade
        </p>
        {frases.map((f, i) => (
          <Frase key={i} f={f} i={i} total={frases.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
