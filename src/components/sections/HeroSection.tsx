"use client";

import React from "react";
import { GlowingButton } from "../ui/GlowingButton";
import { SplineHeroScene } from "../3d/SplineHeroScene";
import { ScrollReveal } from "../animations/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative pt-48 pb-32 px-6 flex flex-col items-start max-w-7xl mx-auto min-h-screen justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE2IDBINHYxNmgxMlYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.02] pointer-events-none"></div>

      <div className="relative z-10 w-full lg:w-2/3 flex flex-col items-start gap-8">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-3 bg-secondary-container/10 border-l border-secondary px-4 py-2">
            <span className="w-2 h-2 bg-tertiary-container animate-pulse rounded-full"></span>
            <span className="font-label text-sm uppercase text-secondary tracking-[0.1em]">
              &gt; System initialized. Awaiting routing protocols...
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-on-surface drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            Orchestrate Autonomous Agents in the Void
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="w-full">
          <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full max-w-md">
            <GlowingButton variant="primary" className="flex-1">
              Deploy Swarm
            </GlowingButton>
            <GlowingButton variant="secondary" className="flex-1">
              Read Docs
            </GlowingButton>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4} className="w-full">
        <SplineHeroScene />
      </ScrollReveal>
    </section>
  );
}
