import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenPlaceholderModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Categories list with counts
  const categories = useMemo(() => {
    return [
      { id: 'All', label: 'All Projects', count: projectsData.length },
      { 
        id: 'Software Development', 
        label: 'Software Development', 
        count: projectsData.filter(p => p.filterCategories.includes('Software Development')).length 
      },
      { 
        id: 'Web Development', 
        label: 'Web Development', 
        count: projectsData.filter(p => p.filterCategories.includes('Web Development')).length 
      },
      { 
        id: 'Database', 
        label: 'Database', 
        count: projectsData.filter(p => p.filterCategories.includes('Database')).length 
      },
      { 
        id: 'Cybersecurity', 
        label: 'Cybersecurity', 
        count: projectsData.filter(p => p.filterCategories.includes('Cybersecurity')).length 
      },
    ];
  }, []);

  // Filtered and sorted projects
  const displayedProjects = useMemo(() => {
    let list = [...projectsData];

    if (activeFilter !== 'All') {
      list = list.filter(project => project.filterCategories.includes(activeFilter));
    }

    // Sort order: Priority order (1: Software/Web dev, 2: Fullstack, 3: Database, 4: Cybersecurity)
    return list.sort((a, b) => a.priorityOrder - b.priorityOrder);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="04"
          title="Featured Projects"
          subtitle="Selected work and practical projects across software development, web technologies, databases, and cybersecurity."
        />

        {/* Filter Bar */}
        <ProjectFilter 
          categories={categories}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onOpenPlaceholderModal={onOpenPlaceholderModal}
            />
          ))}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            Note: All projects adhere strictly to verified academic and practical work. Unreleased or planned implementations are openly designated as placeholders.
          </p>
        </div>

      </div>
    </section>
  );
}
