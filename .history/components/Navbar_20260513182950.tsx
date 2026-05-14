"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for that dynamic "Apple" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 ${
        scrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto transition-all duration-500 ease-in-out border border-white/10
          ${scrolled ? "rounded-full py-3 px-8 shadow-2xl" : "rounded-2xl py-4 px-6"} 
          bg-black/40 backdrop-blur-xl flex items-center justify-between`}
      >
        
        {/* Logo with a sleek letter-spacing */}
        <Link href="/" className="group">
          <h1 className="text-lg font-semibold tracking-tighter text-white transition-opacity group-hover:opacity-80">
            NEXORA<span className="text-blue-500">.</span>AI
          </h1>
        </Link>

        {/* Links with subtle interaction */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Courses", "Dashboard"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Premium Action Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[13px] font-medium text-gray-400 hover:text-white transition-colors mr-2">
            Sign Up
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}