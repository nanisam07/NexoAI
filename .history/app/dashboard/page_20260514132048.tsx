"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Brain,
  Calendar,
  Clock3,
  Flame,
  Layers3,
  PlayCircle,
  Sparkles,
  Trophy,
  User2,
} from "lucide-react";

export default function DashboardPage() {

  const stats = [
    {
      title: "Learning Streak",
      value: "84 Days",
      icon: Flame,
      glow: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Courses Active",
      value: "12",
      icon: BookOpen,
      glow: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Certificates",
      value: "08",
      icon: Trophy,
      glow: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "AI Score",
      value: "94%",
      icon: Brain,
      glow: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const courses = [
    {
      title: "Next.js AI SaaS Masterclass",
      progress: 72,
      duration: "12 Hours Left",
    },
    {
      title: "Advanced React Architecture",
      progress: 48,
      duration: "8 Hours Left",
    },
    {
      title: "Cyber Security Fundamentals",
      progress: 90,
      duration: "2 Hours Left",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 z-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      </div>

      <div className="relative z-10 flex">

        {/* SIDEBAR */}

        <aside className="hidden lg:flex w-[290px] min-h-screen border-r border-white/5 backdrop-blur-3xl bg-white/[0.02] flex-col justify-between p-8">

          <div>

            {/* LOGO */}

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)]">

                <span className="font-black text-2xl italic">
                  N
                </span>

              </div>

              <div>

                <h2 className="font-black text-xl tracking-wide">
                  Nexora AI
                </h2>

                <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                  Learning OS
                </p>

              </div>

            </div>

            {/* NAVIGATION */}

            <div className="mt-20 space-y-3">

              {[
                "Dashboard",
                "My Courses",
                "AI Mentor",
                "Live Classes",
                "Certificates",
                "Settings",
              ].map((item, i) => (

                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  key={i}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                    i === 0
                      ? "bg-blue-500/10 border border-blue-500/20 text-white"
                      : "hover:bg-white/[0.03] text-gray-400"
                  }`}
                >

                  <span className="font-semibold">
                    {item}
                  </span>

                  {i === 0 && (
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  )}

                </motion.button>
              ))}

            </div>

          </div>

          {/* PROFILE */}

          <div className="glass-island rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-lg">

                SV

              </div>

              <div>

                <h3 className="font-bold">
                  Samuel Victor
                </h3>

                <p className="text-gray-500 text-sm">
                  Full Stack Learner
                </p>

              </div>

            </div>

          </div>

        </aside>

        {/* MAIN */}

        <section className="flex-1 px-6 lg:px-12 py-10">

          {/* TOPBAR */}

          <div className="flex items-center justify-between gap-6 flex-wrap">

            <div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                Student Intelligence Hub
              </p>

              <h1 className="text-5xl md:text-6xl font-black mt-4 leading-tight">

                Welcome Back,
                <br />

                Samuel 🚀

              </h1>

            </div>

            {/* ACTIONS */}

            <div className="flex items-center gap-4">

              <button className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.05] transition-all">

                <Bell size={20} />

              </button>

              <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] font-bold">

                Upgrade Pro

              </button>

            </div>

          </div>

          {/* HERO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-14 p-10 md:p-14"
          >

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">

                  <Sparkles
                    size={16}
                    className="text-blue-400"
                  />

                  <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

                    AI POWERED LEARNING

                  </span>

                </div>

                <h2 className="text-5xl md:text-6xl font-black leading-[1]">

                  Your Learning
                  <br />

                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">

                    Universe

                  </span>

                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">

                  Track your growth,
                  continue active courses,
                  join live mentor sessions,
                  and unlock AI-driven career intelligence.

                </p>

                <div className="flex flex-wrap gap-5 mt-10">

                  <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition-all font-bold shadow-[0_0_40px_rgba(37,99,235,0.3)]">

                    Continue Learning

                  </button>

                  <button className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all font-bold">

                    Explore Roadmaps

                  </button>

                </div>

              </div>

              {/* RIGHT */}

              <div className="relative">

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="glass-island rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500 text-sm">
                        Weekly Progress
                      </p>

                      <h2 className="text-5xl font-black mt-2">
                        78%
                      </h2>

                    </div>

                    <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                      <Layers3
                        size={34}
                        className="text-blue-400"
                      />

                    </div>

                  </div>

                  <div className="mt-10">

                    <div className="flex justify-between text-sm text-gray-500 mb-3">

                      <span>Growth</span>

                      <span>+24%</span>

                    </div>

                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: "78%",
                        }}
                        transition={{
                          duration: 1.5,
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />

                    </div>

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* STATS */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

            {stats.map((item, i) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8"
                >

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-40`}
                  ></div>

                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">

                      <Icon size={28} />

                    </div>

                    <p className="text-gray-500 mt-8 uppercase tracking-[0.2em] text-xs font-black">

                      {item.title}

                    </p>

                    <h2 className="text-5xl font-black mt-4">

                      {item.value}

                    </h2>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* COURSES + AI */}

          <div className="grid xl:grid-cols-[1.4fr_0.8fr] gap-8 mt-12">

            {/* COURSES */}

            <div className="rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10">

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                    ACTIVE COURSES
                  </p>

                  <h2 className="text-4xl font-black mt-4">
                    Continue Learning
                  </h2>

                </div>

                <button className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all text-sm font-bold">

                  View All

                </button>

              </div>

              <div className="space-y-6 mt-10">

                {courses.map((course, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.01,
                    }}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6"
                  >

                    <div className="flex items-center justify-between gap-6 flex-wrap">

                      <div>

                        <h3 className="text-2xl font-black">
                          {course.title}
                        </h3>

                        <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">

                          <Clock3 size={15} />

                          {course.duration}

                        </div>

                      </div>

                      <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:scale-105 transition-all font-bold flex items-center gap-2">

                        <PlayCircle size={18} />

                        Resume

                      </button>

                    </div>

                    <div className="mt-6">

                      <div className="flex justify-between text-sm text-gray-500 mb-3">

                        <span>Course Progress</span>

                        <span>{course.progress}%</span>

                      </div>

                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${course.progress}%`,
                          }}
                          transition={{
                            duration: 1,
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />

                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* AI MENTOR */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="relative overflow-hidden rounded-[3rem] border border-blue-500/20 bg-blue-500/[0.04] backdrop-blur-3xl p-10"
            >

              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-[100px]"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                  <Brain
                    size={40}
                    className="text-blue-400"
                  />

                </div>

                <p className="uppercase tracking-[0.2em] text-blue-400 text-xs font-black mt-8">
                  AI MENTOR
                </p>

                <h2 className="text-5xl font-black mt-5 leading-tight">

                  Smart Learning
                  Guidance

                </h2>

                <p className="text-gray-400 leading-relaxed mt-8 text-lg">

                  Based on your activity,
                  the AI recommends focusing on
                  backend architecture and real-world
                  SaaS project building this week.

                </p>

                <div className="space-y-4 mt-10">

                  {[
                    "Complete Node.js Roadmap",
                    "Build Authentication Module",
                    "Practice API Integration",
                  ].map((task, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03]"
                    >

                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">

                        {i + 1}

                      </div>

                      <span className="font-medium">
                        {task}
                      </span>

                    </div>
                  ))}

                </div>

                <button className="w-full mt-10 py-5 rounded-2xl bg-blue-600 hover:scale-[1.02] transition-all font-black shadow-[0_0_40px_rgba(37,99,235,0.3)]">

                  Open AI Mentor

                </button>

              </div>

            </motion.div>

          </div>

        </section>

      </div>

    </main>
  );
}