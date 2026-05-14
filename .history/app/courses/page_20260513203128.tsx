"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const COURSES = [
  { id: 1, title: "Next.js 15 Masterclass", category: "Web Dev", level: "Advanced", price: "Free", icon: "⚛️" },
  { id: 2, title: "AI-Powered Cyber Defense", category: "Security", level: "Intermediate", price: "Premium", icon: "🛡️" },
  { id: 3, title: "Machine Learning Foundations", category: "AI/ML", level: "Beginner", price: "Free", icon: "🤖" },
  { id: 4, title: "Advanced Tailwind v4", category: "Design", level: "Professional", price: "Premium", icon: "🎨" },
  { id: 5, title: "Network Threat Detection", category: "Security", level: "Advanced", price: "Free", icon: "📡" },
  { id: 6, title: "Framer Motion Magic", category: "Design", level: "Intermediate", price: "Free", icon: "✨" },
];

const CATEGORIES = ["All", "Web Dev", "Security", "AI/ML", "Design"];

export default function CoursesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = COURSES.filter(course => 
    (filter === "All" || course.category === filter) &&
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20 px-6"></main>
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header & Search Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Explore <span className="text-gray-500">Courses</span>
            </h1>
            <p className="text-gray-400 font-medium">Curated paths for modern engineers.</p>
          </div>

          {/* Search Bar - Apple Style */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Search technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-xl"
            />
          </div>
        </div>

        {/* 2. Category Filter - Scrollable on Mobile */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                filter === cat 
                ? "bg-white text-black border-white" 
                : "bg-white/5 text-gray-400 border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative glass-island rounded-[2.5rem] border border-white/5 p-8 flex flex-col h-[380px] hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                      {course.level}
                    </span>
                  </div>

                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{course.category}</p>
                  <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-lg font-bold text-white">{course.price}</span>
                    <button className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-lg">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">No courses found matching your search.</p>
          </div>
        )}
      </div>
    </main>
    </>
  );
}