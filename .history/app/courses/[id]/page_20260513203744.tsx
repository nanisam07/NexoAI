"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [completedLessons, setCompletedLessons] = useState(2);
  const totalLessons = 10;

  const progress = (completedLessons / totalLessons) * 100;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-28 pb-20 px-4 md:px-10">
        
        {/* Background Aura */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Video & Info (8/12) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Video Player Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video bg-black shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-transparent transition-all cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-[0_0_50px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              {/* Animated Video Ambient Glow */}
              <div className="absolute -inset-2 bg-blue-500/10 blur-3xl opacity-50 pointer-events-none" />
            </motion.div>

            {/* 2. Course Header & Progress */}
            <div className="glass-island p-8 rounded-[2.5rem] border border-white/5 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    Next.js 15 <span className="text-gray-500">Mastery</span>
                  </h1>
                  <p className="text-gray-400 font-medium">Instructor: Nexora Engineering Team</p>
                </div>
                <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95">
                  Enroll for $49.00
                </button>
              </div>

              {/* Progress Tracker */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Course Progress</span>
                  <span className="text-sm font-bold text-white">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* 3. Dynamic Tabs (Quiz/Details) */}
            <div className="flex gap-4 border-b border-white/5 pb-2">
              {['curriculum', 'quiz', 'resources'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-sm font-bold capitalize transition-all relative ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'quiz' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-island p-8 rounded-[2.5rem] border border-white/5"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Module 1 Quiz: Routing Fundamentals</h3>
                  <div className="space-y-4">
                    {["Dynamic Segmenting", "Middleware Hooks", "Parallel Routes"].map((opt, i) => (
                      <label key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-all group">
                        <div className="w-5 h-5 rounded-full border-2 border-white/10 group-hover:border-blue-500 transition-colors" />
                        <span className="text-gray-300 text-sm font-medium">{opt}</span>
                      </label>
                    ))}
                    <button className="mt-4 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all">
                      Submit Answer
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Curriculum Sidebar (4/12) */}
          <div className="lg:col-span-4">
            <div className="glass-island rounded-[2.5rem] border border-white/5 p-6 h-fit sticky top-28">
              <h3 className="text-lg font-black text-white tracking-tighter mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Course Curriculum
              </h3>
              
              <div className="space-y-3">
                {[
                  "Introduction to Next.js 15",
                  "Understanding Server Components",
                  "Client-side State Hydration",
                  "Data Fetching & Caching",
                  "Advanced Layout Patterns",
                  "Security & Middleware"
                ].map((lesson, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer border ${idx < completedLessons ? "bg-blue-500/5 border-blue-500/20" : "bg-white/5 border-transparent hover:bg-white/10"}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${idx < completedLessons ? "bg-blue-500 text-white" : "bg-white/5 text-gray-500"}`}>
                      {idx < completedLessons ? "✓" : idx + 1}
                    </div>
                    <span className={`text-sm font-medium ${idx < completedLessons ? "text-blue-300" : "text-gray-400"}`}>
                      {lesson}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}