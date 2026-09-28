import React from 'react';
import SectionHeading from '../components/SectionHeading';
import PhilosophyStep from '../components/PhilosophyStep';
import { philosophySteps, philosophyQuote } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="07"
          title="How I Build Software"
          subtitle="A structured, pragmatic engineering methodology centered on clarity, longevity, and security."
        />

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {philosophySteps.map((step, idx) => (
            <PhilosophyStep 
              key={step.number} 
              step={step} 
              isLast={idx === philosophySteps.length - 1} 
            />
          ))}
        </div>

        {/* Philosophy Quote Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-brand-950/40 via-surface-card to-surface-card border border-brand-800/40 p-6 sm:p-8 flex items-center gap-5 shadow-card">
          <div className="p-3 rounded-xl bg-brand-900/50 text-brand-300 border border-brand-700/50 shrink-0 hidden sm:flex">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
              "{philosophyQuote}"
            </p>
            <span className="inline-block mt-2 font-mono text-xs text-brand-400">
              — Engineering Principle & Guiding Standard
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
