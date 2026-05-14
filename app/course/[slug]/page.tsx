"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

import {
  addDoc,
  collection,
} from "firebase/firestore";

import { db } from "@/firebase/firestore";

import { auth } from "@/firebase/config";

import { motion } from "framer-motion";

export default function CoursePage() {

  const params = useParams();

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const courseTitle =
    String(params.slug)
      .replace(/-/g, " ");

  const handleEnrollment =
    async () => {

      try {

        setLoading(true);

        const user =
          auth.currentUser;

        if (!user) {

          alert(
            "Please login first"
          );

          router.push("/login");

          return;
        }

        // PAYMENT LOADER EFFECT

        await new Promise(
          (resolve) =>
            setTimeout(resolve, 2500)
        );

        // SAVE ENROLLMENT

        await addDoc(
          collection(
            db,
            "enrollments"
          ),
          {
            uid: user.uid,

            courseTitle,

            amount: 499,

            paymentStatus:
              "success",

            enrolledAt:
              new Date(),
          }
        );

        alert(
          "Enrollment Successful 🚀"
        );

        router.push(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Payment Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* BACKGROUND EFFECTS */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* HERO */}

        <div className="flex flex-col lg:flex-row gap-14">

          {/* VIDEO SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex-1"
          >

            <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(37,99,235,0.08)]">

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tn6-PIqc4UM"
                title="Course Video"
                allowFullScreen
              />

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

              {[
                {
                  title: "Live Projects",
                  desc: "Industry-grade development tasks"
                },
                {
                  title: "AI Mentor",
                  desc: "24/7 intelligent assistance"
                },
                {
                  title: "Certification",
                  desc: "Globally recognized completion"
                },
              ].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
                >

                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full lg:w-[430px]"
          >

            <div className="sticky top-28 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(168,85,247,0.08)]">

              <div className="flex items-center justify-between">

                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">

                  AI Powered Course

                </span>

                <span className="text-green-400 text-sm font-bold">
                  ● Active
                </span>

              </div>

              <h1 className="text-5xl font-black leading-tight mt-8">

                {courseTitle}

              </h1>

              <p className="text-gray-400 leading-relaxed mt-6 text-lg">

                Master real-world concepts with immersive AI learning,
                live mentorship,
                practical assignments,
                and production-grade projects.

              </p>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-4 mt-10">

                {[
                  {
                    label: "Duration",
                    value: "8 Weeks",
                  },
                  {
                    label: "Students",
                    value: "12K+",
                  },
                  {
                    label: "Projects",
                    value: "15+",
                  },
                  {
                    label: "Certificate",
                    value: "Yes",
                  },
                ].map((item, i) => (

                  <div
                    key={i}
                    className="p-5 rounded-[1.5rem] border border-white/10 bg-black/30"
                  >

                    <p className="text-gray-500 text-xs uppercase tracking-[0.15em]">
                      {item.label}
                    </p>

                    <h3 className="text-2xl font-black mt-3">
                      {item.value}
                    </h3>

                  </div>
                ))}

              </div>

              {/* PRICE */}

              <div className="mt-10 p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10">

                <p className="text-gray-400 text-sm uppercase tracking-[0.2em]">
                  Lifetime Access
                </p>

                <div className="flex items-end gap-3 mt-4">

                  <h2 className="text-6xl font-black">
                    ₹499
                  </h2>

                  <span className="text-gray-500 line-through text-xl mb-2">
                    ₹1999
                  </span>

                </div>

                <p className="text-green-400 mt-3 font-bold">
                  75% Scholarship Applied
                </p>

              </div>

              {/* BUTTONS */}

              <div className="space-y-4 mt-10">

                <button
                  onClick={handleEnrollment}
                  disabled={loading}
                  className="w-full py-5 rounded-[1.5rem] bg-blue-600 hover:bg-blue-500 transition-all font-black text-lg shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:scale-[1.02]"
                >

                  {loading
                    ? "Processing Payment..."
                    : "Proceed to Pay"}

                </button>

                <button className="w-full py-5 rounded-[1.5rem] border border-white/10 hover:bg-white/5 transition-all font-bold">

                  Download Curriculum

                </button>

              </div>

            </div>

          </motion.div>

        </div>

        {/* CURRICULUM */}

        <div className="mt-28">

          <div className="flex items-center justify-between flex-wrap gap-5">

            <div>

              <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-bold">
                Learning Modules
              </p>

              <h2 className="text-6xl font-black mt-4">
                Course Curriculum
              </h2>

            </div>

            <div className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 font-semibold">

              5 Major Modules

            </div>

          </div>

          <div className="space-y-6 mt-14">

            {[
              "Introduction & Setup",
              "Core Concepts",
              "Projects & Assignments",
              "Advanced Development",
              "Deployment & Scaling",
            ].map((item, i) => (

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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-blue-500/20 transition-all"
              >

                <div className="flex items-center gap-6">

                  <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl font-black">

                    {i + 1}

                  </div>

                  <div>

                    <h3 className="text-3xl font-black">
                      {item}
                    </h3>

                    <p className="text-gray-500 mt-3">
                      AI-powered interactive learning module
                    </p>

                  </div>

                </div>

                <button className="px-8 py-4 rounded-[1.2rem] border border-white/10 hover:bg-white/5 transition-all font-bold">

                  View Module

                </button>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}