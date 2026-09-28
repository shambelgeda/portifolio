import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact({ onOpenPlaceholderModal }) {
  const handleSocialClick = (e, name) => {
    e.preventDefault();
    if (onOpenPlaceholderModal) {
      onOpenPlaceholderModal({
        title: `${name} Profile Link`,
        type: 'Social Profile',
        message: `${name} link is a designated placeholder until confirmed.`
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="09"
          title="Let's Build Something Together"
          subtitle="I'm interested in software development opportunities, technical collaborations, internships, projects, and opportunities to learn from experienced developers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Links (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-card border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-white mb-3">
                Connect Directly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you have an internship position, software project, technical question, or mentorship opportunity, I would be glad to talk.
              </p>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-slate-800">
                  <div className="p-2 rounded-lg bg-brand-950/60 text-brand-400 border border-brand-800/50 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400 block font-mono">Email Inquiries</span>
                    <a 
                      href={`mailto:${personalInfo.socials.email.address}`}
                      className="text-brand-300 hover:text-brand-200 font-medium break-all"
                    >
                      {personalInfo.socials.email.address}
                    </a>
                    <span className="text-[10px] text-amber-400/90 block font-mono mt-0.5">
                      ({personalInfo.socials.email.placeholderLabel})
                    </span>
                  </div>
                </div>

                {/* GitHub item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-slate-800">
                  <div className="p-2 rounded-lg bg-surface-subtle text-slate-300 border border-slate-700/60 shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400 block font-mono">GitHub Profile</span>
                    <button
                      onClick={(e) => handleSocialClick(e, 'GitHub')}
                      className="text-slate-200 hover:text-white font-medium text-left"
                    >
                      {personalInfo.socials.github.placeholderLabel}
                    </button>
                    <span className="text-[10px] text-slate-500 block font-mono mt-0.5">
                      Status: Placeholder
                    </span>
                  </div>
                </div>

                {/* LinkedIn item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-slate-800">
                  <div className="p-2 rounded-lg bg-surface-subtle text-slate-300 border border-slate-700/60 shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400 block font-mono">LinkedIn Profile</span>
                    <button
                      onClick={(e) => handleSocialClick(e, 'LinkedIn')}
                      className="text-slate-200 hover:text-white font-medium text-left"
                    >
                      {personalInfo.socials.linkedin.placeholderLabel}
                    </button>
                    <span className="text-[10px] text-slate-500 block font-mono mt-0.5">
                      Status: Placeholder
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for software engineering internships & projects</span>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <ContactForm emailAddress={personalInfo.socials.email.address} />
          </div>

        </div>

      </div>
    </section>
  );
}
