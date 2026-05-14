"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Brain,
  Clock3,
  Flame,
  Layers3,
  Link,
  PlayCircle,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Learning Streak", value: "84 Days", icon: Flame, glow: "from-orange-500/20 to-red-500/20" },
    { title: "Courses Active", value: "12", icon: BookOpen, glow: "from-blue-500/20 to-cyan-500/20" },
    { title: "Certificates", value: "08", icon: Trophy, glow: "from-purple-500/20 to-pink-500/20" },
    { title: "AI Score", value: "94%", icon: Brain, glow: "from-green-500/20 to-emerald-500/20" },
  ];

  const courses = [
    { title: "Next.js AI SaaS Masterclass", progress: 72, duration: "12 Hours Left", accent: "blue" },
    { title: "Advanced React Architecture", progress: 48, duration: "8 Hours Left", accent: "purple" },
    { title: "Cyber Security Fundamentals", progress: 90, duration: "2 Hours Left", accent: "cyan" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans">
      
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 flex">
        
        {/* 2. FLOATING GLASS SIDEBAR */}
        <aside className="hidden lg:flex w-[300px] sticky top-0 h-screen border-r border-white/5 backdrop-blur-3xl bg-black/40 flex-col justify-between p-8">
          <div className="space-y-12">
            {/* Logo with Magnetic Hover */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)] group-hover:rotate-12 transition-transform duration-500">
                <span className="font-black text-2xl italic text-white">N</span>
              </div>
              <div className="space-y-0.5">
                <h2 className="font-black text-xl tracking-tighter text-white">NEXORA AI</h2>
                <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Learning OS</p>
              </div>
            </Link>

            {/* Navigation with Active Indicator */}
            <nav className="space-y-2">
              {["Dashboard", "My Courses", "AI Mentor", "Live Classes", "Certificates", "Settings"].map((item, i) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                    i === 0 ? "bg-blue-600/10 border border-blue-500/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.1)]" : "text-gray-500"
                  }`}
                >
                  <span className="font-bold text-sm tracking-tight">{item}</span>
                  {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* User Profile Card */}
          <div className="p-6 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-black text-white shadow-lg">SV</div>
              <div className="overflow-hidden">
                <h3 className="font-black text-sm text-white truncate">Samuel Victor</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">CSE Student</p>
              </div>
            </div>
          </div>
        </aside>

        {/* 3. MAIN COMMAND CENTER CONTENT */}
        <section className="flex-1 px-6 lg:px-16 py-12 space-y-12">
          
          {/* Header & Quick Actions */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.4em] text-cyan-400 text-[10px] font-black">Central Intelligence Hub</p>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Samuel</span> 🚀
              </h1>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                <Bell size={20} />
              </button>
              <button className="px-10 py-4 rounded-2xl bg-white text-black font-black text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95">
                Upgrade Pro
              </button>
            </div>
          </header>

          {/* BENTO STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  className="relative group rounded-[3rem] border border-white/5 bg-white/[0.02] p-10 overflow-hidden transition-all"
                >
                  <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700`} />
                  <div className="relative z-10 space-y-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.title}</p>
                      <h2 className="text-5xl font-black text-white tracking-tighter">{item.value}</h2>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* DUAL CONTENT: LEARNING + AI MENTOR */}
          <div className="grid xl:grid-cols-[1.4fr_0.8fr] gap-10">
            
            {/* ACTIVE COURSES WITH PROGRESS */}
            <div className="glass-island rounded-[4rem] border border-white/10 bg-black/60 p-12 backdrop-blur-3xl space-y-12">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Stream Learning</p>
                  <h2 className="text-4xl font-black text-white tracking-tight">Active Paths</h2>
                </div>
                <button className="text-xs font-black text-gray-500 hover:text-white transition-colors uppercase tracking-widest">View All</button>
              </div>

              <div className="space-y-6">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.title}
                    whileHover={{ x: 12, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                    className="group rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-8 flex flex-col gap-6 transition-all"
                  >
                    <div className="flex justify-between items-start gap-8">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white tracking-tighter leading-tight group-hover:text-blue-400 transition-colors">{course.title}</h3>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          <Clock3 size={12} /> {course.duration}
                        </div>
                      </div>
                      <button className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg active:scale-90 transition-all">
                        <PlayCircle size={24} className="text-white" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-end text-[10px] font-black tracking-widest uppercase">
                        <span className="text-gray-500">Progress Velocity</span>
                        <span className="text-white">{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${course.progress}%` }}
                          transition={{ duration: 1.2, ease: "circOut" }}
                          className={`h-full bg-gradient-to-r ${course.accent === 'blue' ? 'from-blue-600 to-cyan-400' : 'from-purple-600 to-pink-500'}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI MENTOR INTELLIGENCE CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-[4rem] border border-blue-500/20 bg-blue-500/[0.04] p-12 backdrop-blur-3xl group"
            >
              <div className="absolute -top-12 -right-12 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700" />
              <div className="relative z-10 space-y-10">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shadow-inner">
                  <Brain size={40} className="text-blue-400 animate-pulse" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Tactical Guidance</p>
                  <h2 className="text-5xl font-black text-white tracking-tighter leading-none">Smart <br /> Mentorship</h2>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    Samuel, our AI analysis suggests focusing on **Backend Architecture** and **API Security** to complete your current career milestone 12% faster.
                  </p>
                </div>

                <div className="space-y-3">
                  {["Master Node.js Auth", "Build SSL Middleware", "Encrypt User Metadata"].map((task, i) => (
                    <div key={task} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-[10px] font-black text-blue-400">{i + 1}</div>
                      <span className="text-xs font-bold text-gray-300">{task}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-xs hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] active:scale-95 uppercase tracking-widest">
                  Invoke AI Mentor
                </button>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </main>
  );
}