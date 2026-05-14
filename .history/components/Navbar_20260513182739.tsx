"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-4">

      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold gradient-text">
          NEXORA AI
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">

          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/dashboard">Dashboard</Link>

        </div>

        <button className="px-5 py-2 rounded-xl bg-blue-500 text-sm">
          Login
        </button>

      </div>

    </nav>
  );
}