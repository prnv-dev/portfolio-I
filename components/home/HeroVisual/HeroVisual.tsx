"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import SceneLoader from "@/components/home/SceneLoader/SceneLoader";
import { sceneState } from "@/components/home/HeroScene/sceneState";
import styles from "./HeroVisual.module.css";

// three.js only downloads when the full scene is actually going to render.
const HeroScene = dynamic(() => import("@/components/home/HeroScene/HeroScene"), {
  ssr: false,
  loading: () => <SceneLoader />,
});

type Mode = "pending" | "scene" | "static";

interface DeviceHints extends Navigator {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
}

function pickMode(): Mode {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.matchMedia("(max-width: 899px)").matches;
  const nav = navigator as DeviceHints;
  const lowPower =
    (nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 4 || nav.connection?.saveData === true;
  let webgl = false;
  try {
    webgl = !!document.createElement("canvas").getContext("webgl2");
  } catch {
    webgl = false;
  }
  return reduce || small || lowPower || !webgl ? "static" : "scene";
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("pending");
  const [active, setActive] = useState(true);

  useEffect(() => setMode(pickMode()), []);

  // Only render frames while the hero is on screen.
  useEffect(() => {
    if (mode !== "scene" || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mode]);

  // Pointer parallax feeds the camera (desktop scene only).
  useEffect(() => {
    if (mode !== "scene") return;
    const onMove = (event: PointerEvent) => {
      sceneState.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      sceneState.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mode]);

  return (
    <div ref={ref} className={styles.visual} aria-hidden="true">
      {mode === "scene" ? <HeroScene active={active} /> : null}
      {mode === "static" ? (
        <Image src="/hero/core-static.svg" alt="" fill unoptimized sizes="100vw" className={styles.still} />
      ) : null}
    </div>
  );
}
