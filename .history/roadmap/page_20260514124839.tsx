"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RoadmapPage() {

  const [generated, setGenerated] =
    useState(false);

  const roadmapPhases = [
    {
      title: "Programming Foundations",
      duration: "2 Weeks",
      topics: [
        "HTML & CSS",
        "JavaScript",
        "Git & GitHub",
      ],
    },
    {
      title: "Frontend Development",
      duration: "4 Weeks",
      topics: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      title: "Backend Engineering",
      duration: "4 Weeks",
      topics: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Authentication",
      ],
    },
    {
      title: "Real-World Projects",
      duration: "3 Weeks",
      topics: [
        "EdTech Platform",
        "Dashboard UI",
        "AI SaaS Clone",
      ],
    },
    {
      title: "Interview Preparation",
      duration: "2 Weeks",
      topics: [
        "DSA",
        "Resume Building",
        "Mock Interviews",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-32 relative overflow-hidden">

      {/* Glow Background */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-bold">
            AI CAREER PLANNER
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">

            Build Your
            <span className="gradient-text">
              {" "}AI Learning Journey
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed">

            Generate personalized learning paths based on your
            career goals, current skills, and learning capacity.

          </p>

        </motion.div>

        {/* INPUT SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20 glass-island rounded-[3rem] border border-white/10 p-8 md:p-12"
        >

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Career Goal */}

            <div className="space-y-3">

              <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                Career Goal
              </label>

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none">

                <option>Full Stack Developer</option>
                <option>AI Engineer</option>
                <option>Cyber Security</option>
                <option>Data Analyst</option>

              </select>

            </div>

            {/* Skill Level */}

            <div className="space-y-3">

              <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                Current Skill Level
              </label>

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none">

                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>

              </select>

            </div>

            {/* Study Time */}

            <div className="space-y-3">

              <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                Daily Study Time
              </label>

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none">

                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>4 Hours</option>

              </select>

            </div>

            {/* Learning Style */}

            <div className="space-y-3">

              <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                Learning Style
              </label>

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none">

                <option>Video Based</option>
                <option>Project Based</option>
                <option>Assignment Based</option>

              </select>

            </div>

            {/* Timeline */}

            <div className="space-y-3">

              <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                Target Timeline
              </label>

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none">

                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>

              </select>

            </div>

          </div>

          {/* BUTTON */}

          <button
            onClick={() =>
              setGenerated(true)
            }
            className="mt-10 px-10 py-5 rounded-2xl bg-blue-600 font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]"
          >

            Generate AI Roadmap

          </button>

        </motion.div>

        {/* GENERATED ROADMAP */}

        {generated && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-24 space-y-10"
          >

            {/* AI ANALYSIS */}

            <div className="glass-island rounded-[3rem] border border-blue-500/20 bg-blue-500/5 p-10 relative overflow-hidden">

              <div className="absolute top-0 right-0 text-8xl opacity-10">
                🤖
              </div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-bold">
                AI ANALYSIS
              </p>

              <h2 className="text-4xl font-black mt-4">
                You Can Become Job Ready
                in ~6 Months 🚀
              </h2>

              <p className="text-gray-400 mt-6 text-lg max-w-3xl leading-relaxed">

                Based on your selected learning preferences,
                the AI engine recommends a project-driven roadmap
                focused on frontend engineering,
                backend systems,
                and real-world deployments.

              </p>

            </div>

            {/* PHASES */}

            <div className="space-y-8">

              {roadmapPhases.map(
                (phase, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="glass-island rounded-[2.5rem] border border-white/10 p-8 md:p-10"
                  >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                      <div>

                        <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold">

                          Phase {index + 1}

                        </p>

                        <h2 className="text-3xl font-black mt-3">

                          {phase.title}

                        </h2>

                      </div>

                      <div className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold">

                        {phase.duration}

                      </div>

                    </div>

                    {/* TOPICS */}

                    <div className="flex flex-wrap gap-4 mt-8">

                      {phase.topics.map(
                        (topic, i) => (

                          <div
                            key={i}
                            className="px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold"
                          >

                            {topic}

                          </div>
                        )
                      )}

                    </div>

                    {/* PROGRESS */}

                    <div className="mt-10">

                      <div className="flex justify-between text-sm text-gray-400 mb-3">

                        <span>
                          Learning Progress
                        </span>

                        <span>
                          0%
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: "30%",
                          }}
                          transition={{
                            duration: 1,
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />

                      </div>

                    </div>

                  </motion.div>
                )
              )}

            </div>

          </motion.div>
        )}

      </div>

    </main>
  );
}