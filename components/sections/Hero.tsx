"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "@/components/ui/Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);

  // O mouse controla o tempo do vídeo: o robô "vira o rosto" seguindo o cursor.
  // Sem autoplay — o vídeo fica pausado e é percorrido (scrub) suavemente.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let alvo = 0; // tempo desejado (s)
    let atual = 0; // tempo suavizado (s)
    let raf = 0;
    let dur = 0;

    const onMeta = () => {
      dur = v.duration || 8;
      v.pause();
      v.currentTime = 0;
    };

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth; // 0 (esq) .. 1 (dir)
      if (dur > 0) alvo = (1 - nx) * Math.max(dur - 0.08, 0);
    };

    const loop = () => {
      atual += (alvo - atual) * 0.1;
      if (v.readyState >= 2 && Math.abs(v.currentTime - atual) > 0.03) {
        try {
          v.currentTime = atual;
        } catch {}
      }
      raf = requestAnimationFrame(loop);
    };

    v.addEventListener("loadedmetadata", onMeta);
    if (v.readyState >= 1) onMeta();
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-praia-black text-white"
    >
      {/* Vídeo de fundo controlado pelo mouse — opacidade 85% */}
      <motion.div style={{ scale }} className="absolute inset-0 opacity-85" aria-hidden>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src="/hero-bg.mp4"
        />
      </motion.div>

      {/* Véus para legibilidade do texto */}
      <div className="absolute inset-0 bg-praia-black/45" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.7)_82%)]"
        aria-hidden
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-praia-yellow"
        >
          Praia Clube · Marketing · Desde 1935
        </motion.p>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tightest md:text-7xl lg:text-8xl">
          <WordReveal text="A IA não cria marcas." />
          <br />
          <span className="text-praia-yellow">
            <WordReveal text="Pessoas criam." />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mx-auto mt-10 max-w-2xl text-lg font-light text-white/60 md:text-xl"
        >
          Uma experiência sobre tecnologia, identidade e o patrimônio que
          construímos juntos há nove décadas.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 p-2"
        >
          <div className="h-2 w-1 rounded-full bg-praia-yellow" />
        </motion.div>
      </motion.div>
    </section>
  );
}
