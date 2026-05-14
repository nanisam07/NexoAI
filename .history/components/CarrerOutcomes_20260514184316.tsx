"use client";

import { motion } from "framer-motion";

const companies = [
  "Google", "Microsoft", "Amazon", "Netflix", "Adobe", 
  "Atlassian", "Infosys", "TCS", "Zoho", "Accenture",
];

const roles = [
  "Frontend Developer", "Backend Engineer", "Full Stack Developer",
  "AI Engineer", "Cyber Security Analyst", "Cloud Engineer",
];

export default function CareerOutcomes() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050505]">
      
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/3 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl p-10 md:p-20 overflow-hidden relative shadow-2xl"
        >
          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/10 mb-10">
              <span className="uppercase tracking-[0.4em] text-[10px] font-black text-blue-400">
                Career Outcomes
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tightest text-white">
              Turn Skills Into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30">Opportunities.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mt-10 max-w-2xl mx-auto">
              Master real-world engineering and crack technical interviews at leading tech firms globally.
            </p>
          </div>

          {/* 2. INFINITE SCROLLING COMPANIES */}
          <div className="relative mt-24">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
            
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 text-center mb-10">Hiring Ecosystem</h3>
            
            <div className="flex overflow-hidden group">
              <motion.div 
                animate={{ x: [0, -1035] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex flex-nowrap gap-6 py-4"
              >
                {/* Double mapping for seamless loop */}
                {[...companies, ...companies].map((company, i) => (
                  <div 
                    key={i}
                    className="flex-none px-10 py-5 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl flex items-center justify-center group/item hover:border-blue-500/30 transition-all"
                  >
                    <span className="text-2xl font-black text-white/20 group-hover/item:text-blue-400 transition-colors uppercase tracking-tighter italic">
                      {company}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 3. BENTO STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-24">
            {[
              { value: "₹12 LPA", label: "Average Package", color: "from-blue-500/10" },
              { value: "500+", label: "Hiring Partners", color: "from-purple-500/10" },
              { value: "92%", label: "Career Growth", color: "from-emerald-500/10" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group rounded-[3rem] border border-white/5 bg-white/[0.01] p-10 text-center overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <h3 className="text-5xl font-black text-white tracking-tighter relative z-10">{item.value}</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black mt-4 relative z-10">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* 4. CAREER ROLES TARGETS */}
          <div className="mt-32">
            <div className="text-center space-y-4 mb-14">
                <h3 className="text-4xl font-black text-white tracking-tighter italic">Target Roles</h3>
                <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="group flex items-center justify-between p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] transition-all cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-gray-300 group-hover:text-blue-400 transition-colors">
                    {role}
                  </h4>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      <style jsx global>{`
        .tracking-tightest { letter-spacing: -0.05em; }
      `}</style>
    </section>
  );
}