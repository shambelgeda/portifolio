import React from 'react';
import { Shield, Building2, CheckCircle2, Lightbulb } from 'lucide-react';

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative group">
          {/* Timeline node icon */}
          <div className="absolute -left-[35px] md:-left-[43px] top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border-2 border-brand-500 text-brand-400 group-hover:scale-110 transition-transform">
            <Shield className="w-3.5 h-3.5" />
          </div>

          <div className="bg-surface-card border border-slate-800 rounded-xl p-6 md:p-8 hover:border-slate-700 transition-all shadow-card">
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <span className="inline-block font-mono text-xs text-brand-400 font-semibold uppercase tracking-wider mb-1">
                  {exp.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-slate-300 text-sm font-medium">
                  <Building2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{exp.organization}</span>
                </div>
                <div className="mt-1 text-xs font-mono text-slate-400">
                  Department: <span className="text-slate-300">{exp.department}</span>
                </div>
              </div>
            </div>

            {/* General Description */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Activities list */}
            <div>
              <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider mb-3">
                Key Activities & Hands-on Responsibilities:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {exp.activities.map((act, actIdx) => (
                  <div key={actIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-surface-subtle/60 p-2.5 rounded-lg border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Perspective Callout */}
            {exp.perspectiveNote && (
              <div className="mt-6 p-4 rounded-lg bg-brand-950/30 border border-brand-800/40 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-brand-300">Software Engineering Synergy: </strong>
                  {exp.perspectiveNote}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
