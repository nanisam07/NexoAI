"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Search,
  Star,
  Clock3,
  Users,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Next.js SaaS Masterclass",
    category: "Web Development",
    level: "Advanced",
    price: "₹499",
    rating: "4.9",
    students: "12K+",
    duration: "8 Weeks",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "AI Prompt Engineering",
    category: "Artificial Intelligence",
    level: "Intermediate",
    price: "₹799",
    rating: "4.8",
    students: "8K+",
    duration: "6 Weeks",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Cyber Security Expert",
    category: "Security",
    level: "Professional",
    price: "₹999",
    rating: "4.9",
    students: "5K+",
    duration: "10 Weeks",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "React Native Bootcamp",
    category: "Mobile Development",
    level: "Intermediate",
    price: "₹699",
    rating: "4.7",
    students: "7K+",
    duration: "7 Weeks",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CourseExplorer() {

  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {

    return courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* BG */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}

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
          className="text-center max-w-4xl mx-auto"
        >

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">

            <Sparkles
              size={16}
              className="text-blue-400"
            />

            <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

              SMART COURSE DISCOVERY

            </span>

          </div>

          <h2 className="text-6xl md:text-7xl font-black mt-10 leading-[0.95] tracking-tight text-white">

            Find Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Perfect Course
            </span>

          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl mx-auto">

            Discover AI-powered learning programs,
            premium mentorship,
            and career-focused engineering paths.

          </p>

        </motion.div>

        {/* SEARCH */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="max-w-3xl mx-auto mt-16"
        >

          <div className="relative">

            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500">

              <Search size={20} />

            </div>

            <input
              type="text"
              placeholder="Search AI, Web Development, Cyber Security..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full h-20 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl pl-16 pr-6 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500/30 transition-all"
            />

          </div>

        </motion.div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {[
            {
              icon: Zap,
              title: "AI Recommendations",
              desc: "Personalized course discovery",
            },
            {
              icon: ShieldCheck,
              title: "Industry Curriculum",
              desc: "Real-world production learning",
            },
            {
              icon: Users,
              title: "Live Mentorship",
              desc: "Interactive expert guidance",
            },
          ].map((item, i) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-2xl font-black mt-8 text-white">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">

                  {item.desc}

                </p>

              </motion.div>
            );
          })}

        </div>

        {/* COURSE RESULTS */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          <AnimatePresence>

            {filteredCourses.map((course, i) => (

              <motion.div
                key={course.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
              >

                {/* IMAGE */}

                <div
                  className="h-[260px] bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${course.image})`,
                  }}
                >

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-[0.2em]">

                    {course.level}

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">

                    {course.category}

                  </p>

                  <h3 className="text-4xl font-black mt-4 text-white leading-tight">

                    {course.title}

                  </h3>

                  {/* STATS */}

                  <div className="flex flex-wrap gap-6 mt-8 text-gray-400 text-sm">

                    <div className="flex items-center gap-2">

                      <Star size={16} />

                      {course.rating}

                    </div>

                    <div className="flex items-center gap-2">

                      <Users size={16} />

                      {course.students}

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock3 size={16} />

                      {course.duration}

                    </div>

                  </div>

                  {/* FOOTER */}

<div className="flex items-center justify-between gap-6 mt-10">

  <div>

    <p className="text-gray-500 text-sm">
      Premium Access
    </p>

    <h4 className="text-4xl font-black text-white mt-2">

      {course.price}

    </h4>

  </div>

  <button
    onClick={() => {

      const slug =
        course.title
          .toLowerCase()
          .replace(/\s+/g, "-");

      window.location.href =
        `/course/${slug}`;

    }}
    className="px-8 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] font-black"
  >

    Enroll Now

  </button>

</div>

                </div>

              </motion.div>
            ))}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}