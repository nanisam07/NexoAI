"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">

      {/* Glow Background */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Floating Card */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-10 top-32 glass p-5 rounded-2xl hidden lg:block"
      >
        <p className="text-sm text-gray-400">
          AI Learning Score
        </p>

        <h1 className="text-3xl font-bold gradient-text mt-2">
          98%
        </h1>
      </motion.div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >

        <p className="uppercase tracking-[0.25em] text-cyan-400 text-xs">
          FUTURE OF EDUCATION
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">

          Learn Smarter.
          <br />

          <span className="gradient-text">
            Build Faster.
          </span>

        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          AI-powered learning experiences,
          immersive mentorship,
          and career-focused education built for the next generation.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">

          <button className="px-7 py-3 rounded-xl bg-blue-500 glow font-medium hover:scale-105 transition">
            Explore Courses
          </button>

          <button className="px-7 py-3 rounded-xl glass hover:bg-white/10 transition">
            Live Demo
          </button>

        </div>

      </motion.div>
    </section>
  );
}