import React from 'react';
import { ExternalLink, Info, Shield, Code, Database, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenPlaceholderModal }) {
  const isCyber = project.category === "Cybersecurity";
  const isPlaceholder = project.isPlaceholder;

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Cybersecurity":
        return <Shield className="w-3.5 h-3.5 text-emerald-400" />;
      case "Database":
        return <Database className="w-3.5 h-3.5 text-amber-400" />;
      case "Web Development":
        return <Globe className="w-3.5 h-3.5 text-sky-400" />;
      default:
        return <Code className="w-3.5 h-3.5 text-brand-400" />;
    }
  };

  const handleLinkClick = (e, type, url, placeholderText) => {
    e.preventDefault();
    if (onOpenPlaceholderModal) {
      onOpenPlaceholderModal({
        title: project.title,
        type: type,
        message: placeholderText || `${type} link will be connected once the official repository/deployment is configured.`,
        isPlaceholderProject: isPlaceholder
      });
    }
  };

  return (
    <article 
      className={`group flex flex-col justify-between rounded-xl border p-6 transition-all duration-300 ${
        isCyber
          ? 'bg-surface-card/80 border-slate-800/80 hover:border-emerald-900/60 hover:shadow-card'
          : isPlaceholder
            ? 'bg-surface-card border-dashed border-slate-700/80 hover:border-brand-500/50 hover:shadow-card'
            : 'bg-surface-card border-slate-800 hover:border-brand-500/50 hover:shadow-card-hover'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300">
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
          </div>

          {isPlaceholder ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-950/60 text-amber-400 border border-amber-800/50">
              <Info className="w-3 h-3" />
              Placeholder Project
            </span>
          ) : project.badge ? (
            <span className="text-[11px] font-mono font-medium text-slate-400">
              {project.badge}
            </span>
          ) : null}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights / Technical Aspects */}
        {project.highlights && (
          <ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-sans border-t border-slate-800/60 pt-3">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions / Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => handleLinkClick(e, 'GitHub Repository', project.githubUrl, project.githubPlaceholder)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-surface-subtle hover:bg-surface-hover px-3 py-2 rounded-lg border border-slate-700/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            title={project.githubPlaceholder || "View GitHub"}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </button>

          <button
            onClick={(e) => handleLinkClick(e, 'Live Demo', project.liveDemoUrl, project.liveDemoPlaceholder)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-400 hover:text-brand-300 bg-brand-950/40 hover:bg-brand-950/70 px-3 py-2 rounded-lg border border-brand-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            title={project.liveDemoPlaceholder || "Live Demo"}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </button>
        </div>
      </div>
    </article>
  );
}
