"use client";

import React from "react";

export default function LiquidGlassBackground() {
  return (
    // Hidden on mobile (md:block) — GPU blur animations are too expensive on small devices
    <div className="hidden md:block fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {/* Light Mode Blobs — blur reduced from 80-110px → 50-65px for GPU savings */}
      <div className="absolute inset-0 dark:hidden opacity-18">
        <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-slate-300/20 to-blue-300/20 blur-[55px] animate-float-blob-1 will-change-transform" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-300/25 to-cyan-300/20 blur-[65px] animate-float-blob-2 will-change-transform" />
        <div className="absolute top-[60%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-slate-300/15 to-neutral-400/15 blur-[50px] animate-float-blob-3 will-change-transform" />
      </div>

      {/* Dark Mode Blobs — blur reduced from 100-130px → 60-70px */}
      <div className="hidden dark:block absolute inset-0 opacity-12">
        <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-blue-950/20 to-slate-900/20 blur-[70px] animate-float-blob-1 will-change-transform" />
        <div className="absolute bottom-[15%] right-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-cyan-900/15 to-blue-900/20 blur-[70px] animate-float-blob-2 will-change-transform" />
        <div className="absolute top-[55%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-slate-900/15 to-zinc-950/20 blur-[60px] animate-float-blob-3 will-change-transform" />
      </div>
    </div>
  );
}
