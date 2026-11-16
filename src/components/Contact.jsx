import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [customMessage, setCustomMessage] = useState(
    `Olá ${personalInfo.shortName}! Vi seu portfólio de Desenvolvedor Full Stack e gostaria de conversar sobre uma oportunidade.`
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {}
    
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-purple-600/10 via-indigo-600/10 to-cyan-500/10 blur-[140px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
              <Mail className="h-3.5 w-3.5 text-purple-400" />
              <span>Vamos Conversar?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pronto para construir soluções de alto impacto como{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Dev Full Stack
              </span>
              .
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
              Estou disponível para vagas de contratação imediata (CLT / PJ, remoto ou híbrido). Vamos agendar um bate-papo técnico?
            </p>

            <div className="space-y-3 pt-2">
              
              {/* Email Card */}
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-purple-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Profissional</div>
                    <div className="text-sm font-mono font-medium text-white select-all">{personalInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                    title="Abrir no app de e-mail"
                  >
                    <Send className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-slate-700 group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Conectar no</div>
                    <div className="text-sm font-semibold text-white">LinkedIn</div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-slate-700 group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-white group-hover:scale-105 transition-transform">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Ver Código no</div>
                    <div className="text-sm font-semibold text-white">GitHub ({personalInfo.githubUsername})</div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Quick WhatsApp Launcher */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Contato Rápido no WhatsApp</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Envie uma mensagem direta personalizada para batermos um papo sem burocracia.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Mensagem Personalizada:
                  </label>
                  <textarea
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-xs sm:text-sm text-slate-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enviar pelo WhatsApp Agora</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Ao clicar, o WhatsApp Web ou App será aberto com esta mensagem preenchida.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
