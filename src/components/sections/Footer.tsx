"use client";

import React from "react";
import { ScrollReveal } from "../animations/ScrollReveal";

export function Footer() {
  return (
    <footer className="w-full border-t border-cyan-900/30 bg-[#131313] flex flex-col items-center justify-center pt-24 pb-12 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/10 via-surface-dim/0 to-transparent pointer-events-none"></div>

      <ScrollReveal delay={0.1}>
        <div className="text-[12vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-400 opacity-20 font-headline uppercase tracking-tighter mb-12 text-center pointer-events-none select-none">
          INITIALIZE<br />YOUR SWARM
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="relative z-10 w-full flex justify-center">
        <button className="bg-surface-container-highest border border-outline-variant text-on-surface font-headline font-bold uppercase px-12 py-5 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all mb-24">
          Commence Sequence
        </button>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-8 font-headline uppercase tracking-[0.2em] text-sm mb-12 z-10">
        <a className="text-zinc-600 hover:text-zinc-300 hover:tracking-widest transition-all duration-500" href="#">Protocol</a>
        <a className="text-zinc-600 hover:text-zinc-300 hover:tracking-widest transition-all duration-500" href="#">Secure Shell</a>
        <a className="text-zinc-600 hover:text-zinc-300 hover:tracking-widest transition-all duration-500" href="#">Neural Link</a>
        <a className="text-zinc-600 hover:text-zinc-300 hover:tracking-widest transition-all duration-500" href="#">Support</a>
      </div>

      <div className="font-label text-xs text-zinc-600 uppercase tracking-widest z-10">
        © {new Date().getFullYear()} ORCHESTRATOR.AI // NEON MONOLITH SYSTEM
      </div>
    </footer>
  );
}
