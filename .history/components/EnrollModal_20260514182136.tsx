"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Check, Zap, Crown } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  course: {
    title: string;
    level: string;
  } | null;
}

export default function EnrollModal({ open, onClose, course }: Props) {
  if (!course) return null;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 } 
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-5xl rounded-[3.5rem] border border-white/10 bg-[#050505] p-8 md:p-14 relative overflow-hidden shadow-2xl shadow-blue-500/10"
          >
            {/* Background Decorative Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-50"
            >
              <X size={20} className="text-white" />
            </button>

            {/* HEADER */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/10">
                <Sparkles size={14} className="text-cyan-400" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-black text-cyan-400">Secure Enrollment</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tightest leading-[1.1]">
                Master {course.title}
              </h1>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">{course.level}</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest">Global Certification</span>
              </div>
            </div>

            {/* PRICING TIERS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 relative z-10">
              
              {/* BASIC TIER */}
              <div className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 flex flex-col hover:border-white/20 transition-all">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Explorer</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">₹0</span>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">/ Free</span>
                </div>
                <div className="space-y-4 mt-8 flex-1">
                  {["Basic Modules", "Community Access", "Limited Quizzes"].map((text, i) => (
                    <motion.div custom={i} variants={itemVariants} initial="hidden" animate="visible" key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"><Check size={12} /></div>
                      {text}
                    </motion.div>
                  ))}
                </div>
                <button className="w-full py-4 mt-8 rounded-2xl border border-white/10 text-white font-bold text-xs hover:bg-white/5 transition-all">Start Free</button>
              </div>

              {/* PRO TIER (Featured) */}
              <div className="group rounded-[2.5rem] border border-blue-500/30 bg-blue-600/5 p-8 flex flex-col relative overflow-hidden ring-1 ring-blue-500/20 shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={80} className="text-blue-400" /></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-xl bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">Recommended</div>
                
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mt-2">Professional</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">₹499</span>
                  <span className="text-blue-500/60 text-xs font-bold uppercase tracking-widest">/ Lifetime</span>
                </div>
                <div className="space-y-4 mt-8 flex-1">
                  {["Full Access", "AI Mentor Guidance", "Certified Diploma", "Live Sessions"].map((text, i) => (
                    <motion.div custom={i} variants={itemVariants} initial="hidden" animate="visible" key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center"><Check size={12} className="text-white" /></div>
                      {text}
                    </motion.div>
                  ))}
                </div>
                <button onClick={() => alert("Razorpay Gateway Initiated")} className="w-full py-4 mt-8 rounded-2xl bg-white text-black font-black text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">Proceed to Pay</button>
              </div>

              {/* MASTER TIER (New Price) */}
              <div className="group rounded-[2.5rem] border border-purple-500/20 bg-purple-500/[0.03] p-8 flex flex-col hover:border-purple-500/40 transition-all">
                <p className="text-[10px] font-black uppercase tracking-widest text-purple-400">Mastery</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">₹999</span>
                  <span className="text-purple-500/60 text-xs font-bold uppercase tracking-widest">/ Full Kit</span>
                </div>
                <div className="space-y-4 mt-8 flex-1">
                  {["Everything in Pro", "1-on-1 Code Review", "Priority Job Referrals", "Offline Resources"].map((text, i) => (
                    <motion.div custom={i} variants={itemVariants} initial="hidden" animate="visible" key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Crown size={12} /></div>
                      {text}
                    </motion.div>
                  ))}
                </div>
                <button className="w-full py-4 mt-8 rounded-2xl border border-purple-500/20 text-white font-bold text-xs hover:bg-purple-500/10 transition-all">Unlock Mastery</button>
              </div>

            </div>

            {/* Bottom Footer Details */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-gray-500">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-lg font-black text-white leading-none">12K+</p>
                  <p className="text-[8px] uppercase font-bold tracking-widest mt-1">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-black text-white leading-none">4.9/5</p>
                  <p className="text-[8px] uppercase font-bold tracking-widest mt-1">Avg Rating</p>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">SSL Encrypted • Razorpay Secured</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}