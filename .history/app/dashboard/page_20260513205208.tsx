"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

// Simulated User Data (In a real app, this comes from your Auth Provider/Database)
const USER_PROFILE = {
  name: "Samuel Victor",
  role: "Final Year B.Tech (CSE)",
  level: "Pro Developer",
  avatar: "SV",
  attendance: "94%",
  assignments: "18/20",
  certificates: "4"
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-24 flex">
        
        {/* SIDEBAR: Personalized for Samuel */}
        <aside className="hidden lg:flex w-76 flex-col p-6 fixed h-[calc(100vh-6rem)]">
          <div className="glass-island rounded-[2.5rem] border border-white/5 h-full p-8 flex flex-col justify-between">
            <div className="space-y-10">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Workspace</p>
                <h2 className="text-white font-black text-xl tracking-tighter">Nexora Central</h2>
              </div>

              <nav className="space-y-3">
                {["Overview", "My Courses", "Projects", "Certificates"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${
                      activeTab === item.toLowerCase() 
                      ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <div className={`w-1 h-4 rounded-full transition-all ${activeTab === item.toLowerCase() ? "bg-blue-500" : "bg-transparent"}`} />
                    <span className="text-sm font-bold tracking-tight">{item}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* REAL USER PROFILE DETAILS */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
                {USER_PROFILE.avatar}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black text-white truncate">{USER_PROFILE.name}</p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{USER_PROFILE.level}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN DASHBOARD CONTENT */}
        <section className="flex-1 lg:ml-76 p-6 lg:p-12 space-y-12">
          
          {/* Header with Personalized Greeting */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-black text-white tracking-tighter leading-none">
                Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{USER_PROFILE.name.split(' ')[0]}</span>
              </h1>
              <p className="text-gray-500 font-medium text-lg">{USER_PROFILE.role}</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-3xl border border-white/5">
                <div className="px-5 py-2.5 rounded-2xl bg-white text-black font-bold text-xs shadow-xl active:scale-95 transition-all cursor-pointer">
                    View Roadmap
                </div>
            </div>
          </header>

          {/* BENTO STATS - Using Real Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Attendance", value: USER_PROFILE.attendance, accent: "text-green-400", bg: "bg-green-500/5" },
              { label: "Assignments", value: USER_PROFILE.assignments, accent: "text-blue-400", bg: "bg-blue-500/5" },
              { label: "Certificates", value: USER_PROFILE.certificates, accent: "text-purple-400", bg: "bg-purple-500/5" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative overflow-hidden glass-island p-8 rounded-[2.5rem] border border-white/5 ${stat.bg}`}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">{stat.label}</p>
                <h2 className={`text-5xl font-black tracking-tighter ${stat.accent}`}>{stat.value}</h2>
                <div className="absolute top-4 right-6 text-2xl opacity-20 group-hover:opacity-100 transition-opacity">⚡</div>
              </motion.div>
            ))}
          </div>

          {/* RECENT ACTIVITY & AI INSIGHT */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-500" /> Current Progress
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "Next.js 15 Masterclass", progress: 75, color: "from-blue-500 to-cyan-400" },
                  { name: "AI-Powered Threat Detection", progress: 40, color: "from-purple-500 to-pink-400" }
                ].map((course, i) => (
                  <motion.div 
                    key={i} 
                    className="glass-island p-6 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{course.name}</h4>
                      <span className="text-xs font-black text-gray-500">{course.progress}% Completed</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${course.color}`} 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI MENTOR CARD */}
            <div className="relative group overflow-hidden glass-island rounded-[3rem] border border-blue-500/20 bg-blue-500/5 p-10 flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">🤖</div>
                <h3 className="text-xl font-black text-white leading-tight">AI Insights for {USER_PROFILE.name.split(' ')[0]}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Based on your interest in **Cyber Security** and your B.Tech focus, you are ready for the **Advanced Encryption** module.
                </p>
                <button className="w-full mt-4 py-4 rounded-2xl bg-white text-black font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all">
                  Start Next Lesson
                </button>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}