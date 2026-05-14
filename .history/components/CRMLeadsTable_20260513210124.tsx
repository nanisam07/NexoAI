"use client";

export default function CRMLeadsTable({ leads }: { leads: any[] }) {
  return (
    <div className="glass-island rounded-[2rem] border border-white/5 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-white/5 border-b border-white/5">
          <tr>
            {["Student", "Phone", "Interest", "Status"].map(h => (
              <th key={h} className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {leads.map((lead, i) => (
            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
              <td className="px-8 py-5 text-sm font-bold text-white">{lead.name}</td>
              <td className="px-8 py-5 text-sm text-gray-400">{lead.phone}</td>
              <td className="px-8 py-5 text-sm text-gray-400">{lead.interest}</td>
              <td className="px-8 py-5">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">Follow Up</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}