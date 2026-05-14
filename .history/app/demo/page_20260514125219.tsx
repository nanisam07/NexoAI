"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DemoPage() {

  const features = [
    {
      title: "AI Mentor",
      desc: "Personalized AI-driven learning recommendations and career guidance.",
      icon: "🤖",
    },
    {
      title: "Smart Dashboard",
      desc: "Track attendance, assignments, streaks, and certificates in real-time.",
      icon: "📊",
    },
    {
      title: "Adaptive Learning",
      desc: "Dynamic roadmaps generated based on your goals and learning speed.",
      icon: "⚡",
    },
    {
      title: "Live Classes",
      desc: "Interactive live sessions with mentors and collaborative learning.",
      icon: "🎥",
    },
    {
      title: "Progress Tracking",
      desc: "Visual analytics and milestone tracking for continuous growth.",
      icon: "🚀",
    },
    {
      title: "Career Intelligence",
      desc: "AI-powered interview preparation and job-readiness analysis.",
      icon: "💼",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-bold">
            PRODUCT SHOWCASE
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">

            See
            <span className="gradient-text">
              {" "}Nexora AI
            </span>
            {" "}in Action

          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed">

            Explore the next-generation AI-powered learning ecosystem
            designed to help students learn smarter,
            track progress,
            and become industry ready.

          </p>

        </motion.div>

        {/* FEATURE GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {features.map((feature, i) => (

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
              whileHover={{
                y: -8,
              }}
              className="glass-island rounded-[2.5rem] border border-white/10 p-8 relative overflow-hidden group"
            >

              {/* Glow */}

              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">

                  {feature.icon}

                </div>

                <h2 className="text-2xl font-black mt-8">

                  {feature.title}

                </h2>

                <p className="text-gray-400 mt-5 leading-relaxed">

                  {feature.desc}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* VIDEO SHOWCASE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="mt-32"
        >

          <div className="flex items-center justify-between flex-wrap gap-6 mb-10">

            <div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-bold">
                PLATFORM WALKTHROUGH
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-3">

                Product Experience Demo

              </h2>

            </div>

            <div className="px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold">

              Interactive Demo

            </div>

          </div>

          {/* VIDEO CARD */}

          <div className="glass-island rounded-[3rem] border border-white/10 overflow-hidden p-4">

            <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10">

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tn6-PIqc4UM"
                title="Nexora AI Demo"
                allowFullScreen
              />

            </div>

          </div>

        </motion.div>

        {/* PRODUCT FLOW */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="mt-32"
        >

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-bold">
              LEARNING ECOSYSTEM
            </p>

            <h2 className="text-5xl font-black mt-5">

              The Nexora AI Journey

            </h2>

          </div>

          {/* FLOW */}

          <div className="grid md:grid-cols-5 gap-6 mt-16">

            {[
              "Login",
              "Learn",
              "Practice",
              "Track",
              "Get Certified",
            ].map((step, i) => (

              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                }}
                className="glass-island rounded-[2rem] border border-white/10 p-8 text-center relative overflow-hidden"
              >

                <div className="absolute top-0 right-0 text-7xl opacity-5 font-black">
                  0{i + 1}
                </div>

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">

                  {i + 1}

                </div>

                <h3 className="text-xl font-black mt-6">

                  {step}

                </h3>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="mt-32"
        >

          <div className="glass-island rounded-[3rem] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">

            {/* Glow */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-bold">
                START TODAY
              </p>

              <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">

                The Future of Learning
                <br />

                Starts Here 🚀

              </h1>

              <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">

                Join thousands of learners building future-ready skills
                through AI-powered education,
                real-world projects,
                and immersive learning experiences.

              </p>

              <div className="flex justify-center gap-6 mt-12 flex-wrap">

                <Link
                  href="/courses"
                  className="px-10 py-5 rounded-2xl bg-blue-600 font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                >

                  Explore Courses

                </Link>

                <Link
                  href="/roadmap"
                  className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-bold"
                >

                  Generate AI Roadmap

                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </main>
  );
}