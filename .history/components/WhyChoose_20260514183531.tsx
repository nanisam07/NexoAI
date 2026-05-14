"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Learning Intelligence",
    desc: "Personalized learning paths powered by adaptive AI systems.",
  },

  {
    icon: Briefcase,
    title: "Career-Focused Training",
    desc: "Industry-ready projects and real-world engineering workflows.",
  },

  {
    icon: Trophy,
    title: "Certificates & Achievements",
    desc: "Earn verified certificates and showcase your skills globally.",
  },

  {
    icon: Users,
    title: "Live Mentor Support",
    desc: "Get direct guidance from mentors and industry professionals.",
  },
];

export default function WhyChoose() {

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* BG */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">

              <Sparkles
                size={16}
                className="text-blue-400"
              />

              <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

                WHY NEXORA AI

              </span>

            </div>

            <h2 className="text-6xl md:text-7xl font-black mt-10 leading-[0.95] tracking-tight text-white">

              Designed for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Future Engineers
              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-10 max-w-2xl">

              Nexora AI combines AI-driven learning,
              mentorship,
              analytics,
              and real-world projects
              to create the next generation learning ecosystem.

            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-6 mt-14">

              {[
                {
                  value: "50K+",
                  label: "Students",
                },
                {
                  value: "120+",
                  label: "Live Sessions",
                },
                {
                  value: "95%",
                  label: "Completion Rate",
                },
                {
                  value: "4.9",
                  label: "Student Rating",
                },
              ].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
                >

                  <h3 className="text-5xl font-black text-white">

                    {item.value}

                  </h3>

                  <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-black mt-4">

                    {item.label}

                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="space-y-6">

            {features.map((feature, i) => {

              const Icon = feature.icon;

              return (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="group rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 flex gap-6"
                >

                  <div className="w-20 h-20 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">

                    <Icon
                      size={34}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">

                      {feature.title}

                    </h3>

                    <p className="text-gray-400 leading-relaxed mt-4">

                      {feature.desc}

                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}