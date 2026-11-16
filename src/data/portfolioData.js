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
  badge: "Java 17 • Spring Boot 3 • React 18 • Python (FastAPI) • MySQL • Docker",
  accentColor: "purple",
  gradientText: "from-purple-400 via-indigo-300 to-cyan-400",
  tagline: "Desenvolvedor Full Stack especializado em arquiteturas robustas em Java (Spring Boot) e Python (FastAPI), com interfaces reativas em React e TypeScript.",
  headline: "Desenvolvedor Full Stack focado em Java, Spring Boot, React, Python e arquiteturas modernas de alta performance.",
  bio: [
    "Sou desenvolvedor Full Stack com sólida vivência no ecossistema Java (Java 17, Spring Boot 3, Spring Security, JPA/Hibernate) e no ecossistema Web (React 18, TypeScript, Tailwind CSS e Vite), além de ampla experiência com Python (FastAPI, PyTorch, OpenCV).",
    "Sou o autor e arquiteto do MediClin, uma plataforma completa de gestão clínica e hospitalar com backend RESTful em Spring Boot, persistência relacional em MySQL, controle de acesso RBAC, mensageria e SPA responsiva em React em conformidade estrita com LGPD e normas do CFM.",
    "Também desenvolvi o Cripto EmotionLens, uma solução inovadora de telemetria afetiva e visão computacional em tempo real com FastAPI e React, integrando redes neurais profundas (YOLOv8 e EfficientNet) com arquitetura de criptografia em duas camadas de altíssimo desempenho (latência < 0.3ms)."
  ],
  stats: [
    { label: "Projetos em Produção", value: "MediClin & EmotionLens", hint: "Java Spring Boot & Python FastAPI" },
    { label: "Repositórios GitHub", value: "18+", hint: "Aplicações web, desktop e APIs" },
    { label: "Stack Principal", value: "Java & React", hint: "Spring Boot 3, TypeScript & Python" },
    { label: "Disponibilidade", value: "Imediata", hint: "Full-time / Remoto ou Híbrido" }
  ],
  skills: {
    categories: [
      {
        name: "Backend & Arquitetura (Java & Python)",
        skills: [
          { name: "Java 17 & Spring Boot 3", level: "Avançado", badge: "Core Backend" },
          { name: "Spring Security & JWT / RBAC", level: "Avançado", badge: "Security" },
          { name: "Spring Data JPA & Hibernate", level: "Avançado", badge: "ORM" },
          { name: "Python (FastAPI & Flask)", level: "Avançado", badge: "APIs & IA" },
          { name: "Arquitetura RESTful & Swagger", level: "Avançado", badge: "Design" },
          { name: "Testes (JUnit 5 & Mockito)", level: "Intermediário/Avançado", badge: "Quality" }
        ]
      },
      {
        name: "Frontend Moderno & Interfaces",
        skills: [
          { name: "React 18 & Vite", level: "Avançado", badge: "Core Frontend" },
          { name: "TypeScript & JavaScript ES6+", level: "Avançado", badge: "Language" },
          { name: "Tailwind CSS & CSS Grid/Flex", level: "Avançado", badge: "Styling" },
          { name: "Gerenciamento de Estado & Hooks", level: "Avançado", badge: "State" },
          { name: "Integração de APIs REST", level: "Avançado", badge: "Integration" },
          { name: "UI/UX & Responsividade Fluida", level: "Avançado", badge: "UX" }
        ]
      },
      {
        name: "Bancos de Dados, DevOps & IA",
        skills: [
          { name: "MySQL 8.0 & PostgreSQL", level: "Avançado", badge: "Databases" },
          { name: "Flyway Migrations", level: "Avançado", badge: "DB Migrations" },
          { name: "Docker & Docker Compose", level: "Avançado", badge: "DevOps" },
          { name: "Git & GitHub CI / Actions", level: "Avançado", badge: "CI/CD" },
          { name: "Visão Computacional (YOLOv8 & OpenCV)", level: "Avançado", badge: "AI/ML" }
        ]
      }
    ]
  },
  projects: [
    {
      id: "mediclin",
      title: "MediClin · Gestão Clínica & Hospitalar Integrada",
      category: "Full Stack Empresarial / Saúde",
      description: "Plataforma completa de gestão clínica combinando API REST em Java 17 com Spring Boot 3 e SPA reativa em React 18 com Vite. Controle cadastral de médicos/pacientes, agendamento com grade interativa dupla (calendário e tabela), validações anti-choque de horários, Prontuário Eletrônico do Paciente (PEP), emissão de atestados e receitas em PDF timbrado e conformidade estrita com LGPD e CFM.",
      tags: ["Java 17", "Spring Boot 3", "React 18", "MySQL 8.0", "Docker", "JWT / RBAC", "Flyway", "Swagger"],
      featured: true,
      metrics: "Arquitetura Hexagonal | Docker Compose | Validações de Regra de Negócio | LGPD Compliant",
      github: "https://github.com/cezarbtw/Projeto-Medicos",
      demo: null,
      caseStudy: {
        problem: "Clínicas médicas sofrem com perda de dados, atrasos em agendas de papel e riscos de segurança da informação no manuseio de dados de saúde de pacientes.",
        solution: "Construção de uma solução full stack corporativa: backend em Java com Spring Boot 3 estruturado em camadas de serviço, repositório e DTOs, com segurança via Spring Security e JWT, associado a um frontend reativo em React com grade interativa de agendamentos e prontuário digital.",
        techStackDetails: "Java 17, Spring Boot 3, Spring Data JPA, Flyway para migrações versionadas, banco relacional MySQL 8.0, geração de relatórios com iText/PDF, interface SPA em React 18 e empacotamento com Docker Compose.",
        results: "Sistema pronto para produção com autenticação granular por perfil (ADMIN, MÉDICO, RECEPÇÃO), eliminação total de conflitos de agendamento e rastreabilidade total de prontuários médicos."
      }
    },
    {
      id: "cripto-emotion-lens",
      title: "Cripto EmotionLens (Telemetria Afetiva & Criptografia)",
      category: "Full Stack & Visão Computacional",
      description: "Plataforma inteligente de reconhecimento de expressões faciais e análise temporal segundo a segundo em vídeos, com pipeline de visão computacional (YOLOv8-face e HSEmotion EfficientNet) e arquitetura de criptografia em duas camadas (MCE autoral + algoritmos de bloco) para proteção de dados biométricos sensíveis em conformidade com a LGPD.",
      tags: ["Python", "FastAPI", "React 18", "PyTorch", "YOLOv8", "OpenCV", "SQL Server", "Criptografia"],
      featured: true,
      metrics: "Inferência em tempo real | Latência de criptografia < 0.3ms | Filtro CLAHE anti-ruído",
      github: "https://github.com/cezarbtw",
      demo: null,
      caseStudy: {
        problem: "Processar telemetria biométrica facial de alta dimensionalidade em tempo real sem comprometer a privacidade do usuário nem estourar a latência aceitável de aplicações web.",
        solution: "Desenvolvimento de um pipeline assíncrono em Python com FastAPI conectado a modelos de deep learning otimizados, com normalização de iluminação adaptativa (CLAHE) e camada proprietária de criptografia rápida que ofusca os dados biométricos antes da persistência no banco.",
        techStackDetails: "FastAPI no backend para endpoints assíncronos de alta vazão, React 18 no frontend com gráficos de telemetria afetiva segundo a segundo, PyTorch/YOLOv8 para detecção facial e SQL Server para persistência segura.",
        results: "Execução comprovada com tempo mediano de criptografia de 0,22 ms por ciclo, proteção rigorosa contra vazamento biométrico e dashboard interativo fluido."
      }
    },
    {
      id: "detector-rachaduras",
      title: "Detector de Rachaduras com YOLOv8 & PyQt5",
      category: "Desktop & Visão Computacional",
      description: "Software para detecção, análise e segmentação automática de fissuras estruturais na construção civil utilizando redes neurais convolucionais profundas e interface nativa em PyQt5.",
      tags: ["Python", "YOLOv8", "PyQt5", "OpenCV", "Deep Learning", "NumPy"],
      featured: true,
      metrics: "Segmentação de pixels em tempo real | Interface Desktop | Diagnóstico estrutural",
      github: "https://github.com/cezarbtw/Detector-de-Rachaduras",
      demo: null,
      caseStudy: {
        problem: "Inspeções manuais de patologias em obras civis são demoradas, subjetivas e dependem de laudos visuais propensos a falhas de estimativa.",
        solution: "Desenvolvimento de software desktop com Python e PyQt5 conectado ao modelo de segmentação YOLOv8, permitindo carregar imagens ou feeds de vídeo e obter a marcação exata da fissura e estimativa dimensional.",
        techStackDetails: "Python, YOLOv8, OpenCV para filtros de contraste morfológico e PyQt5 para interface intuitiva com exportação de relatórios.",
        results: "Geração instantânea de diagnósticos de integridade para laudos periciais de engenharia."
      }
    },
    {
      id: "chatbot-meio-ambiente",
      title: "ChatBot Meio Ambiente",
      category: "AI & Chatbot",
      description: "Assistente conversacional desenvolvido em Python para triagem de dúvidas da população sobre legislação ambiental, coleta seletiva e normativas de preservação.",
      tags: ["Python", "NLP", "Automação", "Chatbot"],
      featured: false,
      metrics: "Respostas instantâneas | Mapeamento de intenções | Arquitetura modular",
      github: "https://github.com/cezarbtw/ChatBot-Meio-Ambiente",
      demo: null,
      caseStudy: {
        problem: "Dificuldade do cidadão em localizar rapidamente normativas e diretrizes de sustentabilidade em portais públicos.",
        solution: "Desenvolvimento de um bot em Python com mapeamento de intenções e respostas orientadas para perguntas frequentes.",
        techStackDetails: "Python, manipulação de texto, correspondência heurística e arquitetura desacoplada.",
        results: "Canal simplificado de atendimento cívico-ambiental."
      }
    }
  ],
  experiences: [
    {
      role: "Arquiteto de Software & Desenvolvedor Full Stack",
      company: "MediClin & Cripto EmotionLens (Projetos de Destaque)",
      period: "2024 - Presente",
      type: "Engenharia de Software & IA",
      description: "Concepção, arquitetura e desenvolvimento integral de sistemas corporativos de ponta a ponta em Java e Python.",
      achievements: [
        "Desenvolvimento do MediClin: API robusta em Java 17 / Spring Boot 3 e frontend em React 18, com validações de negócio, agendamento de consultas, prontuário eletrônico e conformidade LGPD.",
        "Desenvolvimento do Cripto EmotionLens: pipeline em FastAPI e React 18 com redes neurais (YOLOv8 e EfficientNet) e camada autoral de criptografia de alto desempenho (0.22ms).",
        "Implementação de boas práticas de engenharia de software: Clean Architecture, Docker Compose, Flyway migrations e testes automatizados."
      ]
    },
    {
      role: "Desenvolvedor Open Source & Software Engineer",
      company: "GitHub / Portfólio Pessoal",
      period: "Constante",
      type: "Engenharia & Pesquisa Aplicada",
      description: "Criação e manutenção de repositórios cobrindo ecossistemas Java, React, TypeScript, Python e Visão Computacional.",
      achievements: [
        "18+ repositórios públicos cobrindo desde microsserviços em Spring Boot até aplicações desktop em Python/PyQt5.",
        "Integração contínua de modelos de IA com interfaces de usuário intuitivas e bancos de dados relacionais estruturados.",
        "Padronização de código limpo, documentação detalhada (Swagger / OpenAPI) e conteinerização."
      ]
    }
  ]
};
