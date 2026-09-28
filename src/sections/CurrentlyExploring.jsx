import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { currentlyExploring } from '../data/portfolioData';
import { Compass, Sparkles } from 'lucide-react';

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-20 lg:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="08"
          title="Currently Exploring"
          subtitle="Areas of ongoing technical study, experimentation, and active curiosity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyExploring.map((item, idx) => (
            <div 
              key={idx}
              className="group rounded-xl p-5 bg-surface-card border border-slate-800 hover:border-brand-500/40 hover:bg-surface-hover transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-brand-400 transition-colors">
                  {item.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-400/80 group-hover:scale-125 transition-transform" />
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                {item.name}
              </h3>

              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
