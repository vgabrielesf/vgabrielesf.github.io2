import { FaCode, FaMobile, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

// Dados do portfólio pessoal
export const portfolioData = {
  personalInfo: {
    name: 'Vitória Gabriele',
    title: 'Desenvolvedora Full Stack',
    bio: 'Desenvolvedora apaixonada por tecnologia com experiência em React, Node.js e desenvolvimento web moderno. Sempre em busca de novos desafios e oportunidades de aprendizado.',
    location: 'Brasil',
    email: 'vitoria@exemplo.com',
    linkedin: 'https://linkedin.com/in/vitoria-gabriele',
    github: 'https://github.com/vitoriagabriele'
  }
};

export const skills = [
  {
    id: 1,
    icon: FaCode,
    title: 'Frontend Development',
    description: 'Criação de interfaces modernas e responsivas.',
    details: 'Especializada em React, Next.js, TypeScript, Tailwind CSS e outras tecnologias modernas de frontend. Foco em criar experiências de usuário excepcionais com código limpo e performático.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'HTML5', 'CSS3']
  },
  {
    id: 2,
    icon: FaMobile,
    title: 'Backend Development',
    description: 'Desenvolvimento de APIs robustas e escaláveis.',
    details: 'Experiência em Node.js, Express, banco de dados relacionais e não-relacionais, criação de APIs RESTful e implementação de arquiteturas escaláveis.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API REST', 'JWT', 'Mongoose']
  }
];

export const education = [
  {
    id: 1,
    icon: FaGraduationCap,
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade de Tecnologia',
    period: '2022 - 2024',
    description: 'Formação técnica em desenvolvimento de software.',
    details: 'Curso técnico focado em desenvolvimento de sistemas, programação orientada a objetos, banco de dados, engenharia de software e metodologias ágeis.',
    subjects: ['Programação Web', 'Banco de Dados', 'Engenharia de Software', 'Metodologias Ágeis']
  }
];

export const certifications = [
  {
    id: 1,
    icon: FaCertificate,
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2024',
    description: 'Certificação oficial em desenvolvimento React.',
    details: 'Certificação que comprova conhecimento avançado em React, incluindo hooks, context API, performance optimization e melhores práticas de desenvolvimento.',
    skills: ['React Hooks', 'Context API', 'Performance', 'Testing']
  },
  {
    id: 2,
    icon: FaCertificate,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    description: 'Certificação em algoritmos e estruturas de dados.',
    details: 'Curso abrangente sobre algoritmos fundamentais, estruturas de dados e resolução de problemas com JavaScript.',
    skills: ['Algoritmos', 'Estruturas de Dados', 'Problem Solving', 'ES6+']
  }
];

export const projects = [
  {
    id: 1,
    icon: FaProjectDiagram,
    title: 'EngTools Suite - Versão Beta',
    description: 'Aplicativo de ferramentas para engenharia, versão beta com múltiplos módulos.',
    details: 'Aplicação para automação de modelagens 3D, integração com Inventor e Rhinoceros, e recursos para engenheiros e designers.',
    technologies: ['Inventor', 'Rhinoceros', 'Automação', 'React', 'Node.js'],
    github: '',
    demo: '',
    image: '/assets/EngTools Suite - Versão Beta .jpg'
  },
  {
    id: 2,
    icon: FaProjectDiagram,
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com recursos avançados.',
    details: 'Aplicação para gerenciamento de tarefas e projetos com funcionalidades como arrastar e soltar, colaboração em tempo real, notificações e relatórios de produtividade.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    github: 'https://github.com/vitoriagabriele/task-manager',
    demo: 'https://taskmanager-demo.com',
    image: '/images/taskmanager.jpg'
  },
  {
    id: 3,
    icon: FaProjectDiagram,
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico com visualização de dados.',
    details: 'Aplicação que consome APIs meteorológicas para exibir previsões detalhadas, gráficos interativos e alertas climáticos com interface responsiva e moderna.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/vitoriagabriele/weather-dashboard',
    demo: 'https://weather-demo.com',
    image: '/images/weather.jpg'
  }
];

export const contact = [
  {
    id: 1,
    icon: FaEnvelope,
    title: 'Email',
    value: 'vitoria@exemplo.com',
    link: 'mailto:vitoria@exemplo.com',
    description: 'Entre em contato por email para oportunidades profissionais.'
  }
];