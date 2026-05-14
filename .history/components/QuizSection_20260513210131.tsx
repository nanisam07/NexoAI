"use client";
import { useState } from "react";

export default function QuizSection({ questions }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    let s = 0;
    // Logic: if (answers[idx] === q.correct) s++;
    setScore(s);
  };

  return (
    <div className="glass-island p-8 rounded-[2.5rem] border border-white/5 space-y-8">
      <h2 className="text-2xl font-black text-white tracking-tight">Module Quiz</h2>
      {questions.map((q, i) => (
        <div key={i} className="space-y-4">
          <p className="text-gray-300 font-medium">Q{i+1}: {q.question}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {q.options.map(opt => (
              <button key={opt} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/50 text-left text-sm text-gray-400 hover:text-white transition-all">
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calculateScore} className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold">Submit Assessment</button>
    </div>
  );
}