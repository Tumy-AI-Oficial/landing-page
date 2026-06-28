"use client";

import React from "react";

export default function LiquidGlassBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {/* Light Mode Blobs */}
      <div className="absolute inset-0 dark:hidden opacity-18">
        <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-slate-300/20 to-blue-300/20 blur-[90px] animate-float-blob-1" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-300/25 to-cyan-300/20 blur-[110px] animate-float-blob-2" />
        <div className="absolute top-[60%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-slate-300/15 to-neutral-400/15 blur-[80px] animate-float-blob-3" />
      </div>

      {/* Dark Mode Blobs */}
      <div className="hidden dark:block absolute inset-0 opacity-12">
        <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-blue-950/20 to-slate-900/20 blur-[120px] animate-float-blob-1" />
        <div className="absolute bottom-[15%] right-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-cyan-900/15 to-blue-900/20 blur-[130px] animate-float-blob-2" />
        <div className="absolute top-[55%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-slate-900/15 to-zinc-950/20 blur-[100px] animate-float-blob-3" />
      </div>
    </div>
  );
}
