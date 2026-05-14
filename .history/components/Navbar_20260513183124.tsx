"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mt-6 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled ? "w-[95%] max-w-[600px]" : "w-[95%] max-w-6xl"
        }`}
      >
        <div className="relative group">
          {/* Subtle Ambient Glow behind the navbar */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className={`relative flex items-center justify-between backdrop-blur-2xl bg-black/60 border border-white/10 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled ? "rounded-[3rem] px-8 py-3" : "rounded-2xl px-10 py-5"
          }`}>
            
            {/* Logo Section */}
            <Link href="/" className="relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                N
              </div>
              <span className={`font-bold tracking-tight text-white overflow-hidden transition-all duration-500 ${scrolled ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
                NEXORA<span className="text-blue-500">AI</span>
              </span>
            </Link>

            {/* Links with Magnetic Hover Effect */}
            <div className="flex items-center gap-2 sm:gap-6">
              {["Home", "Courses", "Dashboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="px-3 py-1.5 rounded-full text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Apple-Style Shimmer Button */}
            <div className="flex items-center">
              <button className="relative overflow-hidden px-6 py-2 rounded-full bg-white text-black text-[13px] font-bold transition-transform active:scale-95 group/btn">
                <span className="relative z-10">Login</span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}