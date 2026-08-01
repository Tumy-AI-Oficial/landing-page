"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Returns true if the device is a mobile touch device.
 *  On mobile touch devices, native inertia scrolling is hardware-accelerated
 *  by iOS/Android, so we let the browser handle touch natively.
 *  On Desktop Safari / Mac Trackpads, Lenis handles smooth wheel scrolling. */
function shouldDisableLenis(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined")
    return false;

  return (
    ("ontouchstart" in window) ||
    navigator.maxTouchPoints > 0 ||
    window.innerWidth < 768
  );
}

export default function SmoothScroll() {
  useEffect(() => {
    // Skip Lenis on touch devices and Safari — native scroll is faster there
    if (shouldDisableLenis()) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
