"use client";

import React from "react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { Network, Terminal, Router } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderColorClass: string;
  glowColorClass: string;
  iconColorClass: string;
}

function BentoCard({
  title,
  description,
  icon,
  borderColorClass,
  glowColorClass,
  iconColorClass,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-low border border-outline-variant/20 p-8 flex flex-col gap-6 group hover:border-t hover:-translate-y-2 transition-all duration-300",
        borderColorClass,
        glowColorClass
      )}
    >
      <div
        className={cn(
          "w-12 h-12 bg-surface-container-highest flex items-center justify-center",
          iconColorClass
        )}
      >
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed font-body">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-headline text-4xl md:text-5xl font-black mb-16 text-on-surface tracking-tighter">
          Architectural Supremacy
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ScrollReveal delay={0.1}>
          <BentoCard
            title="Visual Node Mapping"
            description="Construct intricate neural pathways with absolute precision. Our zero-radius graph editor removes the bloat, leaving only pure, actionable data architecture."
            icon={<Network size={24} />}
            borderColorClass="hover:border-t-primary-container"
            glowColorClass="hover:shadow-[0_0_40px_rgba(0,240,255,0.05)]"
            iconColorClass="text-primary-container shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <BentoCard
            title="Real-time Logs"
            description="Monitor system vitals through a low-latency, high-fidelity terminal interface. Filter the noise and observe the raw output of your autonomous agents."
            icon={<Terminal size={24} />}
            borderColorClass="hover:border-t-secondary"
            glowColorClass="hover:shadow-[0_0_40px_rgba(255,179,178,0.05)]"
            iconColorClass="text-secondary shadow-[0_0_20px_rgba(255,179,178,0.1)]"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <BentoCard
            title="Autonomous Routing"
            description="Deploy self-healing networks that automatically reroute packets around dead nodes, ensuring your system remains operational in the most hostile digital environments."
            icon={<Router size={24} />}
            borderColorClass="hover:border-t-tertiary-container"
            glowColorClass="hover:shadow-[0_0_40px_rgba(51,251,10,0.05)]"
            iconColorClass="text-tertiary-container shadow-[0_0_20px_rgba(51,251,10,0.1)]"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
