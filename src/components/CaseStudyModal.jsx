import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose, isFullstack }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Fechar (ESC)"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Title */}
        <div>
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            isFullstack
              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          }`}>
            {project.category}
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className={`h-4 w-4 shrink-0 ${isFullstack ? 'text-purple-400' : 'text-emerald-400'}`} />
            <span className="font-mono">{project.metrics}</span>
          </div>
        )}

        {/* Deep Dive Sections */}
        <div className="mt-6 space-y-5 text-sm text-slate-300">
          
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <AlertCircle className="h-4 w-4 text-rose-400" />
              O Desafio / Problema
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-400">
              {project.caseStudy?.problem || project.description}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <Cpu className="h-4 w-4 text-cyan-400" />
              Solução Técnica Implementada
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
              {project.caseStudy?.solution}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <Layers className="h-4 w-4 text-purple-400" />
              Arquitetura & Engenharia
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-400">
              {project.caseStudy?.techStackDetails}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-emerald-950/20 p-4 border-emerald-500/20">
            <h4 className="flex items-center gap-2 font-bold text-emerald-300 text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Resultados & Impacto em Produção
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
              {project.caseStudy?.results}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 ${
                isFullstack ? 'bg-purple-600 hover:bg-purple-500' : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              <span>Acessar Portal ao Vivo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Ver Código no GitHub</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-xs font-medium text-slate-400 hover:text-slate-200 py-2 px-3"
          >
            Fechar janela
          </button>
        </div>

      </div>
    </div>
  );
}
