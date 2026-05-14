"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

// Data representing your professional scale
const ADMIN_STATS = [
  { label: "Total Revenue", value: "₹4.2L", growth: "+12.5%", color: "from-green-500 to-emerald-400" },
  { label: "Active Students", value: "1,240", growth: "+8.2%", color: "from-blue-500 to-cyan-400" },
  { label: "New Leads", value: "84", growth: "+15.0%", color: "from-purple-500 to-pink-500" },
  { label: "Conversion", value: "24%", growth: "+2.1%", color: "from-orange-500 to-red-400" },
];

export default function AdminPage() {
  const [activeView, setActiveView] = useState("crm");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020202] pt-24 flex">
        
        {/* 1. ADMIN NAVIGATION DOCK */}
        <aside className="hidden lg:flex w-72 flex-col p-6 fixed h-[calc(100vh-6rem)]">
          <div className="glass-island rounded-[2.5rem] border border-white/5 h-full p-8 flex flex-col justify-between bg-white/[0.02]">
            <div className="space-y-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">System Root</p>
                <h2 className="text-white font-black text-xl tracking-tighter">Admin Portal</h2>
              </div>

              <nav className="space-y-2">
                {["CRM Pipeline", "Student List", "Leads", "Financials"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveView(item.toLowerCase().replace(' ', '-'))}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${
                      activeView === item.toLowerCase().replace(' ', '-') 
                      ? "bg-white/10 text-white border border-white/10 shadow-2xl" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm font-bold tracking-tight">{item}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-4 rounded-3xl bg-red-500/5 border border-red-500/10 text-center">
              <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Root Access Only</p>
            </div>
          </div>
        </aside>

        {/* 2. COMMAND CENTER CONTENT */}
        <section className="flex-1 lg:ml-72 p-6 lg:p-12 space-y-10">
          
          {/* Executive Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-black text-white tracking-tighter leading-none">
                System <span className="text-gray-500">Overview</span>
              </h1>
              <p className="text-gray-400 font-medium text-lg italic">Real-time business intelligence for Nexora AI.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all">
                Export Data
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs shadow-xl active:scale-95 transition-all">
                New Campaign
              </button>
            </div>
          </header>

          {/* 3. BUSINESS KPI GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {ADMIN_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-island p-8 rounded-[2.5rem] border border-white/5 relative group overflow-hidden"
              >
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                  <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">{stat.growth}</span>
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h2>
              </motion.div>
            ))}
          </div>

          {/* 4. CRM PIPELINE & STUDENT MANAGEMENT */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* CRM Pipeline Table (2/3) */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white tracking-tight">Lead Pipeline</h3>
                <span className="text-xs font-bold text-blue-500 cursor-pointer">View All</span>
              </div>
              
              <div className="glass-island rounded-[2.5rem] border border-white/5 overflow-hidden bg-white/[0.01]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      {["Lead Name", "Interest", "Status", "Value"].map((th) => (
                        <th key={th} className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">{th}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Rahul Kapoor", interest: "Cyber Security", status: "Negotiation", value: "₹4,999", color: "bg-orange-500" },
                      { name: "Priya Das", interest: "Next.js 15", status: "Interested", value: "₹2,499", color: "bg-blue-500" },
                      { name: "Arjun Mehta", interest: "AI Foundations", status: "Converted", value: "₹9,999", color: "bg-green-500" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-8 py-5 text-sm font-bold text-white">{row.name}</td>
                        <td className="px-8 py-5 text-sm text-gray-400">{row.interest}</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`} />
                            <span className="text-xs font-bold text-gray-300">{row.status}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-sm font-black text-white group-hover:text-blue-400 transition-colors">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revenue Analytics Card (1/3) */}
            <div className="glass-island rounded-[3rem] border border-white/5 p-10 flex flex-col justify-between bg-gradient-to-br from-white/[0.03] to-transparent">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Revenue Stream</p>
                  <h3 className="text-2xl font-black text-white">Conversion <br /> Analytics</h3>
                </div>
                
                {/* Visual Analytics Simulation */}
                <div className="space-y-6 pt-6">
                   {[
                     { label: "Organic Search", val: "65%", col: "bg-blue-500" },
                     { label: "Social Media", val: "20%", col: "bg-purple-500" },
                     { label: "Referrals", val: "15%", col: "bg-cyan-500" }
                   ].map((item) => (
                     <div key={item.label} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white">{item.val}</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.val }}
                            transition={{ duration: 1.5 }}
                            className={`h-full rounded-full ${item.col}`} 
                          />
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              
              <button className="mt-10 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all">
                Full Revenue Report
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}