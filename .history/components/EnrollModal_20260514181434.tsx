"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  course: {
    title: string;
    level: string;
  } | null;
}

export default function EnrollModal({
  open,
  onClose,
  course,
}: Props) {

  if (!course) return null;

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-xl flex items-center justify-center p-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="w-full max-w-2xl rounded-[3rem] border border-white/10 bg-[#080808] p-10 relative overflow-hidden"
          >

            {/* CLOSE */}

            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              ✕
            </button>

            {/* HEADER */}

            <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs font-black">
              COURSE ENROLLMENT
            </p>

            <h1 className="text-5xl font-black mt-5 leading-tight">

              {course.title}

            </h1>

            <div className="flex items-center gap-4 mt-6">

              <div className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em]">

                {course.level}

              </div>

              <div className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-xs font-black uppercase tracking-[0.2em]">

                Lifetime Access

              </div>

            </div>

            {/* FEATURES */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {[
                "AI Mentor Support",
                "Assignments & Projects",
                "Certificates",
                "Live Sessions",
              ].map((item, i) => (

                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.03]"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">

                      ✓

                    </div>

                    <span className="font-semibold">
                      {item}
                    </span>

                  </div>

                </div>
              ))}

            </div>

            {/* PLANS */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              {/* FREE */}

              <div className="rounded-[2rem] border border-white/10 p-8 bg-white/[0.02]">

                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-black">
                  BASIC
                </p>

                <h2 className="text-5xl font-black mt-4">
                  ₹0
                </h2>

                <div className="space-y-4 mt-8">

                  {[
                    "Basic Videos",
                    "Community Access",
                    "Limited Assignments",
                  ].map((item, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-400"
                    >

                      ✓ {item}

                    </div>
                  ))}

                </div>

                <button className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition-all font-bold mt-10">

                  Start Free

                </button>

              </div>

              {/* PRO */}

              <div className="rounded-[2rem] border border-blue-500/20 bg-blue-500/[0.04] p-8 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 blur-[80px]"></div>

                <div className="relative z-10">

                  <p className="text-blue-400 uppercase tracking-[0.2em] text-xs font-black">
                    PRO ACCESS
                  </p>

                  <h2 className="text-5xl font-black mt-4">
                    ₹499
                  </h2>

                  <div className="space-y-4 mt-8">

                    {[
                      "Full Course Access",
                      "AI Mentor",
                      "Certificates",
                      "Projects",
                      "Live Classes",
                    ].map((item, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3 text-white"
                      >

                        ✓ {item}

                      </div>
                    ))}

                  </div>

                  <button
                    onClick={() =>
                      alert(
                        "Razorpay Test Payment Successful 🚀"
                      )
                    }
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:scale-[1.02] transition-all font-black mt-10 shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                  >

                    Proceed to Payment

                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}