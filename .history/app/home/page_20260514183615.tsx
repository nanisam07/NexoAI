"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import AISection from "@/components/AISection";
import BentoGrid from "@/components/BentoGrid";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";
import CourseExplorer from "@/components/CourseExplorer";
import WhyChoose from "@/components/WhyChoose";

import { useState } from "react";

import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  const [openIndex, setOpenIndex] =
  useState<number | null>(null);
  const [generated, setGenerated] =
  useState(false);

  return (
    <>
        <Navbar />
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-black flex items-center">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.3em]">
              Nexora v4.0 is Live
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]"
          >
            Master Tech, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              at your own pace.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-lg text-lg md:text-xl font-medium leading-relaxed mb-12"
          >
            Elevate your engineering journey with AI-driven learning paths. Join Samuel Victor and thousands of Nexora students building the future.
          </motion.p>

          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="relative"
>

  {/* BUTTONS */}

  <div className="flex flex-col sm:flex-row gap-4 items-start">

    {/* GET STARTED */}

    <button
      onClick={() =>
        router.push("/roadmap")
      }
      className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-black text-sm active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    >

      <span className="relative z-10 flex items-center gap-3">

        Get Started

        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >

          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />

        </svg>

      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    </button>

    {/* VIEW SYLLABUS */}

    <button
      onClick={() =>
        setOpenIndex(
          openIndex === 1
            ? null
            : 1
        )
      }
      className="group w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3"
    >

      View Syllabus

      <motion.svg
        animate={{
          rotate:
            openIndex === 1
              ? 90
              : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="text-gray-400"
      >

        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />

      </motion.svg>

    </button>

  </div>

  {/* EXPANDABLE SYLLABUS */}

  <AnimatePresence>

    {openIndex === 1 && (

      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        exit={{
          opacity: 0,
          height: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="overflow-hidden"
      >

        <div className="mt-10 glass-island rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 max-w-2xl">

          {/* HEADER */}

          <div className="flex items-center justify-between flex-wrap gap-4">

            <div>

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
                AI CURRICULUM
              </p>

              <h3 className="text-3xl font-black mt-3">
                Full Stack Developer Path
              </h3>

            </div>

            <div className="px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-black">

              6 Months Program

            </div>

          </div>

          {/* MODULES */}

          <div className="space-y-4 mt-10">

            {[
              "HTML, CSS & Responsive Design",
              "JavaScript & Modern ES6",
              "React.js & Component Architecture",
              "Next.js & API Integration",
              "Backend with Node.js & Express",
              "MongoDB & Authentication",
              "Real-World SaaS Projects",
              "Deployment & Interview Preparation",
            ].map((module, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.05,
                }}
                className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-all group"
              >

                <div className="flex items-center gap-5">

                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black">

                    {i + 1}

                  </div>

                  <div>

                    <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">

                      {module}

                    </h4>

                    <p className="text-xs text-gray-500 mt-1">

                      AI-powered learning module

                    </p>

                  </div>

                </div>

                <div className="text-xs text-gray-500 font-bold">

                  Week {i + 1}

                </div>

              </motion.div>
            ))}

          </div>

          {/* CTA */}

          <button
            onClick={() =>
              router.push("/roadmap")
            }
            className="mt-8 w-full py-4 rounded-2xl bg-blue-600 font-black hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >

            Start AI Learning Journey

          </button>

        </div>

      </motion.div>
    )}

  </AnimatePresence>

</motion.div>
        </div>

        {/* RIGHT SIDE: Student Photo & Interactive Tech Tags */}
        <div className="relative flex items-center justify-center lg:justify-end">
          
          {/* Main Student Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students learning together" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute bottom-10 left-10 z-20 space-y-1">
              <p className="text-blue-400 font-black text-xs uppercase tracking-widest">Collaborative Learning</p>
              <h3 className="text-white font-black text-3xl tracking-tighter italic">NEXORA ACADEMY</h3>
            </div>
          </motion.div>

          

          {/* Glow Effect */}
          <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        </div>

      </div>
    </section>
    <AISection />

    <BentoGrid />
    <CourseExplorer />
    <WhyChoose />
    <DashboardPreview />
    <Footer />
    </>
  );
}