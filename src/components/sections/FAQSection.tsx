"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many agents can I deploy simultaneously?",
    answer: "On the Indie plan, you can deploy up to 3 active nodes. The SaaS Pro plan removes all limits, allowing for theoretically infinite swarms restricted only by your processing bandwidth.",
  },
  {
    question: "Do you support custom models?",
    answer: "Yes. ORCHESTRATOR.AI is model-agnostic. You can plug in your own API keys for OpenAI, Anthropic, or run local Llama instances via our secure shell protocol.",
  },
  {
    question: "Is the terminal interface actually functional?",
    answer: "Absolutely. It's not just a visual gimmick. The terminal streams real-time WebSockets data directly from your deployed agents, allowing you to intercept and modify tasks on the fly.",
  },
  {
    question: "How secure is the Neural Link?",
    answer: "All node-to-node communication is encrypted using military-grade protocols. Your prompt vectors and proprietary data never touch our servers unencrypted.",
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-headline text-3xl md:text-5xl font-black mb-12 text-center text-on-surface tracking-tighter">
          Intelligence Query
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div 
              className={`border transition-colors duration-300 ${openIndex === index ? 'border-primary-container bg-surface-container-low/50 shadow-[0_0_20px_rgba(0,240,255,0.05)]' : 'border-outline-variant/30 bg-surface-container-lowest hover:border-outline-variant'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-headline font-bold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary-container" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/20 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
