import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { Card } from '../UI/card';
import { GlowingEffect } from '../UI/glowing-effect';

interface Project {
  id: number;
  name: string;
  date: string;
  summary: string;
  tech: string[];
  featured: boolean;
  link?: string; // nome do repo ou caminho curto (opcional)
  publicLink?: string | null; // URL completa para repositório/demo público (opcional)
  borderColor: string;
}

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const allProjects: Project[] = [
    {
      id: 1,
      name: 'Mei De Saqua',
      date: '2026',
      summary: 'Complete portal for micro-entrepreneurs in Saquarema: responsive frontend with management panel, public business pages, searches and filters, in addition to interfaces for registration and communication. The backend supports integrations and production data, but is private and not published - contact us for a demo or restricted access.',
      tech: ['TypeScript', 'Node.js', 'Docker', 'React'],
      featured: true,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 2,
      name: 'Aqui Tem ODS',
      date: '2026',
      summary: 'Educational platform for disseminating the Sustainable Development Goals (SDGs): frontend with navigation by goals, content pages, filters, and interactive resources aimed at accessibility and performance. The content management system and APIs are in private infrastructure and are not publicly published.',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: true,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 3,
      name: 'Explore Saqua',
      date: '2025',
      summary: 'End-to-end project for exploring local points and events: responsive frontend with interactive maps, listings and filters, and complete backend for data management, authentication and APIs. Implementation delivered as a complete end-to-end solution.',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: false,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 4,
      name: 'Apaixone-Se',
      date: '2025',
      summary: 'End-to-end project that connects users to local experiences: includes frontend for discovery and curation and backend for user management, recommendations and third-party integrations. Complete solution delivered (front + back).',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: false,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 5,
      name: 'order-api',
      date: '2026',
      summary: 'API for order management, REST routes and data validation.',
      tech: ['Node.js', 'Express', 'JavaScript'],
      featured: false,
      link: 'order-api',
      borderColor: '#6699CC'
    },
    {
      id: 6,
      name: 'Cabo Frio Outlet',
      date: '2025',
      summary: 'Backend system for multi-brands with inventory and order logic.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      featured: false,
      link: 'caboFrioOutlet-Back',
      borderColor: '#6699CC'
    },
    {
      id: 7,
      name: 'Jogo-ODS-ONU',
      date: '2025',
      summary: 'Interactive interface to present the 17 Sustainable Development Goals.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      link: 'Jogo-ODS-ONU',
      borderColor: '#6699CC'
    },
    {
      id: 8,
      name: 'Product-Control-Back',
      date: '2025',
      summary: 'API in Java for product control, inventory and CRUD operations.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      featured: false,
      link: 'Product-Control-Back',
      borderColor: '#6699CC'
    },
    {
      id: 9,
      name: 'Product-Control-Front',
      date: '2025',
      summary: 'Frontend for product management with filters, tables and integration with the backend.',
      tech: ['React', 'TypeScript', 'Vite'],
      featured: false,
      link: 'Product-Control-Front',
      borderColor: '#6699CC'
    },
    {
      id: 10,
      name: 'avs-store',
      date: '2025',
      summary: 'Sample online store with catalog and simple cart.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      featured: false,
      link: 'avs-store',
      borderColor: '#6699CC'
    },
    {
      id: 11,
      name: 'SaaS-controle-financeiro',
      date: '2025',
      summary: 'SaaS platform for financial control with dashboards and reports.',
      tech: ['JavaScript', 'Node.js', 'MongoDB'],
      featured: false,
      link: 'SaaS-controle-financeiro',
      borderColor: '#6699CC'
    },
    {
      id: 12,
      name: 'CRUD-simples-em-java',
      date: '2025',
      summary: 'Simple CRUD example in Java to demonstrate basic concepts.',
      tech: ['Java'],
      featured: false,
      link: 'CRUD-simples-em-java',
      borderColor: '#6699CC'
    }
  ];

  const projectsPerPage = 8; // fixo
  const totalPages = Math.max(1, Math.ceil(allProjects.length / projectsPerPage));
  const effectivePage = Math.min(Math.max(1, currentPage), totalPages);

  const indexOfLastProject = effectivePage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="animate-fade-in space-y-6 py-4">
      {/* estilos locais para animação e glow dos featured */}
      <style>{`
        .featured-glow {
          position: relative;
          overflow: visible;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          animation: float 6s ease-in-out infinite;
        }

        .featured-glow:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 10px 30px rgba(2,6,23,0.6);
        }

        .featured-glow::before {
          content: '';
          position: absolute;
          inset: -8px;
          z-index: -1;
          border-radius: 10px;
          background: linear-gradient(90deg, rgba(99,102,241,0.09), rgba(14,165,233,0.08), rgba(234,179,8,0.07));
          filter: blur(14px);
          opacity: 0.95;
          animation: glow-slide 5s linear infinite;
        }

        @keyframes glow-slide { 0%{transform:translateX(-25%)}50%{transform:translateX(25%)}100%{transform:translateX(-25%)} }
        @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)} }
      `}</style>

      <div className="flex items-center gap-4 mb-6">
        <Folder className="text-primary w-5 h-5" strokeWidth={1.5} />
        <div className="flex flex-col items-start">
          <p className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-1">Professional</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>
            <span className="text-muted font-mono font-normal">{"<"}</span>
            Projects
            <span className="text-muted font-mono font-normal">{"/>"}</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-flow-row-dense auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(() => {
          const featuredThisPage = currentProjects.filter(fp => fp.featured);
          const normalThisPage = currentProjects.filter(fp => !fp.featured);
          const renderOrder = [...featuredThisPage, ...normalThisPage];

          return renderOrder.map((p) => {
            const githubBase = 'https://github.com/viniciusvalledev';
            let repoUrl: string | null = null;
            if (p.publicLink) {
              repoUrl = p.publicLink;
            } else if (p.link && !/back$/i.test(p.link)) {
              repoUrl = `${githubBase}/${p.link}`;
            } else {
              repoUrl = null;
            }
            const featuredIndex = p.featured ? featuredThisPage.findIndex(fp => fp.id === p.id) : -1;

            if (p.featured) {
              // featured principal: destaque maior
              if (featuredIndex === 0) {
                const content = (
                  <div className="relative h-full rounded-lg">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <Card className="h-full flex flex-col featured-glow border border-white/5 rounded-lg overflow-hidden" borderColor="linear-gradient(180deg,var(--primary),var(--accent))">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-muted font-mono tracking-[0.2em] uppercase mb-2 block">Featured Project</span>
                          <h3 className="text-white text-2xl font-extrabold tracking-tight mb-1">
                            {p.name}
                          </h3>
                          <p className="text-muted font-mono text-[9px] uppercase mb-4">{p.date}</p>
                        </div>
                      </div>

                      <p className="text-[13px] text-muted leading-relaxed mb-6 font-light">{p.summary}</p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.tech.map((t) => (
                            <span key={t} className="brand-tag">{t}</span>
                          ))}
                        </div>

                        <div className="text-primary text-sm font-semibold">View Repository →</div>
                      </div>
                    </Card>
                  </div>
                );

                return repoUrl ? (
                  <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="lg:col-span-2 lg:row-span-2 no-underline block">{content}</a>
                ) : (
                  <div key={p.id} className="lg:col-span-2 lg:row-span-2">{content}</div>
                );
              }

              // segundo featured: coluna simples mas altura maior
              if (featuredIndex === 1) {
                const content = (
                  <div className="relative h-full rounded-lg">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <Card className="h-full flex flex-col border border-white/5 rounded-lg overflow-hidden" borderColor="#334155">
                      <div>
                        <span className="text-[9px] font-bold text-muted uppercase tracking-tight mb-2">Repository</span>
                        <h3 className="text-white text-xl font-bold leading-tight mb-2">{p.name}</h3>
                        <span className="font-mono text-[9px] text-muted mb-4">{p.date}</span>

                        <p className="text-[12px] text-muted leading-relaxed mb-6 font-light">{p.summary}</p>
                      </div>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.tech.map((tag) => (
                            <span key={tag} className="brand-tag">{tag}</span>
                          ))}
                        </div>

                        <div className="text-primary text-sm font-semibold">View Repository →</div>
                      </div>
                    </Card>
                  </div>
                );

                return repoUrl ? (
                  <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="no-underline block lg:col-span-1 lg:row-span-2">{content}</a>
                ) : (
                  <div key={p.id} className="group lg:col-span-1 lg:row-span-2">{content}</div>
                );
              }

              // fallback para outros featured
              const content = (
                <div className="relative h-full rounded-lg">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <Card className="h-full flex flex-col border border-white/5 rounded-lg overflow-hidden" borderColor="#334155">
                    <div>
                      <span className="text-[9px] text-muted font-mono tracking-[0.2em] uppercase mb-2 block">Featured Project</span>
                      <h3 className="text-white text-2xl font-extrabold tracking-tight mb-1">{p.name}</h3>
                      <p className="text-muted font-mono text-[9px] uppercase mb-4">{p.date}</p>
                    </div>

                    <p className="text-[13px] text-muted leading-relaxed mb-6 font-light">{p.summary}</p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.tech.map((t) => (
                          <span key={t} className="brand-tag">{t}</span>
                        ))}
                      </div>

                      <div className="text-primary text-sm font-semibold">View Repository →</div>
                    </div>
                  </Card>
                </div>
              );

              return repoUrl ? (
                <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="lg:col-span-2 no-underline block">{content}</a>
              ) : (
                <div key={p.id}>{content}</div>
              );
            }

            // cartões normais
            const card = (
              <div className="relative h-full rounded-xl">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <Card className="h-full flex flex-col justify-between" borderColor={p.borderColor}>
                  <div>
                    <span className="text-[9px] font-bold text-muted uppercase tracking-tight">Repository</span>
                    <h3 className="text-sm font-bold text-white leading-tight mt-1 mb-1">{p.name}</h3>
                    <span className="font-mono text-[9px] text-muted">{p.date}</span>
                  </div>

                  <p className="text-[11px] text-muted line-clamp-3 font-light leading-relaxed my-3">{p.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tag) => (
                      <span key={tag} className="brand-tag">{tag}</span>
                    ))}
                  </div>
                </Card>
              </div>
            );

            return repoUrl ? (
              <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="no-underline block">{card}</a>
            ) : (
              <div key={p.id} className="group">{card}</div>
            );
          });
        })()}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 pt-8">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="text-[10px] text-muted hover:text-white disabled:opacity-20 uppercase font-mono tracking-widest transition-colors">Prev</button>
          <span className="font-mono text-[10px] text-muted">{currentPage} / {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="text-[10px] text-muted hover:text-white disabled:opacity-20 uppercase font-mono tracking-widest transition-colors">Next</button>
        </div>
      )}
    </div>
  );
};