"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function DemoPage() {
  const features = [
    { title: "AI Mentor", desc: "Personalized learning paths and career guidance.", icon: "🤖", color: "from-blue-500 to-cyan-400" },
    { title: "Smart Dashboard", desc: "Real-time tracking of assignments and streaks.", icon: "📊", color: "from-purple-500 to-pink-500" },
    { title: "Adaptive Learning", desc: "Dynamic roadmaps built for your speed.", icon: "⚡", color: "from-orange-400 to-yellow-500" },
    { title: "Live Classes", desc: "Interactive sessions with industry mentors.", icon: "🎥", color: "from-emerald-400 to-cyan-500" },
    { title: "Progress Tracking", desc: "Visual analytics for continuous growth.", icon: "🚀", color: "from-blue-600 to-indigo-600" },
    { title: "Career Intel", desc: "AI interview prep and readiness analysis.", icon: "💼", color: "from-red-400 to-rose-600" },
  ];

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Nexora Showcase</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10">
            See <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">Nexora AI</span> in Action
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Experience the next-generation ecosystem designed to help you build faster and learn smarter.
          </p>
        </motion.div>

        {/* FEATURE BENTO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group glass-island rounded-[2.5rem] border border-white/5 p-10 overflow-hidden bg-white/[0.02]"
            >
              <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tighter mb-3">{feature.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIDEO SHOWCASE: CINEMATIC PLAYER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-40 space-y-12"
        >
          <div className="text-center md:text-left space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Interactive Walkthrough</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Product Experience</h2>
          </div>

          <div className="relative group glass-island rounded-[3.5rem] p-2 border border-white/10 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-[3.6rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="aspect-video relative rounded-[3rem] overflow-hidden bg-black z-10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tn6-PIqc4UM"
                title="Nexora AI Demo"
                allowFullScreen
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>

        {/* THE JOURNEY: STEPPED FLOW */}
        <div className="mt-44 space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-white tracking-tighter">The Nexora Ecosystem</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["LOGIN", "LEARN", "PRACTICE", "TRACK", "GET CERTIFIED"].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-island p-8 rounded-[2rem] border border-white/5 text-center relative group"
              >
                <span className="absolute top-4 right-6 text-xs font-black text-white/10 group-hover:text-blue-500/40 transition-colors">0{i+1}</span>
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center font-black text-blue-400 mb-6 border border-white/10">
                  {i + 1}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FINAL CTA: THE CALL TO ACTION */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          className="mt-44 relative overflow-hidden glass-island rounded-[4rem] border border-white/10 p-16 md:p-24 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[100px] -z-10" />
          <div className="space-y-10 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
              The Future of Learning <br /> Starts Here
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Join thousands of engineers accelerating their growth with Nexora's AI-driven intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/courses" className="px-12 py-5 rounded-full bg-white text-black font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                Enroll Now
              </Link>
              <Link href="/roadmap" className="px-12 py-5 rounded-full border border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all active:scale-95">
                Get Your Roadmap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  );
}