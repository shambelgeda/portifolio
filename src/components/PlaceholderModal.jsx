import React, { useEffect } from 'react';
import { X, AlertCircle, Info, ExternalLink, Mail, Copy } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, data }) {
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

  if (!isOpen || !data) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-surface-card border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in"
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
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/40">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Content Transparency
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-white">
              {data.title || 'Placeholder Notice'}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="my-5 p-4 rounded-xl bg-surface border border-slate-800 text-sm text-slate-300 leading-relaxed">
          <p className="font-mono text-xs text-brand-400 mb-1.5 font-semibold">
            Status: {data.type || 'Notice'}
          </p>
          <p>{data.message}</p>
        </div>

        <div className="text-xs text-slate-400 leading-relaxed mb-6">
          <p>
            In accordance with authentic developer portfolio principles, no fake metrics, repositories, or external links are generated. This link will be updated with actual project assets.
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-slate-800">
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-brand-400 bg-brand-950/40 border border-brand-800/60 hover:bg-brand-900/40 transition-colors"
          >
            Inquire via Contact Form
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
