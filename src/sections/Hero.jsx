import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Code2,
  Database,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCvModal, onOpenPlaceholderModal }) {
  const [activeCodeTab, setActiveCodeTab] = useState('engineer');

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleSocialClick = (e, name) => {
    e.preventDefault();
    if (onOpenPlaceholderModal) {
      onOpenPlaceholderModal({
        title: `${name} Profile Link`,
        type: 'Social Profile',
        message: `${name} link is designated as a placeholder until the official link is provided.`
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/60 border border-brand-800/60 text-brand-400 font-mono text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              {personalInfo.heroHeading}
            </h1>

            {/* Primary Role Subtitle */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent mb-5 tracking-tight">
              {personalInfo.primaryRole}
            </h2>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-4 max-w-2xl">
              {personalInfo.supportingStatement}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {personalInfo.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full">
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-sm font-medium text-slate-200 hover:text-white bg-surface-card hover:bg-surface-hover border border-slate-700/80 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span>Contact Me</span>
              </a>

              {/* About Me Link */}
              <a
                href="#about"
                onClick={(e) => scrollTo(e, 'about')}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-mono text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>About Me</span>
              </a>

              {/* Download CV */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-surface-subtle/80 hover:bg-surface-hover border border-slate-800 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Profiles:</span>
              <button
                onClick={(e) => handleSocialClick(e, 'GitHub')}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-surface-subtle px-2.5 py-1 rounded border border-slate-800 transition-colors"
                title={personalInfo.socials.github.placeholderLabel}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub — Placeholder</span>
              </button>
              <button
                onClick={(e) => handleSocialClick(e, 'LinkedIn')}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-surface-subtle px-2.5 py-1 rounded border border-slate-800 transition-colors"
                title={personalInfo.socials.linkedin.placeholderLabel}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn — Placeholder</span>
              </button>
            </div>

          </div>

          {/* Right Column: Sophisticated Developer Visual (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-surface-card shadow-2xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">workspace / shambel-geda</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Build: Ready</span>
                </div>
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center bg-slate-950/90 border-b border-slate-800/80 px-2 pt-2 gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab('engineer')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg transition-colors border-t-2 ${
                    activeCodeTab === 'engineer'
                      ? 'bg-surface-card text-brand-300 border-brand-500'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('security')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg transition-colors border-t-2 ${
                    activeCodeTab === 'security'
                      ? 'bg-surface-card text-emerald-300 border-emerald-500'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SecurityMindset.ts</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('database')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg transition-colors border-t-2 ${
                    activeCodeTab === 'database'
                      ? 'bg-surface-card text-amber-300 border-amber-500'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>schema.sql</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs leading-relaxed bg-surface overflow-x-auto min-h-[300px]">
                {activeCodeTab === 'engineer' && (
                  <div>
                    <div className="text-slate-500">// Primary Developer Profile</div>
                    <div>
                      <span className="text-rose-400">interface</span> <span className="text-amber-300">SoftwareDeveloper</span> {'{'}
                    </div>
                    <div className="pl-4">
                      name: <span className="text-emerald-400">'Shambel Geda'</span>;
                    </div>
                    <div className="pl-4">
                      education: <span className="text-emerald-400">'B.Sc. in Computer Science'</span>;
                    </div>
                    <div className="pl-4">
                      institution: <span className="text-emerald-400">'Dilla University'</span>;
                    </div>
                    <div className="pl-4">
                      status: <span className="text-brand-300">'Current Student'</span>;
                    </div>
                    <div className="pl-4">
                      focusAreas: [<span className="text-sky-300">'Web Apps'</span>, <span className="text-sky-300">'Software Design'</span>, <span className="text-sky-300">'Databases'</span>];
                    </div>
                    <div className="pl-4">
                      primaryStack: [<span className="text-emerald-300">'Python'</span>, <span className="text-emerald-300">'JavaScript'</span>, <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node.js'</span>];
                    </div>
                    <div>{'}'}</div>
                    <div className="mt-3 text-slate-500">// Core Engineering Goal</div>
                    <div>
                      <span className="text-rose-400">const</span> <span className="text-brand-300">objective</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      build: <span className="text-emerald-400">'Practical, maintainable software'</span>,
                    </div>
                    <div className="pl-4">
                      mindset: <span className="text-emerald-400">'Continuous practical learning & secure design'</span>
                    </div>
                    <div>{'};'}</div>
                  </div>
                )}

                {activeCodeTab === 'security' && (
                  <div>
                    <div className="text-slate-500">// Additional Technical Dimension: Cybersecurity</div>
                    <div className="text-slate-500">// Supports software engineering with proactive security</div>
                    <div>
                      <span className="text-rose-400">interface</span> <span className="text-amber-300">SecureSoftwarePractices</span> {'{'}
                    </div>
                    <div className="pl-4">
                      internship: <span className="text-emerald-400">'INSA Penetration Testing'</span>;
                    </div>
                    <div className="pl-4">
                      authVerification: <span className="text-sky-300">true</span>;
                    </div>
                    <div className="pl-4">
                      owaspMitigation: [<span className="text-emerald-300">'SQL Injection'</span>, <span className="text-emerald-300">'Broken Auth'</span>, <span className="text-emerald-300">'XSS'</span>];
                    </div>
                    <div className="pl-4">
                      apiProtection: <span className="text-emerald-400">'Strict input sanitization & JWT validation'</span>;
                    </div>
                    <div>{'}'}</div>
                    <div className="mt-3 text-emerald-400/80">
                      // "Security throughout development, not as an afterthought"
                    </div>
                  </div>
                )}

                {activeCodeTab === 'database' && (
                  <div>
                    <div className="text-slate-500">-- Relational Database & SQL Schemas</div>
                    <div>
                      <span className="text-brand-400">CREATE TABLE</span> <span className="text-amber-300">developer_projects</span> (
                    </div>
                    <div className="pl-4">
                      id <span className="text-rose-400">INTEGER PRIMARY KEY AUTOINCREMENT</span>,
                    </div>
                    <div className="pl-4">
                      title <span className="text-rose-400">VARCHAR(150) NOT NULL</span>,
                    </div>
                    <div className="pl-4">
                      category <span className="text-rose-400">VARCHAR(60) NOT NULL</span>,
                    </div>
                    <div className="pl-4">
                      stack <span className="text-rose-400">TEXT[] NOT NULL</span>,
                    </div>
                    <div className="pl-4">
                      created_at <span className="text-rose-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
                    </div>
                    <div>);</div>
                    <div className="mt-3 text-slate-500">-- Practical CRUD & Schema Integrity</div>
                    <div>
                      <span className="text-brand-400">CREATE INDEX</span> idx_category <span className="text-brand-400">ON</span> developer_projects(category);
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-brand-400">UTF-8</span>
                  <span>TypeScript / SQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Strict Type Checking</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
