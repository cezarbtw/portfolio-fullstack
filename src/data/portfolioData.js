export const personalInfo = {
  name: "Abraão Cezar Inácio",
  shortName: "Abraão Cezar",
  location: "Goiás, Brasil",
  email: "abraao.cezar.dev@gmail.com",
  phone: "+55 (62) 99999-9999",
  whatsapp: "5562999999999",
  github: "https://github.com/cezarbtw",
  githubUsername: "cezarbtw",
  linkedin: "https://www.linkedin.com/in/cezarinaciol/",
  status: "Disponível para novas oportunidades",
  availability: "Contratação Imediata (Remoto / Híbrido)"
};

export const fullstackData = {
  role: "Desenvolvedor Full Stack",
  badge: "Frontend, Backend, APIs & Cloud",
  accentColor: "purple",
  gradientText: "from-purple-400 via-indigo-300 to-cyan-400",
  tagline: "Construindo aplicações web completas, escaláveis e com foco em alta performance e experiência do usuário.",
  headline: "Desenvolvedor Full Stack focado em código limpo, arquitetura moderna e impacto real.",
  bio: [
    "Sou desenvolvedor Full Stack com sólida vivência em JavaScript, TypeScript, React, Node.js e Python. Minha abordagem combina rigor arquitetural no backend com interfaces fluidas e acessíveis no frontend.",
    "Tive papel ativo no desenvolvimento da aba 'Meio Ambiente' no Novo Portal do Cidadão do TCM-GO (Tribunal de Contas dos Municípios de Goiás), criando interfaces para milhões de cidadãos consultarem gastos públicos e políticas municipais em tempo real.",
    "Além da web tradicional, desenvolvo sistemas inteligentes integrando modelos de Machine Learning (YOLOv8) e visão computacional em interfaces gráficas desktop e APIs modernas."
  ],
  stats: [
    { label: "Projetos no GitHub", value: "18+", hint: "Aplicações web, desktop e IA" },
    { label: "Cidadãos Impactados", value: "100k+", hint: "Via Portal do Cidadão TCM-GO" },
    { label: "Stack Principal", value: "React & Python", hint: "Full stack do banco à interface" },
    { label: "Disponibilidade", value: "Imediata", hint: "Full-time / Remoto ou Híbrido" }
  ],
  skills: {
    categories: [
      {
        name: "Frontend Moderno",
        skills: [
          { name: "React.js", level: "Avançado", badge: "Core" },
          { name: "TypeScript", level: "Avançado", badge: "Core" },
          { name: "JavaScript (ES6+)", level: "Avançado", badge: "Core" },
          { name: "Tailwind CSS", level: "Avançado", badge: "Styling" },
          { name: "HTML5 / Semântico", level: "Avançado", badge: "Base" },
          { name: "CSS3 / Flex & Grid", level: "Avançado", badge: "Base" },
          { name: "Next.js / Vite", level: "Intermediário/Avançado", badge: "Build" },
          { name: "UI/UX & Responsividade", level: "Avançado", badge: "Design" }
        ]
      },
      {
        name: "Backend & APIs",
        skills: [
          { name: "Node.js & Express", level: "Intermediário/Avançado", badge: "Server" },
          { name: "Python (FastAPI / Flask)", level: "Avançado", badge: "Server" },
          { name: "RESTful APIs", level: "Avançado", badge: "Architecture" },
          { name: "Autenticação (JWT / OAuth)", level: "Intermediário", badge: "Security" },
          { name: "Integração de Modelos IA", level: "Avançado", badge: "AI" }
        ]
      },
      {
        name: "Bancos de Dados & Cloud",
        skills: [
          { name: "PostgreSQL", level: "Intermediário/Avançado", badge: "Relacional" },
          { name: "MySQL", level: "Avançado", badge: "Relacional" },
          { name: "Modelagem Relacional", level: "Avançado", badge: "Data" },
          { name: "Git & GitHub CI", level: "Avançado", badge: "DevOps" },
          { name: "Docker", level: "Intermediário", badge: "Container" }
        ]
      }
    ]
  },
  projects: [
    {
      id: "tcmgo-portal",
      title: "Portal do Cidadão TCM-GO (Módulo Meio Ambiente)",
      category: "Web Governamental",
      description: "Participação no desenvolvimento frontend da aba 'Meio Ambiente' no Novo Portal do Cidadão do Tribunal de Contas dos Municípios de Goiás. Interface acessível e responsiva para consulta de políticas públicas e transparência orçamentária dos 246 municípios.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Figma", "Governança"],
      featured: true,
      metrics: "Milhares de acessos diários | 246 municípios | Interface 100% responsiva",
      github: null,
      demo: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
      caseStudy: {
        problem: "Os cidadãos e auditores precisavam de uma ferramenta transparente, intuitiva e de rápida navegação para consultar investimentos e relatórios de conformidade ambiental de todos os municípios de Goiás.",
        solution: "Construção de componentes modulares em React com TypeScript, integrando filtros avançados de busca, tabelas dinâmicas de despesas públicas, consumo otimizado de APIs governamentais e conformidade com padrões de acessibilidade para órgãos de controle externo.",
        techStackDetails: "Frontend em React com TypeScript para tipagem estrita de payloads da API governamental, estilização moderna e design system alinhado ao padrão do TCM-GO.",
        results: "Entrega do módulo em produção no ar, facilitando a auditoria cívica e elevando os índices de transparência pública estadual."
      }
    },
    {
      id: "detector-rachaduras",
      title: "Detector de Rachaduras com YOLOv8 & PyQt5",
      category: "Desktop & Visão Computacional",
      description: "Software para detecção e segmentação automática de fissuras em superfícies e estruturas da construção civil utilizando aprendizado profundo e visão computacional.",
      tags: ["Python", "YOLOv8", "PyQt5", "OpenCV", "Deep Learning", "NumPy"],
      featured: true,
      metrics: "Inferência em tempo real | Segmentação precisa de pixels | Interface Desktop nativa",
      github: "https://github.com/cezarbtw/Detector-de-Rachaduras",
      demo: null,
      caseStudy: {
        problem: "Inspeções manuais de patologias em estruturas de concreto são lentas, subjetivas e suscetíveis a falhas humanas que podem comprometer a segurança da infraestrutura.",
        solution: "Desenvolvimento de uma aplicação desktop em Python integrando o modelo de ponta YOLOv8 para segmentação de instâncias, com interface gráfica desenvolvida em PyQt5 permitindo upload de fotos/vídeos e exibição imediata das áreas com defeito.",
        techStackDetails: "Treinamento e inferência YOLOv8, pré-processamento de imagens com OpenCV, backend lógico em Python e GUI moderna com PyQt5.",
        results: "Automatização de diagnósticos estruturais com alta precisão e geração instantânea de relatórios visuais para engenheiros e inspetores."
      }
    },
    {
      id: "projeto-medicos",
      title: "Projeto Médicos (Sistema Clínico Full Stack)",
      category: "SaaS / Full Stack",
      description: "Plataforma completa para gestão de clínicas médicas, com agendamento online de consultas, prontuário eletrônico e painel administrativo para profissionais da saúde.",
      tags: ["JavaScript", "React", "Node.js", "Express", "MySQL", "REST API"],
      featured: true,
      metrics: "Autenticação segura | Gestão de agendas em tempo real | CRUD completo de prontuários",
      github: "https://github.com/cezarbtw/Projeto-Medicos",
      demo: null,
      caseStudy: {
        problem: "Consultórios médicos enfrentavam desorganização em agendas de papel e atrasos no atendimento pela falta de um sistema integrado e acessível.",
        solution: "Desenvolvimento full stack com frontend interativo em React e API robusta em Node.js/Express, com modelagem relacional em MySQL para gerenciar médicos, pacientes e consultas.",
        techStackDetails: "Frontend SPA reativo, backend RESTful com validações rigorosas e persistência em banco relacional estruturado.",
        results: "Redução no atrito de agendamentos e centralização do histórico médico em uma única tela fluida."
      }
    },
    {
      id: "emotion-dashboard",
      title: "Emotion Dashboard",
      category: "Frontend UI/UX",
      description: "Dashboard interativo e responsivo focado em microinterações, estilização moderna e componentes de métricas visuais.",
      tags: ["JavaScript", "CSS3 Moderno", "HTML5", "UI/UX", "Data Visualization"],
      featured: false,
      metrics: "Design 100% fluído | Animações CSS puras | Alto desempenho de renderização",
      github: "https://github.com/cezarbtw/emotion-dashboard",
      demo: null,
      caseStudy: {
        problem: "Demonstrar domínio avançado de CSS moderno, microinterações e hierarquia visual sem depender de bibliotecas pesadas de terceiros.",
        solution: "Criação de componentes ricos com CSS Grid, Flexbox, custom properties e transições refinadas para exibição de métricas e status.",
        techStackDetails: "HTML5 semântico, arquitetura modular de CSS e JavaScript vanilla para interatividade rápida.",
        results: "Interface de alta fidelidade com nota máxima em métricas de performance (Core Web Vitals)."
      }
    },
    {
      id: "chatbot-meio-ambiente",
      title: "ChatBot Meio Ambiente",
      category: "AI & Chatbot",
      description: "Assistente virtual desenvolvido em Python para tirar dúvidas da população sobre legislação ambiental, coleta seletiva e ações sustentáveis.",
      tags: ["Python", "NLP", "Automação", "Chatbot"],
      featured: false,
      metrics: "Respostas instantâneas | Triagem de dúvidas comuns | Arquitetura modular",
      github: "https://github.com/cezarbtw/ChatBot-Meio-Ambiente",
      demo: null,
      caseStudy: {
        problem: "Cidadãos tinham dificuldade em localizar normativas e informações práticas sobre preservação ambiental nos portais municipais.",
        solution: "Criação de um bot conversacional em Python que processa a linguagem do usuário e orienta sobre diretrizes e fiscalização ambiental de forma didática.",
        techStackDetails: "Python, heurísticas de correspondência e processamento de texto com respostas estruturadas.",
        results: "Canal direto e simplificado de orientação cívico-ambiental."
      }
    }
  ],
  experiences: [
    {
      role: "Desenvolvedor de Software (Frontend & Integração)",
      company: "TCM-GO (Tribunal de Contas dos Municípios de Goiás)",
      period: "Projeto Portal do Cidadão",
      type: "Setor Público / Governança",
      description: "Atuação no desenvolvimento e entrega da aba 'Meio Ambiente' no Novo Portal do Cidadão, conectando os dados governamentais dos 246 municípios goianos a uma interface web intuitiva para controle social.",
      achievements: [
        "Construção de componentes reativos e acessíveis em React e TypeScript para visualização de gastos públicos ambientais.",
        "Integração contínua com APIs REST e tratamento de estados assíncronos para garantir carregamento instantâneo de dados.",
        "Foco em responsividade móvel e conformidade com diretrizes de usabilidade governamental (e-MAG / acessibilidade digital)."
      ]
    },
    {
      role: "Desenvolvedor Full Stack & Projetos Autônomos",
      company: "GitHub / Open Source",
      period: "Constante",
      type: "Projetos Pessoais & Open Source",
      description: "Desenvolvimento de soluções web completas, ferramentas desktop com Python e algoritmos de visão computacional aplicados.",
      achievements: [
        "Criação e manutenção de 18+ repositórios públicos cobrindo JavaScript, TypeScript, Python, MySQL e Visão Computacional.",
        "Implementação de pipelines de inferência de IA integrados a interfaces desktop profissionais (PyQt5 + YOLOv8).",
        "Arquitetura de sistemas médicos e dashboards analíticos com foco em boas práticas e modularidade."
      ]
    }
  ]
};
