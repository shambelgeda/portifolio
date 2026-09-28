import React from 'react';
import { ShieldCheck, Lock, Terminal, CheckCircle2 } from 'lucide-react';
import { cybersecurityExperience } from '../data/portfolioData';

export default function CybersecurityExperience() {
  return (
    <section 
      id="cybersecurity" 
      className="py-14 sm:py-16 border-t border-slate-800/80 bg-slate-950/60"
      aria-label="Additional Cybersecurity Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-emerald-950/60 bg-gradient-to-br from-surface-card to-slate-950 p-6 sm:p-8 lg:p-10 shadow-card">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 font-mono text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Supporting Technical Capability</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cybersecurityExperience.heading}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {cybersecurityExperience.description}
            </p>
          </div>

          {/* Concepts and Tool Badges */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Key Concepts, Methodologies & Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {cybersecurityExperience.conceptsAndTools.map((item, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-emerald-900/40 hover:border-emerald-700/60 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Core Philosophy Callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <strong className="text-emerald-300 font-medium">Engineering Takeaway: </strong>
              "{cybersecurityExperience.takeaway}"
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
