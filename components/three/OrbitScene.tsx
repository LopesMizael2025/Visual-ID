"use client";

import { Canvas } from "@react-three/fiber";
import {
  FloatMesh,
  InteractiveGroup,
  BrandLights,
} from "@/components/three/HeroScene";

const AMARELO = "#F4D800";
const PRETO = "#130F14";

/**
 * Fechamento na mesma linguagem da abertura:
 * as mesmas formas da marca, mais discretas, emoldurando o logo.
 */
export default function OrbitScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 9], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <BrandLights />
        <InteractiveGroup intensity={0.7}>
          <FloatMesh position={[-4.2, 1.6, -1.6]} speed={0.4}>
            <mesh>
              <torusGeometry args={[0.8, 0.26, 32, 72]} />
              <meshPhysicalMaterial
                color={AMARELO}
                roughness={0.25}
                clearcoat={1}
                clearcoatRoughness={0.2}
              />
            </mesh>
          </FloatMesh>

          <FloatMesh position={[4.4, -1.4, -1.2]} speed={0.35}>
            <mesh>
              <icosahedronGeometry args={[0.85, 0]} />
              <meshPhysicalMaterial
                color={PRETO}
                roughness={0.3}
                metalness={0.3}
                clearcoat={1}
                clearcoatRoughness={0.25}
              />
            </mesh>
          </FloatMesh>

          <FloatMesh position={[-3.4, -2, 0]} speed={0.6}>
            <mesh>
              <sphereGeometry args={[0.32, 48, 48]} />
              <meshStandardMaterial color="#FFFFFF" roughness={0.35} />
            </mesh>
          </FloatMesh>
        </InteractiveGroup>
      </Canvas>
    </div>
  );
}
