"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-44 pb-24 px-6 overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. Cinematic Spotlight Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* 2. Interactive Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-40 z-20 hidden lg:block"
      >
        <div className="glass-island px-6 py-4 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl">
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Live Stats</p>
          <h2 className="text-3xl font-black text-white mt-1">98<span className="text-blue-500">%</span></h2>
          <p className="text-[11px] text-gray-400">AI Accuracy Achieved</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] bottom-40 z-20 hidden lg:block"
      >
        <div className="glass-island p-4 rounded-full border border-white/10 flex items-center gap-3 pr-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">AI</div>
          <span className="text-xs text-gray-300 font-medium tracking-tight">Nexora Intelligence Active</span>
        </div>
      </motion.div>

      {/* 3. Main Content Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Subtle Badge */}
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

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8"
        >
          Build the future, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            one byte at a time.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-12"
        >
          Elevate your engineering journey with AI-driven learning paths and high-performance developer tools designed for Nexora's ecosystem.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95">
            Get Started
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-2">
            View Syllabus 
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}