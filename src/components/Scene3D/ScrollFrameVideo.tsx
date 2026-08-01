"use client";

import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollFrameVideoProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const getIsMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
};

// ─── Mobile Static Fallback ───────────────────────────────────────────────────
// On mobile we skip all canvas/frame logic and just show a static image.
// This eliminates ~80 MB of RAM usage and the continuous canvas redraw loop.
function MobileStaticFrame() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[350px]">
      <NextImage
        src="/frames/frame_239.webp"
        alt="Tumy AI molecule"
        width={400}
        height={400}
        priority
        className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] object-contain filter invert dark:invert-0 brightness-[0.95] dark:brightness-100 contrast-[1.08] dark:contrast-100 drop-shadow-[0_25px_50px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_30px_70px_rgba(255,255,255,0.08)]"
      />
    </div>
  );
}

// ─── Desktop Canvas Animation ─────────────────────────────────────────────────
function DesktopScrollCanvas({ containerRef }: ScrollFrameVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstImage, setFirstImage] = useState<HTMLImageElement | null>(null);

  // Reduced from 120 → 80 frames on desktop to cut RAM usage
  const totalFrames = 240;
  const step = 3; // every 3rd frame → 80 frames total
  const framesCount = Math.floor(totalFrames / step);

  // Preloading: first frame immediately, rest in small batches
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = "/frames/frame_239.webp";
    firstImg.onload = () => setFirstImage(firstImg);

    const startPreloading = () => {
      const loadedImages = imagesRef.current;
      loadedImages.length = framesCount;
      let currentIndex = 0;
      const batchSize = 5;

      const loadNextBatch = () => {
        if (currentIndex >= framesCount) return;

        const end = Math.min(currentIndex + batchSize, framesCount);
        let batchLoaded = 0;
        const currentBatchCount = end - currentIndex;

        for (let i = currentIndex; i < end; i++) {
          const img = new Image();
          const frameNum = String(i * step).padStart(3, "0");

          const onFrameLoad = () => {
            batchLoaded++;
            if (batchLoaded === currentBatchCount) {
              currentIndex = end;
              setTimeout(loadNextBatch, 50);
            }
          };

          img.onload = onFrameLoad;
          img.onerror = onFrameLoad;
          img.src = `/frames/frame_${frameNum}.webp`;
          loadedImages[i] = img;
        }
      };

      loadNextBatch();
    };

    // Delay background load 300ms so the first paint is not blocked
    const timeout = setTimeout(startPreloading, 300);
    return () => clearTimeout(timeout);
  }, [framesCount]);

  // Scroll progress → smooth spring → frame index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 24,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, framesCount - 1]);

  // Draw on canvas when frame index changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (latestFrame: number) => {
      const idx = Math.min(framesCount - 1, Math.max(0, Math.round(latestFrame)));

      let img: HTMLImageElement | null = imagesRef.current[idx] || null;
      if (!img || !img.complete) {
        for (let offset = 1; offset < framesCount; offset++) {
          const leftImg = imagesRef.current[idx - offset];
          const rightImg = imagesRef.current[idx + offset];
          if (leftImg?.complete) { img = leftImg; break; }
          if (rightImg?.complete) { img = rightImg; break; }
        }
        if (!img) img = firstImage;
      }

      if (img?.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
      }
    };

    const unsubscribe = frameIndex.on("change", (val) => {
      requestAnimationFrame(() => drawFrame(val));
    });

    if (firstImage) drawFrame(0);

    return () => unsubscribe();
  }, [firstImage, framesCount, frameIndex]);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[380px] md:min-h-[700px]">
      <canvas
        ref={canvasRef}
        width={900}
        height={900}
        className="w-[380px] h-[380px] md:w-[700px] md:h-[700px] object-contain filter invert dark:invert-0 brightness-[0.85] dark:brightness-100 contrast-[1.15] dark:contrast-100 drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_35px_80px_rgba(255,255,255,0.06)]"
      />
    </div>
  );
}

// ─── Main Export: branches mobile vs desktop ──────────────────────────────────
export default function ScrollFrameVideo({ containerRef }: ScrollFrameVideoProps) {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return <MobileStaticFrame />;
  return <DesktopScrollCanvas containerRef={containerRef} />;
}


