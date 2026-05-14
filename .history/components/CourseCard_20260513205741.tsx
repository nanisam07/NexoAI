"use client";
import { motion } from "framer-motion";

export default function CourseCard({ course }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative glass-island rounded-[2.5rem] border border-white/5 p-6 h-[420px] overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-700 scale-110 group-hover:scale-100"
        style={{ backgroundImage: `url(${course.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
            {course.duration}
          </div>
          <span className="text-2xl">{course.icon}</span>
        </div>

        <h3 className="text-2xl font-black text-white leading-tight mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
        <p className="text-gray-400 text-xs font-medium mb-4">Mentor: {course.mentor}</p>

        <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
          <p className="text-xl font-black text-white">₹{course.price}</p>
          <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-blue-500 hover:text-white transition-all">
            Enroll
          </button>
        </div>
      </div>
    </motion.div>
  );
}