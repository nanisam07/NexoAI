"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold gradient-text">
            NEXORA AI
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <button className="gradient-text font-semibold">
            Login
          </button>

        </div>
      </div>
    </motion.nav>
  );
}