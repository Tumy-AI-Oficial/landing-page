"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ─── Node generation ────────────────────────────────────────────

interface NodeData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  basePos: THREE.Vector3;
  size: number;
  phase: number;
}

interface EdgeData {
  from: number;
  to: number;
}

interface PulseData {
  edge: number;
  progress: number;
  speed: number;
  direction: number; // 1 or -1
}

function generateNodes(count: number, spread: number): NodeData[] {
  const nodes: NodeData[] = [];
  for (let i = 0; i < count; i++) {
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread * 0.6
    );
    nodes.push({
      position: pos.clone(),
      basePos: pos.clone(),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.001
      ),
      size: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return nodes;
}

function generateEdges(
  nodes: NodeData[],
  maxDist: number,
  maxEdgesPerNode: number
): EdgeData[] {
  const edges: EdgeData[] = [];
  const edgeCount = new Map<number, number>();

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = nodes[i].basePos.distanceTo(nodes[j].basePos);
      if (dist < maxDist) {
        const countI = edgeCount.get(i) || 0;
        const countJ = edgeCount.get(j) || 0;
        if (countI < maxEdgesPerNode && countJ < maxEdgesPerNode) {
          edges.push({ from: i, to: j });
          edgeCount.set(i, countI + 1);
          edgeCount.set(j, countJ + 1);
        }
      }
    }
  }
  return edges;
}

function generatePulses(edgeCount: number, count: number): PulseData[] {
  const pulses: PulseData[] = [];
  for (let i = 0; i < count; i++) {
    pulses.push({
      edge: Math.floor(Math.random() * edgeCount),
      progress: Math.random(),
      speed: 0.3 + Math.random() * 0.5,
      direction: Math.random() > 0.5 ? 1 : -1,
    });
  }
  return pulses;
}

// ─── Network nodes scene ────────────────────────────────────────

function NetworkScene({ darkMode }: { darkMode: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const color = darkMode ? "#ffffff" : "#000000";
  const nodeColor = new THREE.Color(color);

  // Generate network data
  const { nodes, edges, pulseData } = useMemo(() => {
    const n = generateNodes(45, 4);
    const e = generateEdges(n, 2.0, 4);
    const p = generatePulses(e.length, 20);
    return { nodes: n, edges: e, pulseData: p };
  }, []);

  // Node positions buffer (animated)
  const nodePositions = useRef<Float32Array>(
    new Float32Array(nodes.length * 3)
  );
  const nodeSizes = useRef<Float32Array>(
    new Float32Array(nodes.length)
  );

  // Edge line segments
  const edgePositions = useRef<Float32Array>(
    new Float32Array(edges.length * 6)
  );

  // Pulse positions
  const pulsePositionsRef = useRef<Float32Array>(
    new Float32Array(pulseData.length * 3)
  );
  const pulsesRef = useRef(pulseData);

  // Node geometry
  const nodeGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(nodes.length * 3);
    const sizes = new Float32Array(nodes.length);
    nodes.forEach((n, i) => {
      pos[i * 3] = n.position.x;
      pos[i * 3 + 1] = n.position.y;
      pos[i * 3 + 2] = n.position.z;
      sizes[i] = n.size;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    nodePositions.current = pos;
    nodeSizes.current = sizes;
    return geo;
  }, [nodes]);

  // Edge geometry
  const edgeGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(edges.length * 6);
    edges.forEach((e, i) => {
      const from = nodes[e.from].position;
      const to = nodes[e.to].position;
      pos[i * 6] = from.x;
      pos[i * 6 + 1] = from.y;
      pos[i * 6 + 2] = from.z;
      pos[i * 6 + 3] = to.x;
      pos[i * 6 + 4] = to.y;
      pos[i * 6 + 5] = to.z;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    edgePositions.current = pos;
    return geo;
  }, [edges, nodes]);

  // Pulse geometry
  const pulseGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(pulseData.length * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pulsePositionsRef.current = pos;
    return geo;
  }, [pulseData]);

  // Animation loop
  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();

    // Rotate whole group slowly
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    }

    // Animate node positions (organic floating)
    const posAttr = nodeGeo.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const px = node.basePos.x + Math.sin(t * 0.5 + node.phase) * 0.08;
      const py =
        node.basePos.y + Math.sin(t * 0.4 + node.phase * 1.3) * 0.08;
      const pz =
        node.basePos.z + Math.cos(t * 0.3 + node.phase * 0.7) * 0.05;

      node.position.set(px, py, pz);
      posAttr.setXYZ(i, px, py, pz);
    }
    posAttr.needsUpdate = true;

    // Animate edges to follow nodes
    const edgeAttr = edgeGeo.getAttribute(
      "position"
    ) as THREE.BufferAttribute;
    for (let i = 0; i < edges.length; i++) {
      const from = nodes[edges[i].from].position;
      const to = nodes[edges[i].to].position;
      edgeAttr.setXYZ(i * 2, from.x, from.y, from.z);
      edgeAttr.setXYZ(i * 2 + 1, to.x, to.y, to.z);
    }
    edgeAttr.needsUpdate = true;

    // Animate pulses traveling along edges
    const pulseAttr = pulseGeo.getAttribute(
      "position"
    ) as THREE.BufferAttribute;
    const pulses = pulsesRef.current;
    for (let i = 0; i < pulses.length; i++) {
      const p = pulses[i];
      p.progress += delta * p.speed * p.direction;

      // Loop pulse
      if (p.progress > 1) {
        p.progress = 0;
        p.edge = Math.floor(Math.random() * edges.length);
        p.speed = 0.3 + Math.random() * 0.5;
      } else if (p.progress < 0) {
        p.progress = 1;
        p.edge = Math.floor(Math.random() * edges.length);
        p.speed = 0.3 + Math.random() * 0.5;
      }

      const edge = edges[p.edge];
      if (edge) {
        const from = nodes[edge.from].position;
        const to = nodes[edge.to].position;
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;
        const z = from.z + (to.z - from.z) * p.progress;
        pulseAttr.setXYZ(i, x, y, z);
      }
    }
    pulseAttr.needsUpdate = true;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Nodes */}
        <points geometry={nodeGeo}>
          <pointsMaterial
            color={color}
            size={0.06}
            sizeAttenuation
            transparent
            opacity={0.9}
          />
        </points>

        {/* Edges */}
        <lineSegments geometry={edgeGeo}>
          <lineBasicMaterial
            color={color}
            transparent
            opacity={0.12}
          />
        </lineSegments>

        {/* Traveling pulses */}
        <points geometry={pulseGeo}>
          <pointsMaterial
            color={color}
            size={0.08}
            sizeAttenuation
            transparent
            opacity={0.7}
          />
        </points>

        {/* Central glow node (larger, brighter) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.08} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.03} />
        </mesh>
      </group>
    </Float>
  );
}

export default function WireframeGlobe({
  darkMode = true,
}: {
  darkMode?: boolean;
}) {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <NetworkScene darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
