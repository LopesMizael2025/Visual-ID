"use client";

import { useCallback, useRef, useState } from "react";

export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Sem direção",
  afterLabel = "Com identidade",
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition((p) => Math.max(4, p - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPosition((p) => Math.min(96, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(4);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(96);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] outline-none focus-visible:ring-2 focus-visible:ring-praia-yellow"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) updateFromClientX(e.clientX);
      }}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Comparador antes e depois — use as setas do teclado para ajustar"
    >
      {/* Depois (fundo) */}
      <div className="absolute inset-0">{after}</div>
      <span className="absolute bottom-4 right-4 z-10 rounded-full bg-praia-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-praia-black">
        {afterLabel}
      </span>

      {/* Antes (recortado) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Alça */}
      <div
        className="absolute inset-y-0 z-20 w-px bg-white/80"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-praia-black shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M5 3L1 8l4 5M11 3l4 5-4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
