"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RoadmapPage() {
  const [generated, setGenerated] = useState(false);

  const roadmapPhases = [
    { 
      title: "Programming Foundations", 
      duration: "2 Weeks", 
      topics: ["HTML & CSS", "JavaScript", "Git & GitHub"] 
    },
    { 
      title: "Frontend Development", 
      duration: "4 Weeks", 
      topics: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"] 
    },
    { 
      title: "Backend Engineering", 
      duration: "4 Weeks", 
      topics: ["Node.js", "Express.js", "MongoDB", "Authentication"] 
    },
    { 
      title: "Real-World Projects", 
      duration: "3 Weeks", 
      topics: ["EdTech Platform", "Dashboard UI", "AI SaaS Clone"] 
    },
    { 
      title: "Interview Preparation", 
      duration: "2 Weeks", 
      topics: ["DSA", "Resume Building", "Mock Interviews"] 
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-32 relative overflow-hidden">
      
      {/* 1. PREMIUM BACKGROUND DESIGN */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Career Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10">
            Build your <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 text-blue-500 text-cyan-400">AI Learning Journey</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Generate personalized learning paths based on your career goals, current skills, and learning capacity.
          </p>
        </motion.div>

        {/* 2. DYNAMIC INPUT COMMAND CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-20 glass-island rounded-[3.5rem] border border-white/5 p-1 bg-white/5 shadow-2xl"
        >
          <div className="bg-black/40 backdrop-blur-3xl rounded-[3.4rem] p-8 md:p-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { label: "Career Goal", options: ["Full Stack Developer", "AI Engineer", "Cyber Security", "Data Analyst"] },
                { label: "Skill Level", options: ["Beginner", "Intermediate", "Advanced"] },
                { label: "Study Time", options: ["1 Hour", "2 Hours", "4 Hours"] },
                { label: "Learning Style", options: ["Video Based", "Project Based", "Assignment Based"] },
                { label: "Timeline", options: ["3 Months", "6 Months", "1 Year"] }
              ].map((field) => (
                <div key={field.label} className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">{field.label}</label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-500/50 transition-all text-sm font-bold appearance-none cursor-pointer">
                    {field.options.map(opt => <option key={opt} className="bg-black">{opt}</option>)}
                  </select>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setGenerated(true)}
                className="group relative px-12 py-5 rounded-full bg-blue-600 text-white font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(37,99,235,0.3)]"
              >
                Generate AI Roadmap
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3. THE GENERATED PATHWAY */}
        <AnimatePresence>
          {generated && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-32 space-y-16"
            >
              {/* AI ANALYSIS SUMMARY */}
              <div className="glass-island rounded-[3rem] border border-blue-500/10 bg-blue-500/[0.03] p-12 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-[12rem] opacity-5 font-black pointer-events-none italic">AI</div>
                <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-bold relative z-10">AI ANALYSIS</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tightest mt-4 leading-none relative z-10">
                  You Can Become Job Ready <br /> in <span className="text-blue-500 text-cyan-400">~6 Months 🚀</span>
                </h2>
                <p className="text-gray-400 mt-6 text-lg max-w-3xl leading-relaxed font-medium relative z-10">
                  Based on your selected learning preferences, the AI engine recommends a project-driven roadmap focused on frontend engineering, backend systems, and real-world deployments.
                </p>
              </div>

              {/* TIMELINE PHASES */}
              <div className="relative pl-8 md:pl-0 space-y-12">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

                {roadmapPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-center justify-between w-full md:gap-20 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Phase Node Circle */}
                    <div className="absolute left-[-35px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-black md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20" />

                    <div className="w-full md:w-[45%] glass-island rounded-[2.5rem] border border-white/5 p-8 md:p-10 hover:border-blue-500/20 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Phase 0{index + 1}</span>
                        <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400">{phase.duration}</span>
                      </div>
                      <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors">{phase.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {phase.topics.map(topic => (
                          <span key={topic} className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          <span>Learning Progress</span>
                          <span>0%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "30%" }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty space on opposite side for desktop layout */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}