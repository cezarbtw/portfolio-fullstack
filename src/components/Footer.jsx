import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-white text-sm">
              {personalInfo.name}
            </div>
            <p className="text-slate-500">
              Portfólio Profissional de Desenvolvedor Full Stack (React, Node.js, Python, TypeScript, SQL).
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-sky-400"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900 hover:text-white hover:border-slate-700 transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center text-slate-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </div>
          <div>
            Construído com React, Tailwind CSS, Lucide Icons & Vite.
          </div>
        </div>

      </div>
    </footer>
  );
}
