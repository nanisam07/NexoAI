"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-12">
      <div className="relative group overflow-hidden glass-island rounded-[3rem] border border-white/5 bg-black/40 p-12 md:p-20 shadow-2xl">
        
        {/* Subtle Background Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-black tracking-tighter text-white">
              NEXORA<span className="text-blue-500">AI</span>
            </h1>
            <p className="text-gray-400 max-w-sm leading-relaxed font-medium">
              The next-generation AI learning platform designed for future-ready students. 
              Built for high-performance engineering and career growth.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <Link key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Platform</h3>
            <ul className="space-y-4">
              {["Courses", "Dashboard", "AI Mentor", "Roadmaps"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Careers", "Privacy Policy", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium">
            © {currentYear} Nexora AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Systems Operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}