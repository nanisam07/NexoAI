"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export default function LiveClassesPage() {

  const upcomingClasses = [
    {
      title: "Next.js SaaS Architecture",
      mentor: "Samuel Victor",
      time: "Today • 7:00 PM",
      duration: "2 Hours",
      students: "1.2K Joined",
      level: "Advanced",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "AI Prompt Engineering",
      mentor: "Nexora AI Mentor",
      time: "Tomorrow • 6:30 PM",
      duration: "1.5 Hours",
      students: "2.8K Joined",
      level: "Beginner",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "System Design Bootcamp",
      mentor: "Industry Expert",
      time: "Saturday • 5:00 PM",
      duration: "3 Hours",
      students: "900 Joined",
      level: "Intermediate",
      color: "from-orange-500/20 to-red-500/20",
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
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      </div>

      <div className="relative z-10 px-6 lg:px-12 py-28 max-w-7xl mx-auto">

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
          className="text-center max-w-5xl mx-auto"
        >

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">

            <Sparkles
              size={16}
              className="text-blue-400"
            />

            <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

              LIVE LEARNING EXPERIENCE

            </span>

          </div>

          <h1 className="text-6xl md:text-8xl font-black mt-10 leading-[0.9] tracking-tight">

            Learn
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Live
            </span>

            <br />

            Build Faster 🚀

          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-10 max-w-3xl mx-auto">

            Join interactive mentor-led sessions,
            collaborate with learners,
            solve real-world problems,
            and accelerate your career growth through immersive live classes.

          </p>

        </motion.div>

        {/* LIVE BANNER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mt-20 p-10 md:p-14"
        >

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">

                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

                <span className="uppercase tracking-[0.2em] text-xs font-black text-red-400">

                  LIVE NOW

                </span>

              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-[1]">

                Full Stack
                <br />

                Engineering Masterclass

              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-8">

                Learn scalable SaaS architecture,
                authentication systems,
                dashboards,
                and deployment workflows directly from mentors.

              </p>

              <div className="flex flex-wrap gap-6 mt-10">

                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition-all font-bold shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center gap-3">

                  <PlayCircle size={20} />

                  Join Live Session

                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all font-bold">

                  View Schedule

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="aspect-video rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center relative">

                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">

                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

                  Streaming

                </div>

                <button className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">

                  <PlayCircle size={42} />

                </button>

              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">

                {[
                  {
                    icon: Users,
                    value: "12K+",
                    label: "Learners",
                  },
                  {
                    icon: Flame,
                    value: "95%",
                    label: "Attendance",
                  },
                  {
                    icon: Trophy,
                    value: "4.9",
                    label: "Rating",
                  },
                ].map((item, i) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                    >

                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto">

                        <Icon
                          size={20}
                          className="text-blue-400"
                        />

                      </div>

                      <h3 className="text-2xl font-black mt-4">

                        {item.value}

                      </h3>

                      <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2">

                        {item.label}

                      </p>

                    </div>
                  );
                })}

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* UPCOMING CLASSES */}

        <div className="mt-24">

          <div className="flex items-center justify-between flex-wrap gap-6">

            <div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                UPCOMING SESSIONS
              </p>

              <h2 className="text-5xl font-black mt-4">
                Live Class Schedule
              </h2>

            </div>

            <button className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all font-bold">

              Explore Calendar

            </button>

          </div>

          <div className="grid xl:grid-cols-3 gap-8 mt-14">

            {upcomingClasses.map((item, i) => (

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
                className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`}
                ></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">

                      <Video size={28} />

                    </div>

                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-black uppercase tracking-[0.2em]">

                      {item.level}

                    </div>

                  </div>

                  <h3 className="text-3xl font-black mt-10 leading-tight">

                    {item.title}

                  </h3>

                  <div className="space-y-5 mt-10">

                    <div className="flex items-center gap-4 text-gray-400">

                      <UserIcon />

                      {item.mentor}

                    </div>

                    <div className="flex items-center gap-4 text-gray-400">

                      <CalendarDays size={18} />

                      {item.time}

                    </div>

                    <div className="flex items-center gap-4 text-gray-400">

                      <Clock3 size={18} />

                      {item.duration}

                    </div>

                    <div className="flex items-center gap-4 text-gray-400">

                      <Users size={18} />

                      {item.students}

                    </div>

                  </div>

                  <div className="flex gap-4 mt-10">

                    <button className="flex-1 py-4 rounded-2xl bg-blue-600 hover:scale-[1.03] transition-all font-bold shadow-[0_0_40px_rgba(37,99,235,0.3)]">

                      Join Session

                    </button>

                    <button className="w-14 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all flex items-center justify-center">

                      <Mic2 size={18} />

                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* FEATURES */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          <div className="rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10">

            <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
              WHY LIVE LEARNING
            </p>

            <h2 className="text-5xl font-black mt-5 leading-tight">

              Interactive
              <br />

              Learning Experience

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">

              Collaborate with mentors,
              participate in live coding,
              ask doubts instantly,
              and build real-world skills with immersive sessions.

            </p>

          </div>

          <div className="space-y-5">

            {features.map((feature, i) => (

              <motion.div
                key={i}
                whileHover={{
                  x: 5,
                }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-6 flex items-center gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black">

                  {i + 1}

                </div>

                <span className="text-lg font-semibold">
                  {feature}
                </span>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}

function UserIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
      <Users size={14} className="text-blue-400" />
    </div>
  );
}