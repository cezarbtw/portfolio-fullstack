import React from 'react';
import { User, CheckCircle2, ShieldAlert, Cpu, HeartPulse, Lock, ArrowUpRight } from 'lucide-react';
import { personalInfo, fullstackData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
            <User className="h-3.5 w-3.5 text-purple-400" />
            <span>Sobre Mim & Perfil Profissional</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Engenharia de software focada em Java (Spring Boot), React, Python e conformidade de dados.
          </h2>
        </div>

        {/* Grid Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {fullstackData.bio.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Localização: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Status: {personalInfo.status}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Modalidade: Remoto / Híbrido</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-3 border border-slate-800 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Especialidades: Java 17, Spring Boot, React & Python</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards on the Right */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* MediClin Spotlight */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">MediClin · Gestão Hospitalar</h3>
                  <span className="text-xs text-slate-400">Java 17 • Spring Boot 3 • React 18 • MySQL 8.0</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Sistema corporativo de prontuário eletrônico (PEP), agendamentos em tempo real sem conflito de horário, emissão de PDFs timbrados e conformidade estrita com as normas da LGPD e CFM.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-semibold">Docker Compose & Flyway</span>
                <a
                  href="https://github.com/cezarbtw/Projeto-Medicos"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-white transition-colors"
                >
                  <span>Ver no GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Cripto EmotionLens Spotlight */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Lock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Cripto EmotionLens</h4>
                  <span className="text-[11px] text-slate-400">FastAPI • PyTorch • YOLOv8 • React 18</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plataforma com visão computacional para telemetria de microexpressões faciais em tempo real, aliada a uma camada autoral de criptografia de alta velocidade para proteção de dados biométricos.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
