"use client";

import { motion } from "framer-motion";

export default function LiveClassesPage() {

  const liveClasses = [
    {
      title: "React.js Masterclass",
      mentor: "Samuel Victor",
      time: "Today • 7:00 PM",
      level: "Intermediate",
      students: "1.2K Students",
      status: "Live Soon",
    },
    {
      title: "AI & Prompt Engineering",
      mentor: "Nexora AI",
      time: "Tomorrow • 6:30 PM",
      level: "Beginner",
      students: "2.8K Students",
      status: "Trending",
    },
    {
      title: "System Design Fundamentals",
      mentor: "Industry Mentor",
      time: "Saturday • 5:00 PM",
      level: "Advanced",
      students: "950 Students",
      status: "Popular",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative px-6 py-32">

      {/* BACKGROUND */}

      <div className="absolute inset-0 z-0">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

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
          className="text-center max-w-4xl mx-auto"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 mb-8">

            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">

              LIVE LEARNING EXPERIENCE

            </span>

          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">

            Live Mentor
            <br />

            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">

              Sessions

            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mt-10 max-w-3xl mx-auto">

            Learn directly from expert mentors through
            immersive live sessions,
            collaborative workshops,
            and AI-powered interactive learning.

          </p>

        </motion.div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">

          {[
            {
              value: "120+",
              label: "Weekly Live Classes",
            },
            {
              value: "50K+",
              label: "Active Learners",
            },
            {
              value: "24/7",
              label: "AI Mentor Support",
            },
          ].map((stat, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className="glass-island rounded-[2.5rem] border border-white/10 p-10 text-center"
            >

              <h2 className="text-5xl font-black text-white">

                {stat.value}

              </h2>

              <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-xs font-bold">

                {stat.label}

              </p>

            </motion.div>
          ))}

        </div>

        {/* LIVE CLASSES */}

        <div className="mt-28">

          <div className="flex items-center justify-between flex-wrap gap-6">

            <div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                UPCOMING LIVE SESSIONS
              </p>

              <h2 className="text-5xl font-black mt-4">
                Learn With Experts
              </h2>

            </div>

            <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-black text-sm">

              View Full Schedule

            </button>

          </div>

          {/* CLASS CARDS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            {liveClasses.map((item, i) => (

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
                  y: -8,
                }}
                className="group relative glass-island rounded-[3rem] border border-white/10 overflow-hidden"
              >

                {/* GLOW */}

                <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* TOP */}

                <div className="p-8 relative z-10">

                  <div className="flex items-center justify-between">

                    <div className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-[0.2em]">

                      {item.status}

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">

                      🎥

                    </div>

                  </div>

                  <h3 className="text-3xl font-black mt-10 leading-tight">

                    {item.title}

                  </h3>

                  <div className="space-y-5 mt-10">

                    {/* MENTOR */}

                    <div className="flex items-center justify-between">

                      <span className="text-gray-500 text-sm">
                        Mentor
                      </span>

                      <span className="font-bold text-white">
                        {item.mentor}
                      </span>

                    </div>

                    {/* TIME */}

                    <div className="flex items-center justify-between">

                      <span className="text-gray-500 text-sm">
                        Schedule
                      </span>

                      <span className="font-bold text-white">
                        {item.time}
                      </span>

                    </div>

                    {/* LEVEL */}

                    <div className="flex items-center justify-between">

                      <span className="text-gray-500 text-sm">
                        Level
                      </span>

                      <span className="font-bold text-cyan-400">
                        {item.level}
                      </span>

                    </div>

                    {/* STUDENTS */}

                    <div className="flex items-center justify-between">

                      <span className="text-gray-500 text-sm">
                        Enrolled
                      </span>

                      <span className="font-bold text-white">
                        {item.students}
                      </span>

                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="flex gap-4 mt-10">

                    <button className="flex-1 py-4 rounded-2xl bg-blue-600 font-black hover:scale-[1.03] transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">

                      Join Session

                    </button>

                    <button className="px-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all">

                      Details

                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* FEATURE SECTION */}

        <div className="mt-32">

          <div className="glass-island rounded-[3rem] border border-white/10 p-12 md:p-20 relative overflow-hidden">

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]"></div>

            <div className="grid lg:grid-cols-2 gap-20 relative z-10">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                  WHY NEXORA LIVE
                </p>

                <h2 className="text-5xl font-black mt-6 leading-tight">

                  Interactive Learning,
                  Powered by AI.

                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mt-8">

                  Experience real-time mentorship,
                  collaborative coding,
                  doubt-solving,
                  and immersive workshops
                  designed to accelerate your learning journey.

                </p>

              </div>

              {/* RIGHT */}

              <div className="space-y-6">

                {[
                  "Real-time mentor interaction",
                  "AI-powered learning suggestions",
                  "Attendance & performance tracking",
                  "Collaborative coding workshops",
                  "Career-focused live sessions",
                ].map((feature, i) => (

                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black">

                      ✓

                    </div>

                    <span className="font-semibold text-lg text-white">

                      {feature}

                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}