"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none p-6">
      <motion.div
        layout
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`pointer-events-auto flex items-center justify-between glass-island shadow-2xl transition-all duration-500 ease-in-out ${
          scrolled ? "max-w-[500px] rounded-full px-4 py-2" : "max-w-7xl w-full rounded-2xl px-8 py-4"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-[10deg] transition-transform">
            <span className="text-white font-black text-xl">N</span>
          </div>
          {!scrolled && (
            <span className="text-white font-bold tracking-tighter text-lg">
              NEXORA<span className="text-blue-500">AI</span>
            </span>
          )}
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-4">
          {["Home", "Courses", "Dashboard"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="px-4 py-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <button className="relative overflow-hidden bg-white px-5 py-2 rounded-full text-black text-xs font-bold transition-transform active:scale-95 group/btn">
            <span className="relative z-10">Login</span>
            {/* The Shimmer Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full animate-shimmer" />
          </button>
        </div>
      </motion.div>
    </nav>
  );
}