"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  Sparkles,
  Trophy,
  Users,
  ArrowUpRight
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Learning Intelligence",
    desc: "Personalized learning paths powered by adaptive AI systems that evolve with your progress.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Briefcase,
    title: "Career-Focused Training",
    desc: "Industry-ready projects and real-world engineering workflows designed for local and global markets.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Trophy,
    title: "Certificates & Achievements",
    desc: "Earn verified credentials and showcase your verified technical skills to top-tier recruiters.",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: Users,
    title: "Live Mentor Support",
    desc: "Direct guidance from professionals who have built systems at scale for leading tech firms.",
    color: "from-emerald-500 to-teal-400"
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#050505]">
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: STRATEGIC HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md mb-10">
              <Sparkles size={14} className="text-blue-400" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-black text-blue-400">
                WHY NEXORA AI
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tightest text-white mb-10">
              Designed for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30">
                Future Engineers
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Nexora AI integrates high-performance learning architecture with real-world project deployment to bridge the gap between B.Tech and the industry.
            </p>

            {/* QUICK METRICS */}
            <div className="grid grid-cols-2 gap-4 mt-16">
              {[
                { value: "50K+", label: "Students" },
                { value: "120+", label: "Live Classes" },
                { value: "95%", label: "Completion" },
                { value: "4.9", label: "Rating" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-4xl font-black text-white tracking-tighter">{item.value}</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-[9px] font-bold mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: FEATURE CARDS */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl p-10 flex gap-8 transition-all duration-500"
                >
                  {/* AMBIENT ICON GLOW */}
                  <div className={`absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`} />
                  
                  <div className="w-20 h-20 rounded-[1.75rem] bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-blue-500/50 transition-colors">
                    <Icon size={32} className="text-white group-hover:text-blue-400 transition-all duration-500" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <ArrowUpRight size={20} className="text-gray-700 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base pr-4">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}