"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TerminalSection() {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-20 [perspective:1000px]">
      <motion.div
        style={{ rotateX }}
        className="w-full bg-surface-container-low border-t border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out"
      >
        <div className="bg-surface-container-highest px-4 py-3 flex items-center gap-3 border-b border-surface-container-lowest">
          <div className="w-3 h-3 bg-error rounded-full"></div>
          <div className="w-3 h-3 bg-[#f5a623] rounded-full"></div>
          <div className="w-3 h-3 bg-tertiary-container rounded-full"></div>
          <div className="ml-auto font-label text-xs text-outline-variant uppercase tracking-widest">
            admin@orchestrator:~
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">
          <div className="col-span-1 border-r border-surface-container-lowest bg-surface-container-lowest/50 p-6 flex flex-col gap-4">
            <h3 className="font-headline text-sm text-outline uppercase tracking-widest border-b border-outline-variant/50 pb-2">
              Active Nodes
            </h3>
            <div className="flex items-center justify-between p-3 bg-surface-container-high/50 border-l-2 border-tertiary-container">
              <span className="font-label text-on-surface text-sm">Node_Alpha_01</span>
              <span className="w-2 h-2 bg-tertiary-container rounded-full animate-pulse shadow-[0_0_10px_#33fb0a]"></span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container-lowest hover:bg-surface-container-high/50 transition-colors border-l-2 border-transparent hover:border-primary-container">
              <span className="font-label text-outline text-sm">Node_Beta_02</span>
              <span className="w-2 h-2 bg-primary-container rounded-full opacity-50"></span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 p-6 font-label text-sm flex flex-col gap-2 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-container-low pointer-events-none"></div>
            <TerminalTyper />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TerminalTyper() {
  const fullLog = [
    { text: "> initializing swarm protocol v2.4...", color: "text-tertiary-container opacity-80" },
    { text: "> establishing secure shell connection...", color: "text-tertiary-container opacity-80" },
    { text: "> connection established.", color: "text-tertiary-container opacity-80" },
    { text: "> Node_Alpha_01 executing payload [0x4f2A]...", color: "text-primary opacity-90" },
    { text: "> [WARN] latency detected on sub-routine B.", color: "text-secondary opacity-90" },
    { text: "> rerouting traffic through proxy node...", color: "text-tertiary-container opacity-80" },
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < fullLog.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, [fullLog.length]);

  return (
    <>
      {fullLog.slice(0, visibleLines).map((line, i) => (
        <p key={i} className={line.color}>
          {line.text}
        </p>
      ))}
      <p className="text-tertiary-container opacity-80 mt-4 flex items-center">
        &gt; awaiting input<span className="w-2 h-4 bg-tertiary-container inline-block ml-1 animate-pulse"></span>
      </p>
    </>
  );
}
