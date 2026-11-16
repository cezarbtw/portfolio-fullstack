import React from 'react';
import { Briefcase, Building, Calendar, CheckCircle2 } from 'lucide-react';
import { fullstackData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-800/80 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
            <Briefcase className="h-3.5 w-3.5 text-purple-400" />
            <span>Trajetória Profissional</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Experiência & Entregas Chave
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Histórico de atuação com ênfase em engenharia web, APIs e arquitetura de software.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-slate-800">
          {fullstackData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-6 group`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-slate-900 group-hover:scale-110 transition-transform">
                <div className="h-2.5 w-2.5 rounded-full bg-purple-500"></div>
              </div>

              {/* Spacer for MD screens */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {exp.type}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {exp.role}
                </h3>
                <div className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building className="h-3.5 w-3.5" />
                  <span>{exp.company}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements list */}
                <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-purple-400" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
