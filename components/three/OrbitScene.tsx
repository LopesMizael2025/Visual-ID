"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AMARELO = "#F4D800";

function Ring({
  radius,
  tilt,
  speed,
}: {
  radius: number;
  tilt: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.015, 16, 128]} />
      <meshBasicMaterial color={AMARELO} transparent opacity={0.55} />
    </mesh>
  );
}

function Orbiters() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        radius: 2.4 + (i % 4) * 0.45,
        angle: (i / 28) * Math.PI * 2,
        speed: 0.12 + (i % 5) * 0.05,
        size: 0.04 + (i % 3) * 0.035,
        y: ((i % 7) - 3) * 0.12,
        white: i % 6 === 0,
      })),
    []
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.08 + pointer.current.x * 0.3;
    g.rotation.x = Math.sin(t * 0.15) * 0.12 - pointer.current.y * 0.2;
  });

  return (
    <group ref={group}>
      <Ring radius={2.9} tilt={[Math.PI / 2.4, 0.2, 0]} speed={0.05} />
      <Ring radius={3.5} tilt={[Math.PI / 1.9, -0.35, 0.3]} speed={-0.04} />
      {dots.map((d, i) => (
        <Dot key={i} {...d} />
      ))}
    </group>
  );
}

function Dot({
  radius,
  angle,
  speed,
  size,
  y,
  white,
}: {
  radius: number;
  angle: number;
  speed: number;
  size: number;
  y: number;
  white: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + angle;
    const m = ref.current;
    if (!m) return;
    m.position.set(
      Math.cos(t) * radius,
      y + Math.sin(t * 1.7) * 0.18,
      Math.sin(t) * radius
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={white ? "#FFFFFF" : AMARELO} />
    </mesh>
  );
}

export default function OrbitScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Orbiters />
      </Canvas>
    </div>
  );
}
