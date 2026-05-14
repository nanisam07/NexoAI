"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  const stats = [
    { label: "Courses Completed", value: "12", color: "from-blue-500 to-cyan-400", icon: "📚" },
    { label: "Learning Streak", value: "84", color: "from-orange-500 to-red-400", icon: "🔥" },
    { label: "XP Points", value: "2.4K", color: "from-purple-500 to-pink-400", icon: "✨" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative group glass-island rounded-[40px] p-1 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10">
        <div className="bg-black/60 backdrop-blur-3xl rounded-[38px] p-10 border border-white/5">
          
          {/* Header Area */}
          <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Student <span className="text-gray-500">Analytics</span>
              </h2>
              <p className="text-gray-400 text-sm font-medium">Real-time performance tracking with Nexora AI</p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-[11px] font-bold uppercase tracking-widest">Active Session</span>
            </motion.div>
          </div>

          {/* Bento Grid Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden group/card p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
              >
                {/* Accent Glow */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover/card:opacity-20 blur-2xl transition-opacity duration-500`} />
                
                <div className="flex justify-between items-start mb-6">
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.6464 3.64645C10.8417 3.45118 11.1583 3.45118 11.3536 3.64645C11.5488 3.84171 11.5488 4.15827 11.3536 4.35355L4.35355 11.3536C4.15827 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>

                <h1 className="text-5xl font-black text-white tracking-tighter">
                  {stat.value}
                </h1>
                
                {/* Progress Bar Visualization */}
                <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${stat.color}`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}