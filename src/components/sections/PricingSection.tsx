"use client"

import { motion } from "framer-motion"
import { Check, Cpu } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"

const plans = [
  {
    name: "Scout Core",
    price: "Free",
    period: "",
    description: "Basic infrastructure to test your first agents.",
    features: [
      "Up to 3 Concurrent Agents",
      "Standard LLM Models",
      "Community Discord Support",
      "Shared Computing Pool",
    ],
    cta: "Initialize Free Core",
    popular: false
  },
  {
    name: "Commander Core",
    price: "$49",
    period: "/mo",
    description: "Serious firepower for automated empire building.",
    features: [
      "Up to 50 Concurrent Agents",
      "Premium LLM Models (GPT-4, Claude 3)",
      "Custom Fine-Tuning",
      "Priority Queue Access",
      "Webhooks & API Access"
    ],
    cta: "Equip Commander Core",
    popular: true
  },
  {
    name: "Overlord Nexus",
    price: "$299+",
    period: "/mo",
    description: "Dedicated infrastructure for enterprise-scale armies.",
    features: [
      "Unlimited Concurrent Agents",
      "Bring Your Own Model (BYOM)",
      "Dedicated GPU Instances",
      "SLA & Priority Support",
      "White-label Dashboard"
    ],
    cta: "Contact High Command",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="pricing">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex justify-center mb-6">
              <Cpu className="w-12 h-12 text-primary opacity-80" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
            Upgrade Your <span className="text-primary">Processing Power</span>
          </h2>
          <p className="text-lg text-white/50">
            Select the core that matches your ambition. No hidden fees.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal delay={index * 0.1} key={plan.name} className="h-full">
                <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                className={`relative h-full rounded-3xl p-8 border ${
                    plan.popular 
                    ? 'border-primary/50 bg-primary/5 shadow-[0_0_40px_rgba(var(--color-primary),0.15)]' 
                    : 'border-white/10 bg-[#0a0a0a] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                } transition-all duration-300 flex flex-col group overflow-hidden`}
                >
                {/* Hover gradient effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.6)] z-20">
                    Optimal Loadout
                    </div>
                )}
                
                <div className="relative z-10 mb-8 border-b border-white/5 pb-8">
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-wide text-white font-mono">{plan.name}</h3>
                    <p className="text-sm text-white/50 mb-6 min-h-[40px]">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      {plan.period && <span className="text-white/30 font-mono">{plan.period}</span>}
                    </div>
                </div>

                <div className="relative z-10 flex-1">
                    <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary' : 'text-white/50'}`} />
                        <span className="font-mono">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="relative z-10 mt-auto">
                    <button 
                        className={`w-full py-5 text-xs font-black uppercase tracking-[0.2em] rounded-xl border border-white/20 transition-all ${plan.popular ? 'bg-primary text-black border-transparent hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--color-primary),0.4)]' : 'bg-transparent text-white hover:bg-white/10'}`}
                    >
                        {plan.cta}
                    </button>
                </div>
                </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
