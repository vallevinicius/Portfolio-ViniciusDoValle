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
  },
  hero: {
    status: 'Open to new opportunities',
    intro:
      'Software Engineer from Saquarema, Rio de Janeiro. I build APIs and web apps with Java, Node.js and React, from the database to the interface, and I care about code that stays clear and fast under load.',
    seeProjects: 'See my projects',
    email: 'Send an email',
    photoAlt: 'Portrait of Vinicius Valle',
  },
  work: {
    title: 'Projects',
    featured: {
      'Mei De Saqua':
        'A portal for micro-entrepreneurs in Saquarema. It has a management panel, public business pages, search and filters, and forms for registration and contact.',
      'Aqui Tem ODS':
        'An educational platform about the UN Sustainable Development Goals, with navigation by goal, content pages, filters and interactive resources.',
    } as Record<string, string>,
    viewApi: 'View the API on GitHub',
    fromGithub: 'From GitHub',
    loading: 'Loading repositories…',
    error: 'Could not load the repositories from GitHub right now.',
    openProfile: 'Open my GitHub profile',
    openOnGithub: 'open on GitHub',
    pages: 'Project pages',
    page: 'Page',
    previous: 'Previous',
    next: 'Next',
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
    footer: '© 2026 Vinicius Valle. Based in Saquarema, Rio de Janeiro.',
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
  },
  hero: {
    status: 'Aberto a novas oportunidades',
    intro:
      'Engenheiro de Software de Saquarema, Rio de Janeiro. Construo APIs e aplicações web com Java, Node.js e React, do banco de dados à interface, e me preocupo com código que continue claro e rápido sob carga.',
    seeProjects: 'Ver meus projetos',
    email: 'Enviar um e-mail',
    photoAlt: 'Retrato de Vinicius Valle',
  },
  work: {
    title: 'Projetos',
    featured: {
      'Mei De Saqua':
        'Um portal para microempreendedores de Saquarema. Tem painel de gestão, páginas públicas dos negócios, busca e filtros, e formulários de cadastro e contato.',
      'Aqui Tem ODS':
        'Uma plataforma educacional sobre os Objetivos de Desenvolvimento Sustentável da ONU, com navegação por objetivo, páginas de conteúdo, filtros e recursos interativos.',
    },
    viewApi: 'Ver a API no GitHub',
    fromGithub: 'Do GitHub',
    loading: 'Carregando repositórios…',
    error: 'Não foi possível carregar os repositórios do GitHub agora.',
    openProfile: 'Abrir meu perfil no GitHub',
    openOnGithub: 'abrir no GitHub',
    pages: 'Páginas de projetos',
    page: 'Página',
    previous: 'Anterior',
    next: 'Próxima',
  },
  background: {
    title: 'Formação',
    cityHall: 'Prefeitura de Saquarema',
    cityHallRole: 'Desenvolvedor full-stack júnior (estágio), fev 2025 até o momento',
    cityHallText:
      'Construo APIs de ponta a ponta para projetos de alta demanda da prefeitura. Os sistemas em que trabalho suportam picos de mais de 1.000 inscrições e milhares de visitas por dia.',
    degree: 'Bacharelado em Ciência da Computação',
    degreeSchool: 'UNESA (Universidade Estácio de Sá), jan 2023 a nov 2026',
    degreeText: 'Cursando o 7º de 8 semestres.',
    english: 'Inglês',
    englishText: 'Cultura Inglesa, Master 1 (C1/C2)',
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
    footer: '© 2026 Vinicius Valle. Baseado em Saquarema, Rio de Janeiro.',
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
