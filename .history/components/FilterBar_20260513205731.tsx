"use client";
import { motion } from "framer-motion";

export default function FilterBar({ categories, activeTab, setActiveTab, setSearch }: { categories: string[]; activeTab: string; setActiveTab: (tab: string) => void; setSearch: (query: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="relative group max-w-md">
        <input 
          type="text" 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by course or mentor..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pl-12 text-sm text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🔍</span>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
              activeTab === cat ? "bg-white text-black border-white" : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}