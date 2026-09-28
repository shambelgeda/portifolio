import React from 'react';
import { Search, Compass, Hammer, Sparkles } from 'lucide-react';

const stepIcons = {
  "01": Search,
  "02": Compass,
  "03": Hammer,
  "04": Sparkles
};

export default function PhilosophyStep({ step, isLast }) {
  const IconComponent = stepIcons[step.number] || Search;

  return (
    <div className="relative group flex flex-col p-6 rounded-xl bg-surface-card border border-slate-800 hover:border-brand-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xl font-black text-brand-500/80 group-hover:text-brand-400 transition-colors">
          {step.number}
        </span>
        <div className="p-2 rounded-lg bg-surface-subtle text-slate-400 group-hover:text-brand-400 group-hover:bg-brand-950/40 transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
        {step.title}
      </h3>
      
      <p className="text-sm text-slate-300 leading-relaxed font-sans">
        {step.description}
      </p>
    </div>
  );
}
