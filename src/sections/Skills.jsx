import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCategory from '../components/SkillCategory';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="02"
          title="Technical Skills"
          subtitle="Technologies and concepts I use and continue developing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <SkillCategory 
              key={idx}
              category={cat.category}
              icon={cat.icon}
              skills={cat.skills}
            />
          ))}
        </div>

        {/* Note on growth and honesty */}
        <div className="mt-10 p-4 rounded-xl bg-surface-subtle border border-slate-800 text-xs sm:text-sm text-slate-400 font-sans flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            <span className="text-slate-300 font-semibold">Continuous Technical Growth:</span> These skills represent core technologies used in coursework, independent development, and practical projects without artificial percentage ratings.
          </p>
        </div>

      </div>
    </section>
  );
}
