"use client";

// PLACEHOLDER 3D ASSET: there is no modelled .glb yet. The "core" is built from
// primitives — a glass rounded cube, an emissive icosahedron, two torus rings and an
// instanced particle halo — tinted to the blue/cyan palette. Swap in a real model here.

import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";
import { sceneState } from "./sceneState";
import styles from "./HeroScene.module.css";

const BLUE = new THREE.Color("#3b82f6");
const CYAN = new THREE.Color("#22d3ee");
const HALO_COUNT = 380;
const { damp, lerp, clamp } = THREE.MathUtils;

function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

/** Instanced particle shell around the core. */
function Halo({ haloRef }: { haloRef: MutableRefObject<THREE.InstancedMesh | null> }) {
  const data = useMemo(() => {
    const random = seeded(7);
    const dummy = new THREE.Object3D();
    const matrices: THREE.Matrix4[] = [];
    const colors: THREE.Color[] = [];
    for (let i = 0; i < HALO_COUNT; i++) {
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = 2.3 + random() * 1.6;
      dummy.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi) * 0.55,
        radius * Math.sin(phi) * Math.sin(theta) * 0.6,
      );
      dummy.scale.setScalar(0.4 + random() * 0.9);
      dummy.updateMatrix();
      matrices.push(dummy.matrix.clone());
      colors.push(BLUE.clone().lerp(CYAN, random()));
    }
    return { matrices, colors };
  }, []);

  useLayoutEffect(() => {
    const mesh = haloRef.current;
    if (!mesh) return;
    data.matrices.forEach((matrix, i) => mesh.setMatrixAt(i, matrix));
    data.colors.forEach((color, i) => mesh.setColorAt(i, color));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [data, haloRef]);

  return (
    <instancedMesh ref={haloRef} args={[undefined, undefined, HALO_COUNT]} frustumCulled={false}>
      <icosahedronGeometry args={[0.014, 1]} />
      <meshBasicMaterial toneMapped={false} transparent opacity={0.8} />
    </instancedMesh>
  );
}

function Core() {
  const root = useRef<THREE.Group>(null);
  const cube = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.MeshStandardMaterial>(null);
  const halo = useRef<THREE.InstancedMesh | null>(null);
  const entry = useRef({ t: 0 });
  const progress = useRef(0);

  // Entrance: scale + rotate in on an expo ease, independent of scroll.
  useEffect(() => {
    const tween = gsap.to(entry.current, { t: 1, duration: 2.6, delay: 0.2, ease: "expo.out" });
    return () => {
      tween.kill();
    };
  }, []);

  useFrame((state, delta) => {
    if (!root.current || !cube.current || !ringA.current || !ringB.current) return;
    const time = state.clock.elapsedTime;
    const e = entry.current.t;
    progress.current = damp(progress.current, sceneState.progress, 5, delta);
    const p = progress.current;
    const rings = clamp((e - 0.15) / 0.85, 0, 1);

    // entrance + idle float
    root.current.position.x = 0.35 * (1 - p);
    root.current.position.y = (1 - e) * -0.9 + Math.sin(time * 0.6) * 0.07;
    root.current.scale.setScalar(lerp(0.55, 1, e) * (1 + p * 0.2));

    // the cube turns with time (idle) and with scroll (scrub)
    cube.current.rotation.y = -1.2 * (1 - e) + time * 0.12 + p * Math.PI * 0.85;
    cube.current.rotation.x = 0.42 + Math.sin(time * 0.4) * 0.05 + p * 0.45;

    ringA.current.scale.setScalar(rings);
    ringA.current.rotation.set(Math.PI / 2.35 + p * 0.7, 0.18, time * 0.14);
    ringB.current.scale.setScalar(rings);
    ringB.current.rotation.set(Math.PI / 1.85 - p * 0.5, -0.32, -time * 0.09);

    if (halo.current) {
      halo.current.rotation.y = time * 0.025 + p * 0.6;
      halo.current.scale.setScalar(lerp(0.7, 1, e) * (1 + p * 0.55));
    }
    if (inner.current) inner.current.emissiveIntensity = 1.7 + Math.sin(time * 1.3) * 0.25 + p * 0.8;

    // camera: scroll dollies in, pointer adds a small parallax reward
    const camera = state.camera;
    camera.position.x = damp(camera.position.x, sceneState.pointerX * 0.35 - p * 0.5, 3, delta);
    camera.position.y = damp(camera.position.y, -sceneState.pointerY * 0.25 + p * 0.35, 3, delta);
    camera.position.z = lerp(7.4, 4.3, p);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={root}>
      <group ref={cube}>
        <RoundedBox args={[1.3, 1.3, 1.3]} radius={0.16} smoothness={6}>
          <meshPhysicalMaterial
            transmission={1}
            thickness={0.9}
            roughness={0.08}
            ior={1.5}
            color="#eef4ff"
            attenuationColor="#3b82f6"
            attenuationDistance={5}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.4}
          />
        </RoundedBox>
        <mesh>
          <icosahedronGeometry args={[0.34, 2]} />
          <meshStandardMaterial ref={inner} color="#05101c" emissive="#22d3ee" emissiveIntensity={1.8} roughness={0.35} flatShading />
        </mesh>
      </group>
      <mesh ref={ringA}>
        <torusGeometry args={[1.75, 0.01, 16, 240]} />
        <meshBasicMaterial color={BLUE} toneMapped={false} />
      </mesh>
      <mesh ref={ringB}>
        <torusGeometry args={[2.1, 0.005, 12, 240]} />
        <meshBasicMaterial color={CYAN} toneMapped={false} transparent opacity={0.75} />
      </mesh>
      <Halo haloRef={halo} />
    </group>
  );
}

export default function HeroScene({ active }: { active: boolean }) {
  const [ready, setReady] = useState(false);

  return (
    <div className={clsx(styles.canvas, ready && styles.ready)}>
      <Canvas
        dpr={[1, 1.75]}
        frameloop={active ? "always" : "demand"}
        camera={{ position: [0, 0, 7.4], fov: 32, near: 0.1, far: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ invalidate }) => {
          sceneState.invalidate = invalidate;
          requestAnimationFrame(() => setReady(true));
        }}
      >
        <fog attach="fog" args={["#07090c", 7, 16]} />
        <ambientLight intensity={0.15} />
        <directionalLight position={[4, 5, 6]} intensity={1.6} color="#e4ecff" />
        <Suspense fallback={null}>
          <Environment resolution={256} frames={1}>
            <Lightformer form="rect" intensity={3} color="#ffffff" position={[0, 4, -2]} scale={[8, 1.2, 1]} />
            <Lightformer form="rect" intensity={2.6} color="#3b82f6" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[6, 3, 1]} />
            <Lightformer form="rect" intensity={2} color="#22d3ee" position={[5, -1, -1]} rotation-y={-Math.PI / 2} scale={[6, 3, 1]} />
            <Lightformer form="ring" intensity={1.4} color="#ffffff" position={[0, 0, 6]} scale={2.5} />
          </Environment>
          <Core />
        </Suspense>
      </Canvas>
    </div>
  );
}
