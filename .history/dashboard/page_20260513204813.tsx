"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Attendance", value: "94%", icon: "📅", color: "from-green-500 to-emerald-400" },
    { label: "Assignments", value: "18/20", icon: "📝", color: "from-blue-500 to-cyan-400" },
    { label: "Certificates", value: "4", icon: "🏆", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-24 flex">
        
        {/* 1. SIDEBAR - Floating Glass Dock */}
        <aside className="hidden lg:flex w-72 flex-col p-6 fixed h-[calc(100vh-6rem)]">
          <div className="glass-island rounded-[2.5rem] border border-white/5 h-full p-6 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="px-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Main Menu</p>
              </div>
              <nav className="space-y-2">
                {["Overview", "My Courses", "Projects", "Settings"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                      activeTab === item.toLowerCase() 
                      ? "bg-white/10 text-white border border-white/10 shadow-xl" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${activeTab === item.toLowerCase() ? "bg-blue-500" : "bg-transparent"}`} />
                    <span className="text-sm font-bold">{item}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Profile Section in Sidebar */}
            <div className="p-4 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              <div>
                <p className="text-xs font-bold text-white">Samuel Victor</p>
                <p className="text-[10px] text-gray-500">Pro Student</p>
              </div>
            </div>
          </div>
        </aside>

        {/* 2. MAIN CONTENT AREA */}
        <section className="flex-1 lg:ml-72 p-6 lg:p-10 space-y-10">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-white tracking-tighter">Student <span className="text-gray-500">Dashboard</span></h1>
              <p className="text-gray-400 font-medium">Welcome back, let's continue your engineering path.</p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </button>
              <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                Upgrade Pro
              </button>
            </div>
          </header>

          {/* 3. BENTO STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-island p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
              >
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                </div>
                <h2 className="text-4xl font-black text-white">{stat.value}</h2>
              </motion.div>
            ))}
          </div>

          {/* 4. MY COURSES & PROGRESS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Courses List (2/3) */}
            <div className="xl:col-span-2 space-y-6">
              <h3 className="text-xl font-black text-white tracking-tight">Active Courses</h3>
              <div className="space-y-4">
                {[
                  { name: "Next.js 15 Masterclass", progress: 75, img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=200" },
                  { name: "AI Cyber Security", progress: 40, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200" }
                ].map((course, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="glass-island p-4 rounded-3xl border border-white/5 flex items-center gap-6 group cursor-pointer"
                  >
                    <img src={course.img} alt="" className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-white">{course.name}</h4>
                        <span className="text-xs font-bold text-blue-500">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${course.progress}%` }}
                          className="h-full bg-blue-600" 
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Career Mentor Suggestion (1/3) */}
            <div className="glass-island rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl">🤖</div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-lg font-black text-white">AI Mentor Suggestion</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Based on your **Cyber Security** progress, I suggest starting the "Network Threat Detection" module next.
                </p>
                <button className="w-full py-3 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all">
                  View Roadmap
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}