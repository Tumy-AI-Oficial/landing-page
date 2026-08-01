"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Returns true if the device is a touch device or Safari on iOS/iPadOS.
 *  On those devices, the native momentum scroll is GPU-accelerated and
 *  much smoother than a JS RAF loop — so we skip Lenis entirely. */
function shouldDisableLenis(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined")
    return false;

  // Detect touch-primary devices (phones, tablets)
  const isTouch =
    navigator.maxTouchPoints > 0 ||
    ("ontouchstart" in window);

  // Detect Safari (includes iOS WebView)
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return isTouch || isSafari;
}

export default function SmoothScroll() {
  useEffect(() => {
    // Skip Lenis on touch devices and Safari — native scroll is faster there
    if (shouldDisableLenis()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
