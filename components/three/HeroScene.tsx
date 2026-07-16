"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AMARELO = "#F4D800";
const PRETO = "#130F14";

export function FloatMesh({
  position,
  speed = 1,
  children,
}: {
  position: [number, number, number];
  speed?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const g = ref.current;
    if (!g) return;
    g.position.y = position[1] + Math.sin(t) * 0.28;
    g.rotation.x = t * 0.25;
    g.rotation.y = t * 0.35;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

export function InteractiveGroup({
  children,
  intensity = 1,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += (pointer.current.x * 0.3 * intensity - g.rotation.y) * 0.04;
    g.rotation.x += (-pointer.current.y * 0.2 * intensity - g.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

function ScrollParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    const sy = typeof window !== "undefined" ? window.scrollY : 0;
    g.position.y += (sy * 0.003 - g.position.y) * 0.08;
    g.position.z += (-sy * 0.0015 - g.position.z) * 0.08;
  });
  return <group ref={ref}>{children}</group>;
}

export function BrandLights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 7, 5]} intensity={1.2} />
      <pointLight position={[-6, -4, 3]} intensity={0.6} color={AMARELO} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 9], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <BrandLights />
        <ScrollParallax>
          <InteractiveGroup>
            {/* Composição enxuta: três formas, longe do texto */}
            <FloatMesh position={[4.1, 1.2, -1.4]} speed={0.55}>
              <mesh>
                <torusGeometry args={[0.95, 0.32, 32, 72]} />
                <meshPhysicalMaterial
                  color={AMARELO}
                  roughness={0.25}
                  clearcoat={1}
                  clearcoatRoughness={0.2}
                />
              </mesh>
            </FloatMesh>

            <FloatMesh position={[-4.3, 0.4, -1]} speed={0.45}>
              <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                  color={PRETO}
                  roughness={0.3}
                  metalness={0.3}
                  clearcoat={1}
                  clearcoatRoughness={0.25}
                />
              </mesh>
            </FloatMesh>

            <FloatMesh position={[3.1, -1.9, 0.2]} speed={0.75}>
              <mesh>
                <sphereGeometry args={[0.4, 48, 48]} />
                <meshStandardMaterial color="#FFFFFF" roughness={0.35} />
              </mesh>
            </FloatMesh>
          </InteractiveGroup>
        </ScrollParallax>
      </Canvas>
    </div>
  );
}
