// Mutable bridge between GSAP (DOM scroll) and the R3F scene. Written by the Hero's
// ScrollTrigger and a pointer listener, read every frame inside useFrame.
export const sceneState = {
  /** 0 → 1 across the pinned hero scroll. */
  progress: 0,
  /** Normalised pointer, -1 → 1 on each axis. */
  pointerX: 0,
  pointerY: 0,
  /** Set by the canvas so DOM code can request a frame when frameloop is "demand". */
  invalidate: (() => {}) as () => void,
};
