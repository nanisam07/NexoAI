"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-black flex items-center">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.3em]">
              Nexora v4.0 is Live
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]"
          >
            Build the future, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              one byte at a time.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-lg text-lg md:text-xl font-medium leading-relaxed mb-12"
          >
            Elevate your engineering journey with AI-driven learning paths and tools designed for Nexora's ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              View Syllabus 
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-gray-400"><path d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Interactive Photo & Floating Cards */}
        <div className="relative flex items-center justify-center lg:justify-end">
          
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineering Future" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Inner-Image Label */}
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-white font-black text-2xl tracking-tighter italic">NEXORA PRO</p>
            </div>
          </motion.div>

          {/* Floating Live Stats Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-12 z-30 hidden sm:block"
          >
            <div className="glass-island px-6 py-4 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl">
              <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Live Stats</p>
              <h2 className="text-3xl font-black text-white mt-1">98<span className="text-blue-500">%</span></h2>
              <p className="text-[11px] text-gray-400">AI Accuracy</p>
            </div>
          </motion.div>

          {/* Decorative Glow behind the image */}
          <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
        </div>

      </div>
    </section>
  );
}