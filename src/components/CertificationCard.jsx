import React from 'react';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

export default function CertificationCard({ item }) {
  return (
    <div className="bg-surface-card border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between shadow-card">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-brand-300">
            <BookOpen className="w-3.5 h-3.5" />
            {item.status}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {item.type}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight mt-2">
          {item.title}
        </h3>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {item.note}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="text-slate-400">Classification:</span>
        <span className="text-amber-400/90 font-medium">
          {item.isOfficialCertification ? 'Official Credential' : 'Training / Study Pursuit'}
        </span>
      </div>
    </div>
  );
}
