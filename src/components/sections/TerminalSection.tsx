"use client"

import { motion } from "framer-motion"
import { Terminal, Crosshair, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { ScrollReveal } from "../animations/ScrollReveal"

export function TerminalSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "agent.deploy({ squad: 'alpha', target: 'data_scraping' })\nagent.status('alpha')\nagent.optimize()";
  
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="terminal">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">
                        <Terminal className="w-3 h-3" />
                        Command Interface
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">
                        Command your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">NPC Army.</span>
                    </h2>
                    <p className="text-white/50 text-lg mb-8">
                        Stop doing the grunt work. Write a few lines of code and deploy an army of autonomous AI agents to farm data, moderate communities, and execute tasks 24/7.
                    </p>
                    
                    <ul className="space-y-4">
                        {[
                            "Deploy up to 1,000 concurrent agents",
                            "Auto-healing and self-correction protocols",
                            "Deep integration with Discord and Twitter",
                            "Real-time telemetry and task tracking"
                        ].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <Crosshair className="w-5 h-5 text-primary" />
                                <span className="text-white/80 font-mono text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                            {/* Fake Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs font-mono text-white/40 font-bold tracking-wider">COMMAND_NODE_V9</span>
                                </div>
                                <div className="w-12 flex justify-end">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                </div>
                            </div>
                            
                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre min-h-[300px]">
                                <div className="text-primary mb-2">root@nexus ~ % <span className="text-white">{typedText}</span><span className="animate-pulse text-primary">_</span></div>
                                {typedText.length === fullText.length && (
                                    <motion.div 
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }} 
                                        transition={{ delay: 0.5 }}
                                        className="mt-4 opacity-80"
                                    >
                                        <p className="text-white/60">[SYS] Authenticating commander...</p>
                                        <p className="text-white/60">[SYS] Access granted.</p>
                                        <p className="text-secondary mt-2">► Initializing Squad Alpha (12 Units)</p>
                                        <p className="text-secondary">► Setting objective: Data Scraping</p>
                                        <p className="text-emerald-400 font-bold mt-2">✓ Squad deployed successfully.</p>
                                        
                                        <div className="mt-4 p-3 border border-white/10 bg-white/5 rounded">
                                            <p className="text-white text-xs mb-2">SQUAD ALPHA STATUS:</p>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-full bg-slate-800 rounded-full h-1.5">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 5, ease: "linear" }}
                                                        className="bg-primary h-1.5 rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-white/50">Task Completion: Calculating...</p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            
            {/* Live Agents Marquee */}
            <div className="mt-32 pt-16 border-t border-white/5 relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                 
                 <div className="text-center mb-10">
                     <span className="text-xs font-mono tracking-widest text-primary uppercase border border-primary/20 bg-primary/5 px-4 py-1 rounded-full">Live Network Activity</span>
                 </div>
                 
                 <div className="flex w-fit animate-[marquee_25s_linear_infinite]">
                     {[...Array(3)].map((_, i) => (
                         <div key={i} className="flex items-center gap-12 px-6">
                             {[
                                 { msg: 'Agent Zero secured objective', color: 'text-emerald-400' },
                                 { msg: 'Squad Bravo training complete', color: 'text-secondary' },
                                 { msg: 'Agent Delta found anomaly', color: 'text-amber-400' },
                                 { msg: 'Squad Charlie resting', color: 'text-white/50' }
                             ].map((activity, j) => (
                                 <div key={j} className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded shadow-lg backdrop-blur-md">
                                     <Zap className={`w-3 h-3 ${activity.color}`} />
                                     <span className={activity.color}>{activity.msg}</span>
                                 </div>
                             ))}
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    </section>
  )
}
