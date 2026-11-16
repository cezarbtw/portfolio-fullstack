import React from 'react';
import { Layers, Code2, Database, Cpu } from 'lucide-react';
import { fullstackData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
            <Layers className="h-3.5 w-3.5 text-purple-400" />
            <span>Competências Técnicas</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Stack Tecnológica & Ferramentas
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Habilidades refinadas em desenvolvimento web, APIs escaláveis, bancos de dados e interfaces reativas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {fullstackData.skills.categories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70"
            >
              <div className="flex items-center gap-2.5 mb-5 border-b border-slate-800 pb-3">
                {catIdx === 0 ? (
                  <Code2 className="h-5 w-5 text-purple-400" />
                ) : catIdx === 1 ? (
                  <Database className="h-5 w-5 text-cyan-400" />
                ) : (
                  <Cpu className="h-5 w-5 text-indigo-400" />
                )}
                <h3 className="font-bold text-white text-base">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/60 px-3.5 py-2.5 transition-all hover:border-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-400 rounded bg-slate-800/80 px-2 py-0.5">
                        {skill.level}
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {skill.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
