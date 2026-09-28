import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/portfolioData';
import { Code, Terminal, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const pillarIcons = {
  "01": Terminal,
  "02": Code,
  "03": Layers,
  "04": ShieldCheck
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="01"
          title={aboutData.heading}
          subtitle="Developing software engineer with strong computer science fundamentals and proactive security awareness."
        />

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-4 bg-surface-card border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-card">
            <h3 className="font-mono text-xs uppercase tracking-wider text-brand-400 font-semibold mb-4">
              At a Glance
            </h3>
            <div className="space-y-4 text-xs font-sans">
              <div className="pb-3 border-b border-slate-800">
                <span className="text-slate-400 block mb-0.5">Primary Discipline</span>
                <span className="text-white font-medium text-sm">Computer Science & Software Development</span>
              </div>
              <div className="pb-3 border-b border-slate-800">
                <span className="text-slate-400 block mb-0.5">Academic Status</span>
                <span className="text-white font-medium text-sm">B.Sc. Student, Dilla University</span>
              </div>
              <div className="pb-3 border-b border-slate-800">
                <span className="text-slate-400 block mb-0.5">Practical Specialty</span>
                <span className="text-white font-medium text-sm">Full-Stack Web Technologies & Databases</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Security Orientation</span>
                <span className="text-emerald-400 font-medium text-sm">Defensive Architecture & Penetration Testing Exposure</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutData.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.number] || Code;
            const isFeatured = pillar.isPrimary; // 02 Software Development

            return (
              <div
                key={pillar.number}
                className={`relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-brand-950/60 to-surface-card border-2 border-brand-500 shadow-glow-blue -translate-y-1'
                    : 'bg-surface-card border border-slate-800 hover:border-slate-700 hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isFeatured ? 'bg-brand-500 text-white' : 'bg-surface-subtle text-slate-400'
                    }`}>
                      {pillar.number}
                    </span>

                    <div className={`p-2 rounded-lg ${
                      isFeatured ? 'bg-brand-900/60 text-brand-300' : 'bg-surface-subtle text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {pillar.tag && (
                    <span className={`inline-block text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded mb-2 ${
                      isFeatured ? 'bg-brand-900/40 text-brand-300' : 'bg-emerald-950/50 text-emerald-400'
                    }`}>
                      {pillar.tag}
                    </span>
                  )}

                  <h3 className={`text-lg font-bold mb-2 tracking-tight ${
                    isFeatured ? 'text-white' : 'text-slate-100'
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                {isFeatured && (
                  <div className="mt-4 pt-3 border-t border-brand-800/40 text-[11px] font-mono text-brand-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Primary Career Direction</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
