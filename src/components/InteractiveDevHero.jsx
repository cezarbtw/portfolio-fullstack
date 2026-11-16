import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Copy, Check } from 'lucide-react';

export default function InteractiveDevHero() {
  const [activeTab, setActiveTab] = useState('java');
  const [isRunning, setIsRunning] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    java: `// Backend: MediClin - Spring Boot 3 Controller
@RestController
@RequestMapping("/api/v1/consultas")
@SecurityRequirement(name = "bearer-jwt")
public class ConsultaController {

    @Autowired
    private AgendaDeConsultas agenda;

    @PostMapping
    @Transactional
    public ResponseEntity agendar(@RequestBody @Valid DadosAgendamentoConsulta dados) {
        // Executa cadeia de validadores Spring (anti-choque de horário e antecedência)
        var dto = agenda.agendar(dados);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
}`,
    react: `// Frontend: MediClin - Agendamento Reativo em React 18
export function GradeAgendamento({ medicos, onAgendar }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleConfirm = async () => {
    const payload = { medicoId: selectedSlot.medicoId, data: selectedSlot.hora };
    const response = await api.post('/api/v1/consultas', payload);
    if (response.status === 201) {
      toast.success('Consulta agendada e prontuário sincronizado!');
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900 rounded-xl">
      {/* Grade interativa com detecção de choque de agenda */}
    </div>
  );
}`,
    database: `-- Flyway Migration (V1__create_tables.sql - MySQL 8.0)
CREATE TABLE consultas (
    id BIGINT NOT NULL AUTO_INCREMENT,
    medico_id BIGINT NOT NULL,
    paciente_id BIGINT NOT NULL,
    data_hora DATETIME NOT NULL,
    motivo_cancelamento VARCHAR(100),
    PRIMARY KEY (id),
    CONSTRAINT fk_consultas_medico FOREIGN KEY (medico_id) REFERENCES medicos(id),
    CONSTRAINT fk_consultas_paciente FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    INDEX idx_consultas_data (data_hora, medico_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
  };

  const handleRunApi = () => {
    setIsRunning(true);
    setApiResponse(null);
    setTimeout(() => {
      setIsRunning(false);
      setApiResponse({
        status: 201,
        latency: '28ms',
        source: 'Spring Boot 3 REST API (MediClin)',
        message: 'HTTP 201 CREATED • Agendamento validado pela cadeia de validadores Spring sem choque de horários.'
      });
    }, 600);
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
            mediclin-core ~/java17-spring
          </span>
        </div>

        {/* Abas */}
        <div className="flex items-center space-x-1 rounded-lg bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('java')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'java'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ConsultaController.java
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'react'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            GradeAgendamento.jsx
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'database'
                ? 'bg-purple-600 text-white font-medium shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            V1__tables.sql
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
            <span className="font-mono text-emerald-400">Spring Boot 3.0: Online</span>
            <span className="text-slate-600">•</span>
            <span>Java 17 / JVM</span>
          </div>

          <button
            onClick={handleRunApi}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-600/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Processando no Spring...
              </span>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Testar Endpoint Spring Boot</span>
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
                HTTP {apiResponse.status} • Latência: {apiResponse.latency}
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
