"use client";

import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass rounded-[40px] p-12 relative overflow-hidden"
      >

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            AI POWERED EXPERIENCE
          </p>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Your Personal
            <span className="gradient-text"> AI Mentor</span>
          </h1>

          <p className="text-gray-400 mt-8 max-w-2xl text-lg">
            Generate personalized learning roadmaps,
            track skill growth,
            and get AI-powered career guidance.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="px-8 py-4 rounded-2xl bg-blue-500 glow font-semibold hover:scale-105 transition">
              Generate Roadmap
            </button>

            <button className="px-8 py-4 rounded-2xl glass hover:bg-white/10 transition">
              Watch AI Demo
            </button>

          </div>

        </div>
      </motion.div>
    </section>
  );
}