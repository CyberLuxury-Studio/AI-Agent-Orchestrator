"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { Database, Cpu, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      title: "1. Define Parameters",
      desc: "Input your target vectors and data sources. The orchestrator maps the optimal neural pathways.",
      delay: 0.1,
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary-container" />,
      title: "2. Assign Agents",
      desc: "Allocate specialized autonomous agents to specific nodes. The swarm self-organizes based on task load.",
      delay: 0.2,
    },
    {
      icon: <Zap className="w-8 h-8 text-tertiary-container" />,
      title: "3. Execute Protocol",
      desc: "Launch the swarm. Monitor real-time execution in the terminal as agents solve complex problems at lightspeed.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            Execution Protocol
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-2xl font-body">
            A frictionless deployment sequence designed for high-velocity indie hackers and scaled startups.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-secondary via-primary-container to-tertiary-container opacity-20 -z-10"></div>

        {steps.map((step, idx) => (
          <ScrollReveal key={idx} delay={step.delay}>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {step.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
