"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Courses", path: "/course" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none p-6">
      <motion.div
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={`pointer-events-auto flex items-center justify-between border border-white/10 backdrop-blur-xl bg-black/40 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
            ? "max-w-[480px] rounded-full px-4 py-2 border-white/20 shadow-blue-500/10" 
            : "max-w-7xl w-full rounded-[2rem] px-10 py-5"
        }`}
      >
        {/* Animated Background Shimmer for Scrolled State */}
        {scrolled && (
          <motion.div 
            layoutId="glow"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"
          />
        )}

        {/* Logo Section */}
        <Link href="/home" className="flex items-center gap-3 group relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:rotate-[10deg] transition-transform duration-500">
            <span className="text-white font-black text-xl italic">N</span>
          </div>
          
          <AnimatePresence>
            {!scrolled && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-white font-black tracking-[0.15em] text-sm uppercase"
              >
                NEXORA<span className="text-blue-500">AI</span>
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 relative z-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative px-5 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300 group ${
                scrolled ? "text-gray-300 hover:text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Unique Liquid Hover Effect */}
              <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 rounded-full group-hover:w-1/3 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Dynamic Action Button (Visible on scroll) */}
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </motion.div>
    </nav>
  );
}