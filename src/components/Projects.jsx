import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import CaseStudyModal from './CaseStudyModal';
import { fullstackData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'featured', label: 'Em Destaque' },
    { id: 'java', label: 'Java & Spring Boot' },
    { id: 'python', label: 'Python & IA / Visão' },
  ];

  const filteredProjects = fullstackData.projects.filter((proj) => {
    if (selectedFilter === 'featured') return proj.featured;
    if (selectedFilter === 'java') return proj.tags.some(t => t.includes('Java') || t.includes('Spring'));
    if (selectedFilter === 'python') return proj.tags.some(t => ['Python', 'YOLOv8', 'NLP', 'FastAPI'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
              <FolderGit2 className="h-3.5 w-3.5 text-purple-400" />
              <span>Portfólio de Projetos</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Sistemas Empresariais & Plataformas Web
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Aplicações completas com backend robusto, arquitetura orientada a serviços, persistência relacional e interfaces reativas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-900 p-1 border border-slate-800">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${selectedFilter === filter.id
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl border bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${project.featured
                ? 'border-purple-500/40 hover:border-purple-500/80 bg-gradient-to-b from-purple-950/20 to-slate-900/60'
                : 'border-slate-800/80 hover:border-slate-700'
                }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      <Sparkles className="h-3 w-3" />
                      Destaque
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics Pill */}
                {project.metrics && (
                  <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-purple-400" />
                    <span className="font-mono text-[11px] truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-slate-800/80 px-2 py-1 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Estudo de Caso</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition-colors"
                      title="Ver Repositório no GitHub"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-white transition-colors bg-purple-600 hover:bg-purple-500"
                      title="Abrir Demonstração"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          isFullstack={true}
        />
      )}
    </section>
  );
}
