import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo, fullstackData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import InteractiveDevHero from './InteractiveDevHero';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-indigo-500/10 to-cyan-500/10 blur-[130px] pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1 text-xs font-medium text-slate-300 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>{fullstackData.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Olá, sou {personalInfo.shortName}.{' '}
              <span className={`bg-gradient-to-r ${fullstackData.gradientText} bg-clip-text text-transparent block mt-2`}>
                {fullstackData.headline}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              {fullstackData.tagline}
            </p>

            {/* Quick Proof Badge: MediClin & Cripto EmotionLens */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 text-xs text-slate-300 flex items-start gap-3">
              <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-purple-400" />
              <div>
                <strong className="text-white">Destaques em Engenharia de Software:</strong>{' '}
                Arquiteto do <span className="text-purple-300 font-semibold">MediClin</span> (API completa em Java 17 com Spring Boot 3 + React 18, MySQL e Docker) e do <span className="text-purple-300 font-semibold">Cripto EmotionLens</span> (FastAPI, React 18, PyTorch, YOLOv8 e criptografia de alto desempenho).
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-purple-600/25"
              >
                <span>Ver Projetos em Produção</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub ({personalInfo.githubUsername})</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <LinkedinIcon className="h-4 w-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Sandbox */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 blur-xl opacity-50"></div>
              <InteractiveDevHero />
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {fullstackData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all hover:border-slate-700 hover:bg-slate-900/60"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 font-mono">
                {stat.hint}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
