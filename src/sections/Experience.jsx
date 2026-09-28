import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="03"
          title="Practical Experience"
          subtitle="Hands-on internship experience in authorized security assessment and software defense."
        />

        <div className="max-w-4xl">
          <ExperienceTimeline experiences={experienceData} />
        </div>

      </div>
    </section>
  );
}
