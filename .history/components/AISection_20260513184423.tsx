"use client";

import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative">
      
      {/* Background Decorative Element - Moving Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group glass-island rounded-[3rem] p-[1px] overflow-hidden"
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative bg-black/80 backdrop-blur-3xl rounded-[2.9rem] p-12 md:p-20 overflow-hidden">
          
          {/* Top-Right Decorative Mask */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Content Side */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <p className="uppercase tracking-[0.2em] text-cyan-400 text-[10px] font-black">
                  Next-Gen Intelligence
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Your Personal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                  AI Mentor
                </span>
              </h1>

              <p className="text-gray-400 max-w-lg text-lg md:text-xl font-medium leading-relaxed">
                Unlock custom learning paths crafted by AI to match your pace, track every milestone, and navigate your career with data-driven precision.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Generate Roadmap
                </button>
                
                <button className="px-10 py-4 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Visual Side - The "Orbit" Card */}
            <div className="relative flex justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20 pointer-events-none"
              />
              
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -10 }}
                className="relative z-10 w-full max-w-[400px] aspect-square rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Floating UI Simulation */}
                <div className="space-y-4">
                  <div className="h-2 w-20 bg-blue-500/40 rounded-full" />
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                </div>
                
                <div className="relative h-40 w-full bg-blue-500/5 rounded-xl border border-white/5 flex items-center justify-center">
                   <div className="text-4xl">⚡</div>
                   <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-400/10 blur-xl rounded-full" 
                   />
                </div>

                <div className="flex justify-between items-end">
                   <div className="space-y-2">
                     <p className="text-[10px] text-gray-500 uppercase font-bold">Growth Velocity</p>
                     <p className="text-2xl font-black text-white">+240%</p>
                   </div>
                   <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                     🚀
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}