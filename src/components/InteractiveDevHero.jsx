import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Copy, FileCode, Check } from 'lucide-react';

export default function InteractiveDevHero() {
  const [activeTab, setActiveTab] = useState('component');
  const [isRunning, setIsRunning] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    component: `// Frontend: Componente Reativo da Aba Meio Ambiente
export function MunicipalEnvironmentCard({ municipality, metrics }) {
  const [isAudited, setIsAudited] = useState(true);

  return (
    <div className="rounded-xl border border-purple-500/30 bg-slate-900/80 p-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">{municipality.name}</h3>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          Regularidade 100%
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-400">
        Investimento: R$ {metrics.invested.toLocaleString('pt-BR')}
      </p>
    </div>
  );
}`,
    api: `// Backend: API Route com Validação e Caching
import { Router } from 'express';
export const router = Router();

router.get('/api/v1/tcmgo/environment', async (req, res) => {
  const { year = 2024, uf = 'GO' } = req.query;
  
  // Consulta otimizada ao banco com agregação
  const data = await db.municipalities.findMany({
    where: { state: uf, auditYear: Number(year) },
    select: { id: true, name: true, budget: true, complianceScore: true },
    cache: { ttlSeconds: 300 }
  });

  return res.status(200).json({
    status: 'success',
    totalMunicipalities: data.length, // 246 municípios
    auditedAt: new Date().toISOString(),
    records: data
  });
});`,
    database: `-- Modelagem Relacional Otimizada
CREATE TABLE municipal_environment_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    municipality_ibge VARCHAR(7) NOT NULL,
    municipality_name VARCHAR(120) NOT NULL,
    budget_allocated NUMERIC(15, 2) NOT NULL,
    compliance_score NUMERIC(5, 2) CHECK (compliance_score BETWEEN 0 AND 100),
    audited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_municipality FOREIGN KEY (municipality_ibge) 
      REFERENCES municipalities(ibge_code) ON DELETE RESTRICT
);

CREATE INDEX idx_env_audit_year ON municipal_environment_records (municipality_ibge, audited_at DESC);`
  };

  const handleRunApi = () => {
    setIsRunning(true);
    setApiResponse(null);
    setTimeout(() => {
      setIsRunning(false);
      setApiResponse({
        status: 200,
        latency: '34ms',
        total: 246,
        source: 'TCM-GO Portal Cidadão API',
        message: 'Conexão e payload íntegros. Dados dos 246 municípios validados.'
      });
    }, 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl border border-purple-500/30 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-purple-500/50">
      {/* Header do Editor */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 gap-2">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1">
            <Terminal className="h-3.5 w-3.5 text-purple-400" />
            cezar-stack-env ~/portfolio
          </span>
        </div>

        {/* Abas */}
        <div className="flex items-center space-x-1 rounded-lg bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('component')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'component'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ReactCard.tsx
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'api'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            apiRouter.ts
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'database'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            schema.sql
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-purple-300 transition-colors px-2 py-1 rounded hover:bg-slate-800"
          title="Copiar código"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>

      {/* Editor Body */}
      <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[300px] leading-relaxed bg-slate-950/60">
        <pre>
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>

      {/* Interactive Bar & API Tester */}
      <div className="border-t border-slate-800 bg-slate-900/90 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-emerald-400">Build: Status OK</span>
            <span className="text-slate-600">•</span>
            <span>TypeScript Strict Mode</span>
          </div>

          <button
            onClick={handleRunApi}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-600/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Executando API...
              </span>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Simular Chamada da API</span>
              </>
            )}
          </button>
        </div>

        {/* API Response Drawer */}
        {apiResponse && (
          <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-3 text-xs font-mono text-emerald-300 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                HTTP 200 OK • Latência: {apiResponse.latency}
              </span>
              <span className="text-slate-400 text-[11px]">{apiResponse.source}</span>
            </div>
            <p className="mt-1 text-slate-300">{apiResponse.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
