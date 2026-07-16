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

        {/* Logotipo oficial do Praia Clube */}
        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute flex flex-col items-center gap-7"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://praiaclube.org.br/wp-content/uploads/2023/01/Patrocinadores-Dentil-Praia-Clube_0004_praia-clube.png"
            alt="Praia Clube — Uberlândia MG"
            className="w-56 drop-shadow-[0_0_60px_rgba(255,220,14,0.35)] md:w-72"
          />
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 md:text-xs">
            Desde 1935 · Conexão · Tradição · Inovação
          </p>
        </motion.div>
      </div>
    </section>
  );
}
