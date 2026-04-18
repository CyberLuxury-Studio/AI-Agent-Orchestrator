"use client";

import React from "react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl border border-primary-container/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-zinc-950/40 backdrop-blur-md flex justify-between items-center px-6 py-3 z-50 transition-transform hover:scale-95 duration-100 ease-in-out"
    >
      <a
        className="font-headline text-xl font-black tracking-tighter text-primary-container drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        href="#"
      >
        ORCHESTRATOR.AI
      </a>
      <div className="hidden md:flex items-center gap-8 font-headline tracking-tight uppercase text-sm">
        <a className="text-zinc-500 hover:text-primary transition-colors" href="#">
          Features
        </a>
        <a className="text-zinc-500 hover:text-primary transition-colors" href="#">
          Terminal
        </a>
        <a className="text-zinc-500 hover:text-primary transition-colors" href="#">
          Pricing
        </a>
      </div>
      <button className="bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest px-6 py-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,82,92,0.5)] hover:ring-2 ring-secondary-container transition-all">
        Get Early Access
      </button>
    </motion.nav>
  );
}
