"use client";

import Link from "next/link";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  const platformLinks = [
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "AI Mentor",
      href: "/mentor-ai",
    },
    {
      name: "Roadmaps",
      href: "/roadmap",
    },
    {
      name: "Live Classes",
      href: "/live-classes",
    },
  ];


  return (

    <footer className="max-w-7xl mx-auto px-6 pb-12">

      <div className="relative group overflow-hidden glass-island rounded-[3rem] border border-white/5 bg-black/40 p-12 md:p-20 shadow-2xl">

        {/* BACKGROUND GLOW */}

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* BRAND */}

          <div className="lg:col-span-2 space-y-8">

            <div>

              <h1 className="text-4xl font-black tracking-tighter text-white">

                NEXORA
                <span className="text-blue-500">
                  AI
                </span>

              </h1>

              <p className="text-gray-400 max-w-md leading-relaxed font-medium mt-6 text-lg">

                The next-generation AI learning ecosystem
                built for future-ready engineers,
                developers,
                and innovators.

              </p>

            </div>

            {/* SOCIALS */}

            <div className="flex gap-4">

              {[
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  name: "GitHub",
                  href: "https://github.com",
                },
              ].map((social) => (

                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
                >

                  <span className="sr-only">
                    {social.name}
                  </span>

                  <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-white transition-all" />

                </Link>
              ))}

            </div>

            {/* BADGE */}

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">

              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>

              <span className="uppercase tracking-[0.2em] text-xs font-black text-blue-400">

                AI LEARNING PLATFORM

              </span>

            </div>

          </div>

          {/* PLATFORM */}

          <div className="space-y-8">

            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">

              Platform

            </h3>

            <ul className="space-y-5">

              {platformLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-all font-semibold"
                  >

                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-all"></div>

                    {item.name}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* COMPANY */}

          <div className="space-y-8">

            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">

              Company

            </h3>

            <ul className="space-y-5">

              {companyLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-all font-semibold"
                  >

                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-all"></div>

                    {item.name}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-xs text-gray-500 font-medium">

            © {currentYear} Nexora AI.
            All rights reserved.

          </p>

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">

              Systems Operational

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}