import React, { useState } from 'react';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Trajetória', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo / Nome */}
        <div className="flex items-center space-x-3">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-purple-500/25 text-white shadow-lg transition-transform group-hover:scale-105">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                {personalInfo.shortName}
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono text-purple-400">
                / fullstack-dev
              </span>
            </div>
          </a>
        </div>

        {/* Navigation & Action Buttons */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <nav className="flex space-x-6 text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 bg-purple-600 hover:bg-purple-500 shadow-purple-600/20"
          >
            <span>Falar Comigo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 pt-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold text-white bg-purple-600"
            >
              <span>Falar Comigo</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
