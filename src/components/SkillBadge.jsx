import React from 'react';

export default function SkillBadge({ name, variant = "default" }) {
  const isSecurity = variant === "security";

  return (
    <span 
      className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-200 border ${
        isSecurity
          ? 'bg-slate-900/80 text-emerald-300 border-emerald-900/50 hover:border-emerald-500/50 hover:bg-emerald-950/30'
          : 'bg-surface-subtle text-slate-200 border-slate-700/60 hover:border-brand-500/50 hover:bg-surface-hover hover:text-white'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isSecurity ? 'bg-emerald-400' : 'bg-brand-400'}`} />
      {name}
    </span>
  );
}
