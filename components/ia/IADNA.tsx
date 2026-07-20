"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

/** O DNA visual da marca: cada palavra surge lentamente e todas permanecem. */

const dna = [
  "Elegante",
  "Premium",
  "Familiar",
  "Lifestyle",
  "Natural",
  "Editorial",
  "Esportivo",
  "Pertencimento",
];

export default function IADNA() {
  return (
    <section className="bg-praia-paper py-32 text-praia-ink md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-16 text-xs font-semibold uppercase tracking-[0.35em] text-praia-blue">
            DNA visual
          </p>
        </Reveal>

        <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-4 md:gap-x-10">
          {dna.map((palavra, i) => (
            <motion.span
              key={palavra}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-semibold tracking-tightest text-praia-ink/70 md:text-5xl"
            >
              {palavra}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.2, delay: dna.length * 0.25 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-praia-yellow px-3 text-3xl font-semibold tracking-tightest text-praia-ink md:text-5xl"
          >
            Praia Clube
          </motion.span>
        </div>

        <Reveal delay={3} className="mt-20">
          <p className="mx-auto max-w-xl text-lg font-light text-praia-ink/55 md:text-xl">
            Esse é o DNA que toda IA precisa conhecer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
