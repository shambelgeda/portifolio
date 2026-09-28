import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench,
  ShieldCheck
} from 'lucide-react';
import SkillBadge from './SkillBadge';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  ShieldCheck
};

export default function SkillCategory({ category, icon, skills, variant = "default" }) {
  const IconComponent = iconMap[icon] || Code2;
  const isSecurity = variant === "security";

  return (
    <div className={`rounded-xl border p-5 transition-all duration-300 ${
      isSecurity 
        ? 'bg-surface-card/70 border-emerald-950/60 hover:border-emerald-800/60' 
        : 'bg-surface-card border-slate-800/80 hover:border-slate-700 hover:shadow-card'
    }`}>
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/60">
        <div className={`p-2 rounded-lg ${
          isSecurity ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' : 'bg-brand-950/60 text-brand-400 border border-brand-800/40'
        }`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold text-slate-100 font-sans tracking-tight">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} name={skill} variant={variant} />
        ))}
      </div>
    </div>
  );
}
