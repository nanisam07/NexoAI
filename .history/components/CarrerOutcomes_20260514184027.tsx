"use client";

import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Adobe",
  "Atlassian",
  "Infosys",
  "TCS",
  "Zoho",
  "Accenture",
];

const roles = [
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "AI Engineer",
  "Cyber Security Analyst",
  "Cloud Engineer",
];

export default function CareerOutcomes() {

  return (

    <section className="relative py-24 px-6 overflow-hidden">

      {/* BG */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

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
          className="rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-16 overflow-hidden relative"
        >

          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]"></div>

          <div className="relative z-10">

            {/* HEADER */}

            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">

                <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

                  CAREER OUTCOMES

                </span>

              </div>

              <h2 className="text-5xl md:text-6xl font-black mt-10 leading-[1] text-white">

                Turn Skills Into
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Career Opportunities
                </span>

              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-8">

                Master real-world engineering skills,
                crack technical interviews,
                and prepare for careers at leading tech companies.

              </p>

            </div>

            {/* STATS */}

            <div className="grid md:grid-cols-3 gap-6 mt-16">

              {[
                {
                  value: "₹12 LPA",
                  label: "Average Package",
                },
                {
                  value: "500+",
                  label: "Hiring Partners",
                },
                {
                  value: "92%",
                  label: "Career Growth Rate",
                },
              ].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center"
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

            {/* COMPANIES */}

            <div className="mt-20">

              <h3 className="text-3xl font-black text-white text-center">

                Top Companies Our Learners Target

              </h3>

              <div className="flex flex-wrap justify-center gap-5 mt-10">

                {companies.map((company, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -5,
                    }}
                    className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-semibold hover:border-blue-500/30 transition-all"
                  >

                    {company}

                  </motion.div>
                ))}

              </div>

            </div>

            {/* ROLES */}

            <div className="mt-20">

              <h3 className="text-3xl font-black text-white text-center">

                Career Roles You Can Crack

              </h3>

              <div className="grid md:grid-cols-3 gap-6 mt-10">

                {roles.map((role, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center"
                  >

                    <h4 className="text-2xl font-black text-white">

                      {role}

                    </h4>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}