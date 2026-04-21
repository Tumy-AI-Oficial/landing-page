"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Dots distributed on a sphere surface (Fibonacci)
function DotSphere({ color, count, radius, speed, opacity, size }: {
  color: string; count: number; radius: number; speed: number; opacity: number; size: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * speed;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color={color} size={size} sizeAttenuation transparent opacity={opacity} />
    </points>
  );
}

// Traveling pulse particles along edges
function EdgePulses({ darkMode }: { darkMode: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const count = 40;
  const color = darkMode ? "#ffffff" : "#000000";

  const { geometry, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = Array.from({ length: count }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: Math.random() * Math.PI,
      radius: 1.3 + Math.random() * 0.3,
      speed: 0.3 + Math.random() * 0.6,
      offset: Math.random() * Math.PI * 2,
    }));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geometry: geo, phases: ph };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const p = phases[i];
      const angle = t * p.speed + p.offset;
      const r = p.radius + Math.sin(angle * 2) * 0.15;
      posAttr.setXYZ(
        i,
        r * Math.sin(p.phi + Math.sin(angle) * 0.5) * Math.cos(p.theta + angle * 0.4),
        r * Math.sin(p.phi + Math.sin(angle) * 0.5) * Math.sin(p.theta + angle * 0.4),
        r * Math.cos(p.phi + Math.sin(angle) * 0.5)
      );
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color={color} size={0.06} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

// Main scene
function GeometricScene({ darkMode }: { darkMode: boolean }) {
  const outerRef = useRef<THREE.Mesh>(null);
  const midRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const color = darkMode ? "#ffffff" : "#000000";
  const dimColor = darkMode ? "#888888" : "#777777";
  const faintColor = darkMode ? "#444444" : "#bbbbbb";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.06;
      outerRef.current.rotation.y = t * 0.1;
    }
    if (midRef.current) {
      midRef.current.rotation.x = -t * 0.08;
      midRef.current.rotation.z = t * 0.12;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = t * 0.2;
      innerRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.12;
      coreRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      const glow = 1 + Math.sin(t * 2) * 0.08;
      glowRef.current.scale.setScalar(glow);
    }

    // Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = 1.2 + Math.sin(t * 0.2) * 0.05;
      ring1Ref.current.rotation.y = t * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = 0.4;
      ring2Ref.current.rotation.z = -0.6;
      ring2Ref.current.rotation.y = -t * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -0.8;
      ring3Ref.current.rotation.z = 0.9;
      ring3Ref.current.rotation.y = t * 0.07;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.15}>
      <group>
        {/* Outer large wireframe */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshBasicMaterial color={faintColor} wireframe transparent opacity={0.08} />
        </mesh>

        {/* Mid wireframe */}
        <mesh ref={midRef}>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshBasicMaterial color={dimColor} wireframe transparent opacity={0.12} />
        </mesh>

        {/* Inner wireframe - more detail */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
        </mesh>

        {/* Solid core */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.85} />
        </mesh>

        {/* Core glow layers */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.06} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.03} />
        </mesh>

        {/* Dot spheres at different layers */}
        <DotSphere color={color} count={800} radius={1.25} speed={0.06} opacity={0.4} size={0.025} />
        <DotSphere color={dimColor} count={300} radius={1.65} speed={-0.04} opacity={0.18} size={0.018} />

        {/* Traveling pulse particles */}
        <EdgePulses darkMode={darkMode} />

        {/* 3 orbital rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.1, 0.006, 4, 120]} />
          <meshBasicMaterial color={dimColor} transparent opacity={0.15} />
        </mesh>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.35, 0.004, 4, 120]} />
          <meshBasicMaterial color={faintColor} transparent opacity={0.1} />
        </mesh>
        <mesh ref={ring3Ref}>
          <torusGeometry args={[2.55, 0.003, 4, 120]} />
          <meshBasicMaterial color={faintColor} transparent opacity={0.06} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ReflectiveSphere({ darkMode = true }: { darkMode?: boolean }) {
  return (
    <div className="w-full h-[400px] md:h-[500px]" style={{ willChange: "transform" }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        frameloop="always"
        resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <GeometricScene darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
