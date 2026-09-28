import React from 'react';

export default function ProjectFilter({ categories, activeFilter, onSelectFilter }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Project category filters">
      {categories.map((cat) => {
        const isActive = activeFilter === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectFilter(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium font-mono transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              isActive
                ? 'bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-600/30'
                : 'bg-surface-card text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-surface-hover'
            }`}
          >
            {cat.label}
            {cat.count !== undefined && (
              <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${
                isActive ? 'bg-brand-700 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
