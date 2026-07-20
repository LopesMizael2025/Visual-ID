"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "@/components/ui/Reveal";

const FRASES = [
  { texto: "1935", delay: 1.8, dur: 2.1, grande: true },
  { texto: "Uma marca começou aqui.", delay: 4.2, dur: 1.9, grande: false },
  { texto: "Mais de nove décadas depois...", delay: 6.4, dur: 1.9, grande: false },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [etapa, setEtapa] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setEtapa(1), 9700),
      window.setTimeout(() => setEtapa(2), 10500),
      window.setTimeout(() => setEtapa(3), 11500),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let alvo = 0;
    let atual = 0;
    let raf = 0;
    let dur = 0;

    const temMouse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    const reduzMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMeta = () => {
      dur = v.duration || 8;
      if (!temMouse) {
        // Mobile/touch: sem mouse para o scrub — o video roda em loop suave
        if (!reduzMotion) {
          v.loop = true;
          v.play().catch(() => {});
        } else {
          v.pause();
          v.currentTime = 0;
        }
        return;
      }
      v.pause();
      v.currentTime = 0;
    };

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth;
      if (dur > 0) alvo = (1 - nx) * Math.max(dur - 0.08, 0);
    };

    const loop = () => {
      if (!temMouse) {
        raf = requestAnimationFrame(loop);
        return;
      }
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

      <div className="absolute inset-0 bg-praia-black/45" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.7)_82%)]"
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.18, 0.18, 0] }}
        transition={{ duration: 9.2, times: [0, 0.195, 0.25, 0.89, 1], ease: "easeInOut" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
        {FRASES.map((f) => (
          <motion.h2
            key={f.texto}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -12],
              scale: [0.98, 1, 1, 1.005],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(6px)"],
            }}
            transition={{ delay: f.delay, duration: f.dur, times: [0, 0.3, 0.78, 1], ease: "easeInOut" }}
            className={`absolute text-balance text-center font-semibold tracking-tightest text-white ${
              f.grande
                ? "text-8xl md:text-9xl"
                : "text-4xl md:text-6xl lg:text-7xl"
            }`}
          >
            {f.texto}
          </motion.h2>
        ))}
      </div>

      {etapa >= 1 && (
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-praia-yellow"
          >
            Praia Clube &middot; Marketing &middot; Desde 1935
          </motion.p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tightest md:text-7xl lg:text-8xl">
            <WordReveal text="A IA n&atilde;o cria marcas." />
            <br />
            <span className="text-praia-yellow">
              {etapa >= 2 ? <WordReveal text="Pessoas criam." /> : <span>&nbsp;</span>}
            </span>
          </h1>

          <motion.p
            initial={false}
            animate={{ opacity: etapa >= 3 ? 1 : 0, y: etapa >= 3 ? 0 : 14 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="mx-auto mt-10 max-w-2xl text-lg font-light text-white/60 md:text-xl"
          >
            Uma experi&ecirc;ncia sobre tecnologia, identidade e o patrim&ocirc;nio que
            constru&iacute;mos juntos h&aacute; nove d&eacute;cadas.
          </motion.p>
        </motion.div>
      )}

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
