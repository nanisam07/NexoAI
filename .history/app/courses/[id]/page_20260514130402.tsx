"use client";

import { useParams } from "next/navigation";

export default function CoursePage() {

  const params = useParams();

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-32">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="flex flex-col lg:flex-row gap-12">

          {/* VIDEO */}

          <div className="flex-1">

            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10">

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tn6-PIqc4UM"
                title="Course Video"
                allowFullScreen
              />

            </div>

          </div>

          {/* COURSE INFO */}

          <div className="w-full lg:w-[400px]">

            <div className="glass-island rounded-[2rem] border border-white/10 p-8 sticky top-28">

              <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-bold">
                AI COURSE MODULE
              </p>

              <h1 className="text-4xl font-black mt-5 leading-tight">

                {String(params.slug)
                  .replace(/-/g, " ")}

              </h1>

              <p className="text-gray-400 mt-5 leading-relaxed">

                Master industry-ready concepts with
                immersive AI-powered learning experiences,
                projects,
                and mentor guidance.

              </p>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">

                  <p className="text-gray-500 text-xs uppercase">
                    Duration
                  </p>

                  <h3 className="text-2xl font-black mt-2">
                    8 Weeks
                  </h3>

                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">

                  <p className="text-gray-500 text-xs uppercase">
                    Students
                  </p>

                  <h3 className="text-2xl font-black mt-2">
                    12K+
                  </h3>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="space-y-4 mt-10">

                <button className="w-full py-4 rounded-2xl bg-blue-600 font-bold hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">

                  Start Learning

                </button>

                <button className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-bold">

                  Download Curriculum

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* COURSE CONTENT */}

        <div className="mt-24">

          <h2 className="text-5xl font-black">
            Course Curriculum
          </h2>

          <div className="space-y-6 mt-12">

            {[
              "Introduction & Setup",
              "Core Concepts",
              "Projects & Assignments",
              "Advanced Development",
              "Deployment & Scaling",
            ].map((item, i) => (

              <div
                key={i}
                className="glass-island rounded-[2rem] border border-white/10 p-8 flex items-center justify-between"
              >

                <div className="flex items-center gap-6">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-black text-blue-400">

                    {i + 1}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      AI-powered interactive learning module
                    </p>

                  </div>

                </div>

                <button className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all">

                  View Module

                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}