"use client";

import { useEffect, useState } from "react";

/** Indicador discreto de progresso da apresentação: "Ato N de VI". */

const ROMANOS = ["I", "II", "III", "IV", "V", "VI"];

export default function ProgressoAtos() {
  const [ato, setAto] = useState(0); // 0 = fora dos atos (hero/encerramento)

  useEffect(() => {
    const alvos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-ato]")
    );
    if (!alvos.length) return;

    const medir = () => {
      const meio = window.innerHeight / 2;
      let atual = 0;
      for (const el of alvos) {
        const r = el.getBoundingClientRect();
        if (r.top <= meio && r.bottom >= meio) {
          atual = Number(el.dataset.ato) || 0;
          break;
        }
      }
      setAto(atual);
    };

    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  if (ato === 0) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 rounded-full bg-black/60 px-4 py-2 backdrop-blur"
      aria-live="polite"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
        Ato {ROMANOS[ato - 1]} de VI
      </p>
      <div className="mt-1.5 h-px w-full bg-white/20">
        <div
          className="h-px bg-praia-yellow transition-all duration-500"
          style={{ width: `${(ato / 6) * 100}%` }}
        />
      </div>
    </div>
  );
}
