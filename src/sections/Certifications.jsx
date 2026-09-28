import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certificationsData } from '../data/portfolioData';
import { ShieldAlert } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="06"
          title="Certifications & Learning"
          subtitle="Targeted coursework, industry standard curricula, and hands-on laboratory training."
        />

        {/* Accuracy and integrity disclaimer */}
        <div className="mb-8 p-4 rounded-xl bg-surface-card border border-amber-900/40 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-amber-300 font-mono">Transparency Notice: </strong>
            In accordance with authentic portfolio ethics, completed self-directed study tracks, lab curricula, and academic training modules are clearly distinguished from issued professional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((item, index) => (
            <CertificationCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
