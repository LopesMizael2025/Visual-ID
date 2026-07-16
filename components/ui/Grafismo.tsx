"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Grafismo geométrico da identidade visual do Praia Clube
 * (semicírculos, quartos de círculo, triângulos e barras),
 * recriado em SVG a partir do Manual de Identidade Visual.
 */
export default function Grafismo({
  className,
  color = "#F4D800",
  secondary = "#FFFFFF",
}: {
  className?: string;
  color?: string;
  secondary?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* quarto de círculo */}
      <path d="M0 50 A50 50 0 0 1 50 0 L50 50 Z" fill={secondary} />
      {/* retângulo vazado */}
      <rect x="58" y="8" width="34" height="60" stroke={color} strokeWidth="10" />
      {/* semicírculo */}
      <path d="M100 68 A34 34 0 0 1 168 68 Z" fill={color} />
      {/* círculo cheio */}
      <circle cx="184" cy="84" r="16" fill={color} />
      {/* triângulos "ampulheta" */}
      <path d="M8 76 L48 76 L28 106 Z" fill={color} />
      <path d="M8 136 L48 136 L28 106 Z" fill={color} />
      {/* quarto de círculo invertido */}
      <path d="M100 84 L100 144 A60 60 0 0 1 40 84 Z" fill={secondary} />
      {/* barras */}
      <rect x="112" y="112" width="10" height="40" fill={secondary} />
      <rect x="128" y="112" width="10" height="40" fill={secondary} />
      <rect x="144" y="112" width="10" height="40" fill={secondary} />
      {/* triângulo reto */}
      <path d="M164 152 L200 152 L200 116 Z" fill={color} />
      {/* quadradinho */}
      <rect x="12" y="160" width="14" height="14" fill={color} />
      {/* semicírculo inferior */}
      <path d="M60 200 A30 30 0 0 1 120 200 Z" fill={color} transform="rotate(180 90 185)" />
    </motion.svg>
  );
}
