"use client";
import { useState } from "react";

export default function LeadForm({ courseInterest }) {
  const [formData, setFormData] = useState({ name: "", phone: "", interest: courseInterest });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your Firebase Logic here: await addDoc(collection(db, "leads"), formData);
    alert("Inquiry Sent! Our mentor will call you.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 glass-island p-8 rounded-[2rem] border border-white/10">
      <input 
        type="text" placeholder="Full Name" 
        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="tel" placeholder="Phone Number" 
        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white"
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all">
        Claim Free Mentorship
      </button>
    </form>
  );
}