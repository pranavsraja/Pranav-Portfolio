"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Small seeded PRNG (mulberry32). Gives the same "random" layout on every
 * render, which keeps rendering pure (Math.random() in render is flagged).
 */
const seededRandom = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// --- 3D Subtle Architecture Data Sphere ---
const DataSphere = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringRef1 = useRef<THREE.Line>(null);
  const ringRef2 = useRef<THREE.Line>(null);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Subtle, calm neutral tones: silver, grey, graphite
    const c1 = new THREE.Color("#e4e4e7");
    const c2 = new THREE.Color("#a1a1aa");
    const c3 = new THREE.Color("#71717a");

    const radius = 2.4;
    const random = seededRandom(1337);

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const rand = random();
      const chosenColor = rand > 0.6 ? c1 : rand > 0.3 ? c2 : c3;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  const [ringGeo1, ringGeo2] = useMemo(() => {
    const r1Points: THREE.Vector3[] = [];
    const r2Points: THREE.Vector3[] = [];
    const segments = 64;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      r1Points.push(new THREE.Vector3(Math.cos(angle) * 3.1, Math.sin(angle) * 3.1, 0));
      r2Points.push(new THREE.Vector3(Math.cos(angle) * 3.4, 0, Math.sin(angle) * 3.4));
    }

    const g1 = new THREE.BufferGeometry().setFromPoints(r1Points);
    const g2 = new THREE.BufferGeometry().setFromPoints(r2Points);
    return [g1, g2];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04 + mouse.x * 0.12;
      pointsRef.current.rotation.x = -mouse.y * 0.08;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.025;
      ringRef1.current.rotation.x = 0.8 + mouse.y * 0.04;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.03;
      ringRef2.current.rotation.x = 0.3;
    }
  });

  return (
    <group position={[0, 0, -2.8]}>
      <points ref={pointsRef} geometry={geo}>
        <pointsMaterial
          size={0.02}
          vertexColors
          sizeAttenuation
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </points>

      <primitive
        object={new THREE.Line(ringGeo1, new THREE.LineBasicMaterial({ color: "#a1a1aa", transparent: true, opacity: 0.04 }))}
        ref={ringRef1}
      />
      <primitive
        object={new THREE.Line(ringGeo2, new THREE.LineBasicMaterial({ color: "#71717a", transparent: true, opacity: 0.03 }))}
        ref={ringRef2}
      />
    </group>
  );
};

// --- Ambient Micro-Dust ---
const DataDust = () => {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cGrey = new THREE.Color("#a1a1aa");
    const cDim = new THREE.Color("#52525b");
    const random = seededRandom(4242);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (random() - 0.5) * 16;
      pos[i * 3 + 1] = (random() - 0.5) * 14;
      pos[i * 3 + 2] = (random() - 0.5) * 8 - 1;

      const mixed = random() > 0.5 ? cGrey : cDim;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.005;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.012}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.12}
        depthWrite={false}
      />
    </points>
  );
};

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <DataDust />
          <DataSphere />
        </Suspense>
      </Canvas>

      {/* Atmospheric Vignette: Deep at center, calm, architectural */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#07080a_75%)] pointer-events-none" />
    </div>
  );
};

export default NeuralBackground;
