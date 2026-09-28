import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onOpenPlaceholderModal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePlaceholderClick = (e, name) => {
    e.preventDefault();
    if (onOpenPlaceholderModal) {
      onOpenPlaceholderModal({
        title: `${name} Profile`,
        type: 'Social Profile',
        message: `${name} profile link is designated as a placeholder until the public handle is confirmed.`
      });
    }
  };

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span>Shambel Geda</span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono font-normal text-brand-400">Software Developer</span>
            </div>
            <p className="mt-1 text-slate-400 text-xs max-w-sm">
              Computer Science student building practical software and web applications with secure engineering principles.
            </p>
          </div>

          {/* Center: Social Placeholders */}
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handlePlaceholderClick(e, 'GitHub')}
              className="p-2 rounded-lg bg-surface-card hover:bg-surface-hover text-slate-300 hover:text-white border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="GitHub profile (placeholder)"
              title="Add GitHub profile link"
            >
              <GithubIcon className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => handlePlaceholderClick(e, 'LinkedIn')}
              className="p-2 rounded-lg bg-surface-card hover:bg-surface-hover text-slate-300 hover:text-white border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="LinkedIn profile (placeholder)"
              title="Add LinkedIn profile link"
            >
              <LinkedinIcon className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => handlePlaceholderClick(e, 'Email')}
              className="p-2 rounded-lg bg-surface-card hover:bg-surface-hover text-slate-300 hover:text-white border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Email address (placeholder)"
              title="Email Shambel Geda"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Back to top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-surface-card hover:bg-surface-hover border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Shambel Geda. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <span>Built with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
