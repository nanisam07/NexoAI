"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  const cards = [
    {
      title: "AI Learning Paths",
      desc: "Personalized roadmaps generated using your career goals and skill level.",
      colSpan: "md:col-span-2",
      bg: "bg-blue-600/20",
      icon: "🛤️",
      height: "h-[300px]",
      accent: "from-blue-500 to-cyan-400"
    },
    {
      title: "Smart Dashboard",
      desc: "Real-time analytics.",
      colSpan: "md:col-span-1",
      bg: "bg-purple-600/20",
      icon: "📊",
      height: "h-[300px]",
      accent: "from-purple-500 to-pink-400"
    },
    {
      title: "Live Classes",
      desc: "Connect with experts.",
      colSpan: "md:col-span-1",
      bg: "bg-cyan-600/20",
      icon: "📡",
      height: "h-[320px]",
      accent: "from-cyan-400 to-emerald-400"
    },
    {
      title: "AI Mentor Assistant",
      desc: "24/7 guidance for your coding and engineering journey.",
      colSpan: "md:col-span-2",
      bg: "bg-indigo-600/20",
      icon: "🤖",
      height: "h-[320px]",
      accent: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0,transparent_70%)] pointer-events-none" />

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.8, 
              ease: [0.23, 1, 0.32, 1] 
            }}
            whileHover={{ y: -10 }}
            className={`relative group overflow-hidden glass-island rounded-[3rem] border border-white/5 hover:border-white/10 transition-all duration-500 ${card.colSpan} ${card.height}`}
          >
            {/* 1. Localized Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* 2. Dynamic Gradient Glow */}
            <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${card.bg} blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-1000 ease-out`} />
            
            <div className="relative z-10 flex flex-col h-full p-10">
              <div className="flex justify-between items-start mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-3xl border border-white/10 shadow-inner"
                >
                  {card.icon}
                </motion.div>
                
                {/* Modern Arrow Icon */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
                   <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60">
                     <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.6464 3.64645C10.8417 3.45118 11.1583 3.45118 11.3536 3.64645C11.5488 3.84171 11.5488 4.15827 11.3536 4.35355L4.35355 11.3536C4.15827 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor"></path>
                   </svg>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tightest">
                  {card.title}
                </h2>
                <p className="text-gray-400 font-medium leading-relaxed max-w-[320px] text-sm md:text-base">
                  {card.desc}
                </p>
              </div>

              {/* 3. Interactive Progress Indicator */}
              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Efficiency Engine</span>
                  <span className={`text-[10px] font-bold bg-clip-text text-transparent bg-gradient-to-r ${card.accent}`}>Optimized</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                   <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${card.accent}`} 
                   />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}