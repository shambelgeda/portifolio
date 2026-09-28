import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="05"
          title="Education"
          subtitle="Formal academic study in computer science, software engineering principles, and computing systems."
        />

        <div className="max-w-4xl">
          <EducationCard education={educationData} />
        </div>

      </div>
    </section>
  );
}
