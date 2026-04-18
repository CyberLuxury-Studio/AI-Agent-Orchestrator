"use client";

import React from "react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-headline text-4xl md:text-5xl font-black mb-16 text-center text-on-surface tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          Acquire Bandwidth
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ScrollReveal delay={0.1}>
          <div className="bg-surface-container-low border border-outline-variant/30 p-10 flex flex-col gap-8">
            <div>
              <h3 className="font-headline text-xl text-outline uppercase tracking-widest mb-2">Indie</h3>
              <div className="font-headline text-5xl font-black text-on-surface">Free</div>
            </div>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li className="flex items-center gap-3">
                <Check className="text-outline w-4 h-4" /> 3 Active Nodes
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-outline w-4 h-4" /> Standard Terminal Access
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-outline w-4 h-4" /> Community Support
              </li>
            </ul>
            <button className="w-full py-4 border border-outline/20 text-on-surface font-headline font-bold uppercase hover:bg-surface-container-highest transition-colors mt-8">
              Initialize Basic
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-surface-container-low relative p-10 flex flex-col gap-8 shadow-[0_0_60px_rgba(0,240,255,0.1)] border-t-2 border-t-primary-container transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label text-xs uppercase px-3 py-1 font-bold">
              Recommended
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary-container uppercase tracking-widest mb-2">SaaS Pro</h3>
              <div className="font-headline text-5xl font-black text-on-surface flex items-baseline gap-2">
                $29<span className="text-lg text-outline-variant font-normal">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li className="flex items-center gap-3">
                <Check className="text-primary-container w-4 h-4 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" /> Unlimited Nodes
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-primary-container w-4 h-4 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" /> Priority Log Streaming
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-primary-container w-4 h-4 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" /> Dedicated Neural Link
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all mt-8">
              Upgrade Protocol
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
