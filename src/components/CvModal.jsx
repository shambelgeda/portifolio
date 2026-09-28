import React, { useEffect } from 'react';
import { X, FileText, Download, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-surface-card border border-slate-700/90 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-xl bg-brand-950/70 text-brand-400 border border-brand-800/50">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-brand-400 font-semibold">
              Curriculum Vitae
            </span>
            <h3 id="cv-modal-title" className="text-xl font-bold text-white">
              Shambel Geda — Professional CV
            </h3>
          </div>
        </div>

        {/* CV Status Information */}
        <div className="space-y-4 my-4">
          <div className="p-4 rounded-xl bg-surface border border-slate-800 text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Standard CV Pathway Configured</span>
            </div>
            <p>
              The designated CV file path is <code className="text-brand-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/assets/Shambel-Geda-CV.pdf</code>.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              In strict adherence to authenticity standards, an unverified or artificially inflated CV document has not been generated. You can download the current authentic summary profile below or request the latest PDF version directly.
            </p>
          </div>

          {/* Quick Profile Summary */}
          <div className="p-4 rounded-xl bg-surface-subtle/70 border border-slate-800/80 text-xs text-slate-300 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono">Candidate:</span>
              <span className="font-medium text-white">Shambel Geda</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono">Academic Status:</span>
              <span className="font-medium text-white">B.Sc. Computer Science, Dilla University</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono">Primary Focus:</span>
              <span className="font-medium text-brand-300">Software Development & Web Technologies</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono">Practical Experience:</span>
              <span className="font-medium text-emerald-400">Cybersecurity / Pen Testing Intern (INSA)</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <a
            href="/assets/Shambel-Geda-CV.pdf"
            download="Shambel-Geda-CV.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md shadow-brand-600/30"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF (/assets/Shambel-Geda-CV.pdf)</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-surface-subtle hover:bg-surface-hover border border-slate-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Request via Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
