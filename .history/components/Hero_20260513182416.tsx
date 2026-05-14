"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[700px] h-[700px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Floating Glass Card */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-20 top-40 glass p-6 rounded-3xl hidden lg:block"
      >
        <h1 className="text-xl font-bold">
          AI Learning Score
        </h1>

        <p className="text-5xl font-bold mt-4 gradient-text">
          98%
        </p>
      </motion.div>

      {/* Main Content */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          FUTURE OF EDUCATION
        </p>

        <h1 className="text-7xl md:text-8xl font-bold mt-8 leading-tight">

          Learn Smarter.
          <br />

          <span className="gradient-text">
            Get Hired Faster.
          </span>

        </h1>

        <p className="text-gray-400 mt-10 max-w-3xl mx-auto text-xl leading-relaxed">
          Nexora AI combines immersive learning,
          AI-powered mentorship,
          and industry-driven skill development
          into one futuristic platform.
        </p>

        <div className="mt-12 flex gap-6 justify-center flex-wrap">

          <button className="px-10 py-5 rounded-2xl bg-blue-500 glow font-semibold hover:scale-105 transition">

            Explore Courses

          </button>

          <button className="px-10 py-5 rounded-2xl glass hover:bg-white/10 transition">

            Live Demo

          </button>

        </div>

      </motion.div>
    </section>
  );
}