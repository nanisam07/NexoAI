"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  PlayCircle,
  Users,
  Video,
  Mic2,
  Sparkles,
  Trophy,
  Flame,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function LiveClassesPage() {
  const upcomingClasses = [
    {
      title: "Next.js SaaS Architecture",
      mentor: "Samuel Victor",
      time: "Today • 7:00 PM",
      duration: "2 Hours",
      students: "1.2K Joined",
      level: "Advanced",
      color: "from-blue-600/20 to-cyan-500/20",
    },
    {
      title: "AI Prompt Engineering",
      mentor: "Nexora AI Mentor",
      time: "Tomorrow • 6:30 PM",
      duration: "1.5 Hours",
      students: "2.8K Joined",
      level: "Beginner",
      color: "from-purple-600/20 to-pink-500/20",
    },
    {
      title: "System Design Bootcamp",
      mentor: "Industry Expert",
      time: "Saturday • 5:00 PM",
      duration: "3 Hours",
      students: "900 Joined",
      level: "Intermediate",
      color: "from-orange-600/20 to-red-500/20",
    },
  ];

  const features = [
    "Interactive Live Coding",
    "Real-Time Mentor Support",
    "Attendance Tracking",
    "AI-Powered Suggestions",
    "Recorded Session Access",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans">
      <Navbar />

      {/* 1. ADVANCED CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-28 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md mb-10">
            <Sparkles size={14} className="text-blue-400" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-blue-400">
              Live Learning Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tightest mb-10">
            Learn <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30">Live</span>
            <br />
            Build <span className="text-blue-500 italic">Faster.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Experience real-time engineering. Join mentor-led sessions and build scalable systems alongside the Nexora community.
          </p>
        </motion.div>

        {/* 2. THE FEATURED "LIVE NOW" BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group glass-island rounded-[4rem] border border-white/5 p-1 bg-gradient-to-br from-white/10 to-transparent transition-all duration-700"
        >
          <div className="bg-[#0A0A0A]/90 backdrop-blur-3xl rounded-[3.9rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="uppercase tracking-[0.3em] text-[10px] font-black text-red-400">LIVE SPRINT</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tightest">
                  Full Stack <br /> <span className="text-gray-500">Engineering.</span>
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                  Master scalable SaaS architecture and deployment workflows in this high-intensity session.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-5 rounded-2xl bg-white text-black font-black text-sm hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)] flex items-center gap-3">
                    <PlayCircle size={18} fill="black" />
                    Join Now
                  </button>
                  <button className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all">
                    View Schedule
                  </button>
                </div>
              </div>

              {/* INTERACTIVE STREAM PREVIEW */}
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5 }}
                className="relative perspective-1000"
              >
                <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-black/60 relative group-hover:border-blue-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle size={40} className="text-white" />
                    </div>
                  </div>
                  
                  {/* DASHBOARD OVERLAY MOCK */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    {[
                      { icon: Users, val: "12K+", lab: "Learners" },
                      { icon: Flame, val: "95%", lab: "Activity" },
                      { icon: Trophy, val: "4.9", lab: "Score" }
                    ].map((m, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 text-center">
                         <m.icon size={14} className="mx-auto text-blue-400 mb-1" />
                         <p className="text-sm font-black">{m.val}</p>
                         <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{m.lab}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 3. UPCOMING SESSIONS GRID */}
        <div className="mt-44 space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.4em] text-blue-500 text-[10px] font-black">Upcoming Roadmap</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic">Live Calendar</h2>
            </div>
            <button className="px-8 py-4 rounded-full border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Full Schedule
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingClasses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group p-1 rounded-[3.5rem] overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <div className="bg-[#0A0A0A] rounded-[3.4rem] p-10 h-full relative overflow-hidden flex flex-col">
                   <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
                   
                   <div className="flex items-center justify-between relative z-10 mb-12">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                       <Video size={20} className="text-blue-400" />
                     </div>
                     <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-gray-400">
                       {item.level}
                     </span>
                   </div>

                   <h3 className="text-3xl font-black text-white tracking-tighter leading-tight mb-10 group-hover:text-blue-400 transition-colors">
                     {item.title}
                   </h3>

                   <div className="space-y-5 mt-auto border-t border-white/5 pt-8">
                     {[
                       { label: "Mentor", val: item.mentor, icon: Users },
                       { label: "Schedule", val: item.time, icon: CalendarDays },
                       { label: "Duration", val: item.duration, icon: Clock3 },
                       { label: "Joined", val: item.students, icon: Users }
                     ].map((info, idx) => (
                       <div key={idx} className="flex items-center justify-between text-[11px] font-bold">
                         <span className="text-gray-500 uppercase tracking-widest">{info.label}</span>
                         <span className="text-white text-right">{info.val}</span>
                       </div>
                     ))}
                   </div>

                   <div className="mt-10 flex gap-3">
                     <button className="flex-1 py-4 rounded-2xl bg-white text-black font-black text-xs hover:scale-105 active:scale-95 transition-all shadow-xl">
                       Join session
                     </button>
                     <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                       <Mic2 size={18} />
                     </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. REINFORCED "WHY LIVE" SECTION */}
        <div className="mt-44 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 p-12 glass-island rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
            <p className="uppercase tracking-[0.4em] text-cyan-400 text-[10px] font-black">Why Nexora Live</p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tightest">
              Interactive <br /> <span className="text-gray-500 text-cyan-400">Collaborative.</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Ask doubts instantly and build real-world skills with immersive, high-bandwidth sessions.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="group flex items-center gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black text-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                <ChevronRight size={18} className="ml-auto text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
    </main>
  );
}