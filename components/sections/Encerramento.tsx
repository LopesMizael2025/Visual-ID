"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Encerramento() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const fraseOpacity = useTransform(scrollYProgress, [0.05, 0.3, 0.5, 0.62], [0, 1, 1, 0]);
  const fraseY = useTransform(scrollYProgress, [0.05, 0.3], [40, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0.66, 0.9], [0, 1]);
  const logoScale = useTransform(scrollYProgress, [0.66, 0.95], [0.85, 1]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {/* Frase final */}
        <motion.p
          style={{ opacity: fraseOpacity, y: fraseY }}
          className="absolute mx-auto max-w-4xl px-6 text-center text-3xl font-semibold leading-tight tracking-tightest text-white md:text-5xl lg:text-6xl"
        >
          O futuro não pertence a quem produz mais imagens.{" "}
          <span className="text-praia-yellow">
            Pertence a quem constrói marcas inesquecíveis.
          </span>
        </motion.p>

        {/* Logotipo — substituir pelo logo oficial (SVG) do Praia Clube */}
        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute flex flex-col items-center gap-6"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-praia-yellow md:h-36 md:w-36">
            <span className="text-4xl font-semibold tracking-tightest text-praia-yellow md:text-5xl">
              PC
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/70 md:text-base">
            Praia Clube
          </p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 md:text-xs">
            Desde 1935 · Conexão · Tradição · Inovação
          </p>
        </motion.div>
      </div>
    </section>
  );
}
