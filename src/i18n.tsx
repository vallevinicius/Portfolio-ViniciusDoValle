import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'pt';

const en = {
  nav: {
    projects: 'Projects',
    background: 'Background',
    awards: 'Awards',
    certificates: 'Certificates',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchTo: 'Ver em português',
    switchShort: 'PT',
    cta: 'Get in touch',
  },
  hero: {
    status: 'Open to opportunities in',
    statusPlaces: 'Rio de Janeiro and São Paulo',
    aboutTitle: 'About me',
    intro:
      'Software Engineer from Rio de Janeiro. I build APIs and web apps with Java, Node.js and React, from the database to the interface, and I care about code that stays clear and fast under load.',
    seeProjects: 'See my projects',
    email: 'Send an email',
    contactTitle: 'Contact by email',
    contactHint: 'Write to me and I will reply soon.',
    location: 'Rio de Janeiro',
    characterAlt: '3D character inspired by Vinicius Valle, wearing sunglasses and a black hoodie',
    headline: ['Full-stack code', 'that holds up', 'under load'],
    stackLabel: 'Core stack',
    stat: '1,000+',
    statLabel: 'sign-ups handled at registration peaks',
  },
  work: {
    title: 'Projects',
    visit: 'Visit site',
    code: 'Code',
    open: 'Show project',
    gallery: 'Live projects',
    items: {
      mei: {
        category: 'City hall portal',
        text: 'A portal for micro-entrepreneurs in Saquarema. It has a management panel, public business pages, search and filters, and forms for registration and contact.',
      },
      ods: {
        category: 'Project bank',
        text: 'A bank of projects from the city halls of Rio de Janeiro: a website where city halls can come and publish their success stories, organized by Sustainable Development Goal.',
      },
      enigmas: {
        category: 'Educational game',
        text: 'A Dark Stories-style card game: each card tells a short real-world mystery linked to one Sustainable Development Goal, and flipping it reveals the solution.',
      },
      apaixonese: {
        category: 'Tourism website',
        text: 'A tourism guide to Saquarema: beaches, events, food and attractions, so visitors can plan their trip.',
      },
      marquo: {
        category: 'Booking SaaS',
        text: 'Online scheduling and management for salons and barbershops: each professional gets their own agenda, and clients book through a link without creating an account.',
      },
      grana: {
        category: 'Web app',
        text: 'A personal finance tracker with sign-in, per-user data synced across devices, and interactive charts by month, year and category.',
      },
      total: {
        category: 'Company website',
        text: 'The institutional website of a software studio: services, products, portfolio, team and a client portal that talks to the company API.',
      },
      rafael: {
        category: 'Client website',
        text: 'A real estate website for a broker: apartments, houses and land for sale and rent, with direct contact with a broker.',
      },
      pratagy: {
        category: 'Client website',
        text: 'The website of a guesthouse between the beach and the lagoon, with rooms, amenities and online booking.',
      },
      vivamar: {
        category: 'Client website',
        text: 'The website of a seafront guesthouse, with rooms and online booking.',
      },
    } as Record<string, { category: string; text: string }>,
  },
  background: {
    title: 'Background',
    cityHall: 'Prefeitura de Saquarema',
    cityHallRole: 'Junior full-stack developer (internship), Feb 2025 to present',
    cityHallText:
      'I build end-to-end APIs for high-demand city hall projects. The systems I work on handle registration peaks of more than 1,000 sign-ups and thousands of daily visits.',
    degree: 'Bachelor in Computer Science',
    degreeSchool: 'UNESA (Estácio de Sá University), Jan 2023 to Nov 2026',
    degreeText: 'Currently in the 7th of 8 semesters.',
    english: 'English',
    englishText: 'Cultura Inglesa, Master 1 (C1/C2)',
    skills: 'Skills',
    groups: { backEnd: 'Back end', frontEnd: 'Front end', data: 'Data', tools: 'Tools' },
  },
  awards: {
    title: 'Awards',
    intro:
      'Prêmio Sebrae Prefeitura Empreendedora. Both projects were recognised, and the photos below are from the ceremony.',
    champion: 'Champion',
    runnerUp: 'Runner-up',
    visit: 'Visit the website',
    group: 'Award photos',
    prev: 'Previous photo',
    next: 'Next photo',
    show: 'Show photo',
    photos: [
      {
        alt: 'The Mei De Saqua team on stage under the 1st place screen',
        caption: 'Champion: Mei De Saqua',
      },
      {
        alt: 'The Aqui Tem ODS team on stage under the 2nd place screen',
        caption: 'Runner-up: Aqui Tem ODS',
      },
      {
        alt: 'The two developers and the mayor holding the award trophies',
        caption: 'The trophies with the mayor',
      },
    ],
  },
  certs: {
    title: 'Certificates',
    items: [
      {
        title: 'Java: object-oriented programming',
        date: 'Feb 2026',
        about: 'Core OOP concepts and advanced practices for building robust Java software.',
      },
      {
        title: 'Git and GitHub: version control and collaboration',
        date: 'Oct 2025',
        about: 'From the basics to collaboration workflows in software projects.',
      },
      { title: 'MySQL', date: 'Aug 2025', about: 'Database modeling and query optimization.' },
    ],
  },
  contact: {
    title: 'Have a role or a project in mind? Write to me.',
    footer: '© 2026 Vinicius Valle. Based in Rio de Janeiro.',
  },
};

export type Copy = typeof en;

const pt: Copy = {
  nav: {
    projects: 'Projetos',
    background: 'Formação',
    awards: 'Prêmios',
    certificates: 'Certificados',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    switchTo: 'View in English',
    switchShort: 'EN',
    cta: 'Fale comigo',
  },
  hero: {
    status: 'Aberto a oportunidades no ',
    statusPlaces: 'Rio de Janeiro e em São Paulo',
    aboutTitle: 'Sobre mim',
    intro:
      'Engenheiro de Software do Rio de Janeiro. Construo APIs e aplicações web com Java, Node.js e React, do banco de dados à interface, e me preocupo com código que continue claro e rápido sob carga.',
    seeProjects: 'Ver meus projetos',
    email: 'Enviar um e-mail',
    contactTitle: 'Contato por e-mail',
    contactHint: 'Escreva e eu respondo em breve.',
    location: 'Rio de Janeiro',
    characterAlt: 'Personagem 3D inspirado em Vinicius Valle, de óculos escuros e moletom preto',
    headline: ['Código full-stack', 'que aguenta', 'a carga'],
    stackLabel: 'Stack principal',
    stat: '1.000+',
    statLabel: 'inscrições suportadas em picos de cadastro',
  },
  work: {
    title: 'Projetos',
    visit: 'Visitar site',
    code: 'Código',
    open: 'Mostrar projeto',
    gallery: 'Projetos no ar',
    items: {
      mei: {
        category: 'Portal da Prefeitura de Saquarema para MEIs',
        text: 'Um portal para microempreendedores de Saquarema. Tem painel de gestão, páginas públicas dos negócios, busca e filtros, e formulários de cadastro e contato.',
      },
      ods: {
        category: 'Banco de projetos',
        text: 'Um banco de projetos das prefeituras do Rio de Janeiro: um site onde as prefeituras podem publicar seus projetos de sucesso, organizados por Objetivo de Desenvolvimento Sustentável.',
      },
      enigmas: {
        category: 'Jogo educativo',
        text: 'Um jogo de cartas no estilo Dark Stories: cada carta traz um mistério curto do mundo real ligado a um Objetivo de Desenvolvimento Sustentável, e virá-la revela a solução.',
      },
      apaixonese: {
        category: 'Site de turismo da Prefeitura de Saquarema',
        text: 'Um guia de turismo de Saquarema: praias, eventos, gastronomia e atrações, para o visitante planejar o roteiro.',
      },
      marquo: {
        category: 'SaaS de agendamento',
        text: 'Agendamento e gestão online para salões e barbearias: cada profissional tem sua própria agenda e o cliente marca pelo link, sem criar conta.',
      },
      grana: {
        category: 'Aplicação web',
        text: 'Um controle financeiro pessoal com login, dados por usuário sincronizados entre dispositivos e gráficos interativos por mês, ano e categoria.',
      },
      total: {
        category: 'Site institucional',
        text: 'O site institucional de um estúdio de software: serviços, produtos, portfólio, equipe e um portal do cliente que conversa com a API da empresa.',
      },
      rafael: {
        category: 'Site para cliente',
        text: 'Um site imobiliário para um corretor: apartamentos, casas e terrenos para venda e locação, com contato direto com o corretor.',
      },
      pratagy: {
        category: 'Site para cliente',
        text: 'O site de uma pousada entre a praia e a lagoa, com quartos, comodidades e reserva online.',
      },
      vivamar: {
        category: 'Site para cliente',
        text: 'O site de uma pousada de frente para o mar, com quartos e reserva online.',
      },
    },
  },
  background: {
    title: 'Formação',
    cityHall: 'Prefeitura de Saquarema',
    cityHallRole: 'Desenvolvedor full-stack júnior (estágio), fev 2025 até o momento',
    cityHallText:
      'Construo APIs de ponta a ponta para projetos de alta demanda da prefeitura. Os sistemas em que trabalho suportam picos de mais de 1.000 inscrições e milhares de visitas por dia.',
    degree: 'Bacharelado em Ciência da Computação',
    degreeSchool: 'UNESA (Universidade Estácio de Sá), jan 2023 a nov 2026',
    degreeText: 'Cursando o 8º de 8 semestres.',
    english: 'Inglês',
    englishText: 'Cultura Inglesa, Master 2 (C1/C2)',
    skills: 'Habilidades',
    groups: { backEnd: 'Back end', frontEnd: 'Front end', data: 'Dados', tools: 'Ferramentas' },
  },
  awards: {
    title: 'Prêmios',
    intro:
      'Prêmio Sebrae Prefeitura Empreendedora. Os dois projetos foram premiados, e as fotos abaixo são da cerimônia.',
    champion: 'Campeão',
    runnerUp: 'Vice-campeão',
    visit: 'Visitar o site',
    group: 'Fotos dos prêmios',
    prev: 'Foto anterior',
    next: 'Próxima foto',
    show: 'Mostrar foto',
    photos: [
      {
        alt: 'A equipe do Mei De Saqua no palco, sob o telão de 1º lugar',
        caption: 'Campeão: Mei De Saqua',
      },
      {
        alt: 'A equipe do Aqui Tem ODS no palco, sob o telão de 2º lugar',
        caption: 'Vice-campeão: Aqui Tem ODS',
      },
      {
        alt: 'Os dois desenvolvedores e a prefeita segurando os troféus',
        caption: 'Os troféus com a prefeita',
      },
    ],
  },
  certs: {
    title: 'Certificados',
    items: [
      {
        title: 'Java: programação orientada a objetos',
        date: 'fev 2026',
        about: 'Conceitos centrais de POO e práticas avançadas para construir software Java robusto.',
      },
      {
        title: 'Git e GitHub: controle de versão e colaboração',
        date: 'out 2025',
        about: 'Do básico aos fluxos de colaboração em projetos de software.',
      },
      { title: 'MySQL', date: 'ago 2025', about: 'Modelagem de bancos de dados e otimização de consultas.' },
    ],
  },
  contact: {
    title: 'Tem uma vaga ou um projeto em mente? Fale comigo.',
    footer: '© 2026 Vinicius Valle. Baseado no Rio de Janeiro.',
  },
};

const dictionaries: Record<Lang, Copy> = { en, pt };
const STORAGE_KEY = 'lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt') return saved;
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  t: Copy;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title =
      lang === 'pt' ? 'Vinicius Valle | Desenvolvedor full-stack' : 'Vinicius Valle | Full-stack developer';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'pt' : 'en'));

  return <LangContext.Provider value={{ lang, toggle, t: dictionaries[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
