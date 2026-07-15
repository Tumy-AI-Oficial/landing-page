"use client";

import React, { useEffect, useRef, useState } from "react";
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

export default function ScrollFrameVideo({ containerRef }: ScrollFrameVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstImage, setFirstImage] = useState<HTMLImageElement | null>(null);
  
  const initIsMobile = getIsMobile();
  const [isMobile, setIsMobile] = useState(initIsMobile);
  const [canvasRes, setCanvasRes] = useState(initIsMobile ? 450 : 1000);

  const totalFrames = 240;
  
  // Mobile Optimization: Load fewer frames on mobile to preserve CPU & bandwidth
  const step = isMobile ? 3 : 2;
  const framesCount = Math.floor(totalFrames / step);

  // Listen to resize events dynamically
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCanvasRes(mobile ? 450 : 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optimized Preloading: Load first frame immediately, load rest in small batches in ref (zero re-renders)
  useEffect(() => {
    // 1. Load the first frame immediately for instant visual rendering (no blank screen)
    const firstImg = new Image();
    firstImg.src = "/frames/frame_000.webp";
    firstImg.onload = () => {
      setFirstImage(firstImg);
    };

    // 2. Load the remaining frames in small batches using ref to prevent React state update loops
    const startPreloading = () => {
      const loadedImages = imagesRef.current;
      loadedImages.length = framesCount;
      let currentIndex = 0;
      const batchSize = isMobile ? 3 : 6; // Heavy throttle on mobile

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
              // Larger gap between batches on mobile to keep main thread completely idle
              setTimeout(loadNextBatch, isMobile ? 150 : 30);
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

    // Start background preloading after a short 200ms delay
    const timeout = setTimeout(startPreloading, 200);
    return () => clearTimeout(timeout);
  }, [framesCount, step, isMobile]);

  // Monitor scroll progress of the parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply smooth spring physics to the scroll progress (only used on desktop)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 24,
    restDelta: 0.001
  });

  // Map progress to frame index. On mobile, bypass useSpring completely to avoid double-smoothing lag and save CPU
  const progressToUse = isMobile ? scrollYProgress : smoothProgress;
  const frameIndex = useTransform(progressToUse, [0, 1], [0, framesCount - 1]);

  // Render on canvas when frame index changes or images finish loading
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (latestFrame: number) => {
      const idx = Math.min(
        framesCount - 1,
        Math.max(0, Math.round(latestFrame))
      );
      
      // Fallback Engine: If target image is not loaded yet, find the closest loaded frame from ref
      let img: HTMLImageElement | null = imagesRef.current[idx] || null;
      if (!img || !img.complete) {
        let found = false;
        // Search left and right for the nearest completed frame in ref
        for (let offset = 1; offset < framesCount; offset++) {
          const leftIdx = idx - offset;
          const rightIdx = idx + offset;
          const leftImg = imagesRef.current[leftIdx];
          const rightImg = imagesRef.current[rightIdx];
          if (leftIdx >= 0 && leftImg && leftImg.complete) {
            img = leftImg;
            found = true;
            break;
          }
          if (rightIdx < framesCount && rightImg && rightImg.complete) {
            img = rightImg;
            found = true;
            break;
          }
        }
        if (!found) {
          img = firstImage;
        }
      }

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the image centered and scaled
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        
        ctx.drawImage(img, x, y, w, h);
      }
    };

    // Listen to changes in frame index
    const unsubscribe = frameIndex.on("change", (val) => {
      requestAnimationFrame(() => drawFrame(val));
    });

    // Draw initial frame if ready
    if (firstImage) {
      drawFrame(0);
    }

    return () => unsubscribe();
  }, [firstImage, framesCount, frameIndex]);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[380px] md:min-h-[700px]">
      <canvas
        ref={canvasRef}
        width={canvasRes} // Optimized dynamically: 450 on mobile, 1000 on desktop
        height={canvasRes}
        className="w-[380px] h-[380px] md:w-[700px] md:h-[700px] object-contain filter invert dark:invert-0 brightness-[0.85] dark:brightness-100 contrast-[1.15] dark:contrast-100 drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_35px_80px_rgba(255,255,255,0.06)]"
      />
    </div>
  );
}
