"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { WordReveal } from "@/components/ui/Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [montado, setMontado] = useState(false); // ~5s de vídeo: robô montado

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.18]);

  // Parallax do mouse — ativo desde o início
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  // Conteúdo se move levemente no sentido oposto (profundidade)
  const cx = useTransform(px, (v) => v * -0.35);
  const cy = useTransform(py, (v) => v * -0.35);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * -52);
      my.set((e.clientY / window.innerHeight - 0.5) * -34);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  // Aos 5s de vídeo (robô montado), a opacidade desce para 75%
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let done = false;
    const marcar = () => {
      if (!done) {
        done = true;
        setMontado(true);
      }
    };
    const onTime = () => {
      if (v.currentTime >= 5) marcar();
    };
    const timer = window.setTimeout(marcar, 6000); // fallback
    v.addEventListener("timeupdate", onTime);
    return () => {
      window.clearTimeout(timer);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-praia-black text-white"
    >
      {/* Vídeo de fundo com parallax de mouse */}
      <motion.div
        style={{ x: px, y: py, scale }}
        animate={{ opacity: montado ? 0.75 : 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute inset-0"
        aria-hidden
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src="/hero-bg.mp4"
        />
      </motion.div>

      {/* Véus para legibilidade do texto */}
      <div className="absolute inset-0 bg-praia-black/50" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.7)_80%)]"
        aria-hidden
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
       <motion.div style={{ x: cx, y: cy }}>
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
