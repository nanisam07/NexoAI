"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BentoGrid() {
  const router = useRouter();

  const cards = [
    {
      title: "AI Career Roadmaps",
      desc: "Personalized roadmaps generated using your career goals and skill level.",
      colSpan: "md:col-span-2",
      bg: "bg-blue-600/10",
      icon: "🛤️",
      height: "h-[300px]",
      path: "/roadmap",
    },
    {
      title: "Student Intelligence Hub",
      desc: "Real-time analytics.",
      colSpan: "md:col-span-1",
      bg: "bg-purple-600/10",
      icon: "📊",
      height: "h-[300px]",
      path: "/dashboard",
    },
    {
      title: "Live Mentor Sessions",
      desc: "Connect with experts.",
      colSpan: "md:col-span-1",
      bg: "bg-cyan-600/10",
      icon: "📡",
      height: "h-[320px]",
      path: "/live-classes",
    },
    {
      title: "24/7 AI Mentor",
      desc: "24/7 guidance for your coding and engineering journey.",
      colSpan: "md:col-span-2",
      bg: "bg-indigo-600/10",
      icon: "🤖",
      height: "h-[320px]",
      path: "/ai-mentor",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => router.push(card.path)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative cursor-pointer group overflow-hidden glass-island rounded-[2.5rem] p-8 border border-white/5 hover:border-white/20 transition-all duration-300 ${card.colSpan} ${card.height}`}
          >
            {/* Ambient Glow */}
            <div
              className={`absolute -right-10 -bottom-10 w-40 h-40 ${card.bg} blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700`}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:rotate-12 transition-transform">
                  {card.icon}
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-black text-white tracking-tighter mb-4">
                {card.title}
              </h2>

              <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
                {card.desc}
              </p>

              {/* Bottom Progress Bar */}
              <div className="mt-auto pt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full w-1/2 bg-white/20"
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