import React from 'react';
import { User, CheckCircle2, Building2, BrainCircuit, ArrowUpRight } from 'lucide-react';
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
            Combinando rigor técnico com foco em interfaces fluidas e APIs robustas.
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
                <span>Foco: Entregas de Alto Impacto</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards on the Right */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* TCM-GO Spotlight */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">TCM-GO Portal do Cidadão</h3>
                  <span className="text-xs text-slate-400">Tribunal de Contas dos Municípios (Goiás)</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Atuação direta na concepção frontend da aba 'Meio Ambiente' no Novo Portal do Cidadão. Foco em UX responsiva, consumo eficiente de APIs públicas e navegação amigável para permitir o acompanhamento dos gastos e conformidade ambiental em Goiás.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-semibold">246 Municípios Atendidos</span>
                <a
                  href="https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-white transition-colors"
                >
                  <span>Ver Portal Oficial</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* AI / Machine Learning Spotlight */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <BrainCircuit className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Pesquisa & IA Aplicada</h4>
                  <span className="text-[11px] text-slate-400">YOLOv8 & Visão Computacional</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Desenvolvo sistemas desktop completos conectando modelos de redes neurais profundas (YOLOv8) com interfaces gráficas em Python/PyQt5 para inspeção estrutural automatizada.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
