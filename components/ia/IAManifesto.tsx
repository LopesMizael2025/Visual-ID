"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Fechamento do ato: tela preta, silêncio, três respirações. */

const beats = [
  { a: "A IA aprende padrões.", b: "" },
  { a: "Quem ensina esses padrões...", b: "" },
  { a: "Somos nós.", b: "", destaque: true },
  { a: "Ferramentas mudam.", b: "Nossa identidade permanece." },
];

function Beat({
  beat,
  i,
  total,
  progress,
}: {
  beat: { a: string; b: string; destaque?: boolean };
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const inicio = i / total;
  const fim = (i + 1) / total;
  const m = 0.22 / total;

  const opacity = useTransform(
    progress,
    [inicio, inicio + m, fim - m, fim],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [inicio, inicio + m], [24, 0]);

  return (
    <motion.h2
      style={{ opacity, y }}
      className="absolute max-w-4xl text-balance px-6 text-center text-4xl font-semibold leading-[1.12] tracking-tightest text-white md:text-6xl"
    >
      {beat.destaque ? (
        <span className="text-praia-yellow">{beat.a}</span>
      ) : (
        beat.a
      )}
      {beat.b ? (
        <>
          <br />
          <span className="text-white/40">{beat.b}</span>
        </>
      ) : null}
    </motion.h2>
  );
}

export default function IAManifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[450vh] bg-black">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {beats.map((beat, i) => (
          <Beat key={i} beat={beat} i={i} total={beats.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
