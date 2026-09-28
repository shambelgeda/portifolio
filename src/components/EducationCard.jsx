import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function EducationCard({ education }) {
  return (
    <div className="bg-surface-card border border-slate-800 rounded-xl p-6 md:p-8 hover:border-slate-700 transition-all shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-brand-950/70 text-brand-400 border border-brand-800/50 shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {education.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {education.degree}
            </h3>
            <p className="text-base text-slate-300 font-medium mt-1">
              {education.university}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-brand-400" />
          Core Academic Foundations
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {education.focusAreas.map((area, idx) => (
            <div 
              key={idx}
              className="text-xs sm:text-sm font-sans text-slate-300 bg-surface-subtle/80 px-3.5 py-2.5 rounded-lg border border-slate-800/80"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
