"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  // Cartoon Character Variants
  const mascotVariants = {
    initial: { y: 20, opacity: 0, rotate: -5 },
    animate: { y: 0, opacity: 1, rotate: 0 },
    hover: { y: -10, transition: { repeat: Infinity, duration: 2, repeatType: "mirror" as const } }
  };

  return (
    <>
      
      <main className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center p-6 gap-12 overflow-hidden relative">
        
        {/* Background Ambient Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        {/* 1. THE CARTOON MASCOT SIDE */}
        <motion.div 
          variants={mascotVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="hidden lg:flex flex-col items-center gap-6 max-w-sm text-center"
        >
          <div className="relative">
            {/* Animated Glow behind Mascot */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            
            {/* Placeholder for your Cartoon Image */}
            <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-xl">
               <span className="text-8xl animate-bounce">🤖</span>
               {/* 
                 NOTE: You can replace the emoji above with an actual <img> tag:
                 <img src="/mascot.png" alt="Nexora Bot" className="w-full h-full object-contain" />
               */}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white tracking-tight">
              {isLogin ? "Welcome back, Engineer!" : "Ready for the Upgrade?"}
            </h2>
            <p className="text-gray-500 font-medium">
              {isLogin 
                ? "I've been keeping your roadmaps safe while you were away." 
                : "Join 10k+ students and start building your future today."}
            </p>
          </div>
        </motion.div>

        {/* 2. THE AUTH CARD SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="glass-island rounded-[3rem] border border-white/10 p-1 bg-white/5 backdrop-blur-3xl shadow-2xl">
            <div className="bg-[#0A0A0A]/90 rounded-[2.9rem] p-10 md:p-12">
              
              {/* Toggle Switch */}
              <div className="flex bg-white/5 rounded-full p-1 mb-10 border border-white/5">
                <button 
                  onClick={() => { setIsLogin(true); setShowOtp(false); }}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${isLogin ? "bg-white text-black" : "text-gray-500"}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => { setIsLogin(false); setShowOtp(false); }}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${!isLogin ? "bg-white text-black" : "text-gray-500"}`}
                >
                  Register
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!showOtp ? (
                  <motion.div
                    key="form-stage"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    {!isLogin && (
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Full Name</label>
                        <input type="text" placeholder="Enter Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Phone Number</label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-bold border-r border-white/10 pr-3">+91</span>
                        <input type="tel" placeholder="00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all tracking-[0.1em]" />
                      </div>
                    </div>

                    <button 
                      onClick={() => setShowOtp(true)}
                      className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] active:scale-95"
                    >
                      Request OTP
                    </button>

                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                      <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-[#0A0A0A] px-4 text-gray-600">OR</span></div>
                    </div>

                    {/* Google Login Integration Placeholder */}
                    <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      Continue with Google
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="otp-stage"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    <div className="text-center space-y-2">
                      <h1 className="text-3xl font-black text-white tracking-tighter">Verify OTP</h1>
                      <p className="text-gray-500 text-sm font-medium">Sent to your number</p>
                    </div>

                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4].map((_) => (
                        <input key={_} type="text" maxLength={1} className="w-14 h-16 bg-white/5 border border-white/10 rounded-2xl text-center text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
                      ))}
                    </div>

                    <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all">
                      Verify & Access
                    </button>
                    <button onClick={() => setShowOtp(false)} className="w-full text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
                      Resend Code
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </main>
    </>
  );
}