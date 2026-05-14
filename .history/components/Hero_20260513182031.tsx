"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
          AI Powered Learning Platform
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-tight">
          Learn Smarter.
          <br />
          <span className="gradient-text">
            Build Faster.
          </span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
          Personalized AI learning journeys,
          immersive mentorship,
          and future-ready skill development.
        </p>

        <div className="mt-10 flex gap-5 justify-center">

          <button className="px-8 py-4 rounded-2xl bg-blue-500 glow font-semibold">
            Start Learning
          </button>

          <button className="px-8 py-4 rounded-2xl glass">
            Watch Demo
          </button>

        </div>

      </motion.div>
    </section>
  );
}