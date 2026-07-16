"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AMARELO = "#F4D800";
const PRETO = "#130F14";

function FloatMesh({
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
    g.position.y = position[1] + Math.sin(t) * 0.35;
    g.rotation.x = t * 0.35;
    g.rotation.y = t * 0.5;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function Scene() {
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
    // Profundidade interativa: o conjunto inclina em direção ao cursor
    g.rotation.y += (pointer.current.x * 0.4 - g.rotation.y) * 0.045;
    g.rotation.x += (-pointer.current.y * 0.28 - g.rotation.x) * 0.045;
    // Parallax 3D no scroll: as formas sobem e afastam ao rolar
    const sy = typeof window !== "undefined" ? window.scrollY : 0;
    g.position.y += (sy * 0.0035 - g.position.y) * 0.08;
    g.position.z += (-sy * 0.002 - g.position.z) * 0.08;
  });

  return (
    <group ref={group}>
      <FloatMesh position={[3.6, 1.3, -1.2]} speed={0.7}>
        <mesh>
          <torusGeometry args={[1.05, 0.36, 32, 72]} />
          <meshPhysicalMaterial
            color={AMARELO}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.2}
          />
        </mesh>
      </FloatMesh>

      <FloatMesh position={[-3.8, 0.8, -0.8]} speed={0.55}>
        <mesh>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshPhysicalMaterial
            color={PRETO}
            roughness={0.28}
            metalness={0.35}
            clearcoat={1}
            clearcoatRoughness={0.25}
          />
        </mesh>
      </FloatMesh>

      <FloatMesh position={[-2.3, -1.9, 0.4]} speed={0.9}>
        <mesh>
          <sphereGeometry args={[0.55, 48, 48]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.35} />
        </mesh>
      </FloatMesh>

      <FloatMesh position={[2.8, -1.7, 0.2]} speed={0.8}>
        <mesh>
          <octahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial
            color={AMARELO}
            roughness={0.25}
            clearcoat={1}
          />
        </mesh>
      </FloatMesh>

      <FloatMesh position={[4.6, -0.4, 1]} speed={1.1}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshPhysicalMaterial color={AMARELO} roughness={0.2} clearcoat={1} />
        </mesh>
      </FloatMesh>

      <FloatMesh position={[-4.9, -0.6, -2]} speed={0.65}>
        <mesh>
          <torusKnotGeometry args={[0.5, 0.16, 96, 16]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.3}
            metalness={0.15}
          />
        </mesh>
      </FloatMesh>
    </group>
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
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 7, 5]} intensity={1.3} />
        <pointLight position={[-6, -4, 3]} intensity={0.7} color={AMARELO} />
        <Scene />
      </Canvas>
    </div>
  );
}
