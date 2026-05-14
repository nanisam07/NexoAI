"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";


export default function LiveClassesPage() {
  const liveClasses = [
    { title: "React.js Masterclass", mentor: "Samuel Victor", time: "Today • 7:00 PM", level: "Intermediate", students: "1.2K Students", status: "Live Soon", color: "from-blue-500 to-cyan-400" },
    { title: "AI & Prompt Engineering", mentor: "Nexora AI", time: "Tomorrow • 6:30 PM", level: "Beginner", students: "2.8K Students", status: "Trending", color: "from-purple-500 to-pink-500" },
    { title: "System Design Fundamentals", mentor: "Industry Mentor", time: "Saturday • 5:00 PM", level: "Advanced", students: "950 Students", status: "Popular", color: "from-orange-500 to-yellow-500" },
  ];

  return (
    <><Navbar />
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative px-6 py-32">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
              Live Learning Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10">
            Live Mentor <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              Sessions
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Learn directly from expert mentors through immersive live sessions, collaborative workshops, and AI-powered interactive learning.
          </p>
        </motion.div>

        {/* STATS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            { value: "120+", label: "Weekly Live Classes", icon: "✨" },
            { value: "50K+", label: "Active Learners", icon: "🚀" },
            { value: "24/7", label: "AI Mentor Support", icon: "🤖" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-island rounded-[2.5rem] border border-white/10 p-10 text-center relative group overflow-hidden bg-white/[0.02]"
            >
              <div className="absolute -right-4 -top-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">{stat.icon}</div>
              <h2 className="text-5xl font-black text-white tracking-tighter">{stat.value}</h2>
              <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-[10px] font-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* LIVE CLASS CARDS */}
        <div className="mt-40">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-16">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Upcoming Live Sessions</p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Learn With Experts</h2>
            </div>
            <button className="px-10 py-4 rounded-full border border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all active:scale-95">
              View Full Schedule
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {liveClasses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="group relative glass-island rounded-[3.5rem] border border-white/5 p-1 transition-all"
              >
                {/* DYNAMIC CARD BODY */}
                <div className="bg-[#0A0A0A]/90 rounded-[3.4rem] p-10 overflow-hidden relative">
                  
                  {/* AMBIENT GLOW */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                  <div className="flex items-center justify-between relative z-10">
                    <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-black uppercase tracking-[0.2em]">
                      {item.status}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      🎥
                    </div>
                  </div>

                  <h3 className="text-3xl font-black mt-12 leading-tight text-white tracking-tighter">
                    {item.title}
                  </h3>

                  <div className="space-y-5 mt-10 border-t border-white/5 pt-8">
                    {[
                      { label: "Mentor", val: item.mentor, color: "text-white" },
                      { label: "Schedule", val: item.time, color: "text-white" },
                      { label: "Level", val: item.level, color: "text-cyan-400" },
                      { label: "Enrolled", val: item.students, color: "text-white" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{row.label}</span>
                        <span className={`text-sm font-black ${row.color}`}>{row.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-12">
                    <button className="flex-1 py-4 rounded-2xl bg-white text-black font-black text-xs hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      Join Session
                    </button>
                    <button className="px-6 py-4 rounded-2xl border border-white/10 text-white font-black text-xs hover:bg-white/5 transition-all active:scale-95">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REINFORCED FEATURE SECTION */}
        <div className="mt-44 relative">
          <div className="glass-island rounded-[4rem] border border-white/5 p-12 md:p-24 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            
            <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] -z-10" />

            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-[10px] font-black">Why Nexora Live</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                  Interactive Learning, <br />
                  <span className="text-gray-500">Powered by AI.</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                  Experience real-time mentorship, collaborative coding, and immersive workshops designed to accelerate your engineering journey.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Real-time mentor interaction",
                  "AI-powered learning",
                  "Performance tracking",
                  "Collaborative coding",
                  "Career-focused live sessions",
                  "Industry networking",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/5 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-black group-hover:bg-blue-500 group-hover:text-white transition-all">
                      ✓
                    </div>
                    <span className="font-bold text-xs text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}