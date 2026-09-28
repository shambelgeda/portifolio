import React from 'react';

export default function SectionHeading({ 
  number, 
  title, 
  subtitle, 
  align = "left",
  badge
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 bg-brand-950/60 border border-brand-800/60 px-2 py-0.5 rounded">
            {number}
          </span>
        )}
        {badge && (
          <span className="font-mono text-xs font-medium tracking-wide text-secondary bg-secondary-subtle border border-secondary/30 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
