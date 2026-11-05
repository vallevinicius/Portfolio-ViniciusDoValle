import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaAsterisk } from 'react-icons/fa';
import { Section } from './Section';
import { useLang } from '../i18n';

interface Project {
  name: string;
  year: string;
  summary: string | null;
  stack: string[];
  repo?: string;
}

const USER = 'vallevinicius';
const GITHUB = `https://github.com/${USER}`;
const FEATURED_REPOS = ['MeiDeSaqua-Back', 'AquiTemODS-Back', 'MeideSaqua-Front', 'AquiTemODS-Front'];
const PER_PAGE = 6;
const CACHE_KEY = 'gh-repos-v3';

const featured: Project[] = [
  {
    name: 'Mei De Saqua',
    year: '2026',
    summary:
      'A portal for micro-entrepreneurs in Saquarema. It has a management panel, public business pages, search and filters, and forms for registration and contact.',
    stack: ['TypeScript', 'Node.js', 'React', 'Docker'],
    repo: `${GITHUB}/MeiDeSaqua-Back`,
  },
  {
    name: 'Aqui Tem ODS',
    year: '2026',
    summary:
      'An educational platform about the UN Sustainable Development Goals, with navigation by goal, content pages, filters and interactive resources.',
    stack: ['TypeScript', 'Node.js', 'React', 'MySQL'],
    repo: `${GITHUB}/AquiTemODS-Back`,
  },
];

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  created_at: string;
  pushed_at: string;
}

type Status = 'loading' | 'ready' | 'error';

function toProject(r: GithubRepo): Project {
  return {
    name: r.name,
    year: String(new Date(r.created_at).getFullYear()),
    summary: r.description,
    stack: [r.language, ...(r.topics ?? []).slice(0, 3)].filter((x): x is string => Boolean(x)),
    repo: r.html_url,
  };
}

/** Public repositories from GitHub, newest activity first. Cached for the session to stay under the API rate limit. */
function readCache(): Project[] | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached ? (JSON.parse(cached) as Project[]) : null;
  } catch {
    return null;
  }
}

function useGithubProjects() {
  const [cached] = useState(readCache);
  const [projects, setProjects] = useState<Project[]>(cached ?? []);
  const [status, setStatus] = useState<Status>(cached ? 'ready' : 'loading');

  useEffect(() => {
    if (cached) return;
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed&type=all`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        return res.json() as Promise<GithubRepo[]>;
      })
      .then((repos) => {
        const list = repos
          .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== USER && !FEATURED_REPOS.some((f) => f.toLowerCase() === r.name.toLowerCase()))
          .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
          .map(toProject);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(list));
        } catch {
          /* ignore */
        }
        setProjects(list);
        setStatus('ready');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setStatus('error');
      });

    return () => controller.abort();
  }, [cached]);

  return { projects, status };
}

export function Work() {
  const { t } = useLang();
  const w = t.work;
  const { projects, status } = useGithubProjects();
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE));
  const visible = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById('more-work')?.scrollIntoView({ block: 'start' });
  };

  return (
    <Section id="work" title={w.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <article
            key={p.name}
            className={`glass flex flex-col rounded-card p-7 md:p-10 ${i === 1 ? 'glass-accent' : ''}`}
          >
            <div className="flex items-start justify-between gap-4">
              <FaAsterisk aria-hidden className="h-5 w-5 text-flame" />
              <span className="rounded-pill border border-current px-3 py-0.5 text-sm font-semibold">{p.year}</span>
            </div>
            <h3 className="mt-8 font-display text-4xl uppercase tracking-tight md:text-5xl">{p.name}</h3>
            <p className="mt-5 max-w-prose font-medium">{w.featured[p.name] ?? p.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-pill bg-paper/10 px-3 py-1 text-sm font-semibold">
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-pill bg-flame px-6 py-3 font-semibold text-night transition-colors hover:bg-paper"
            >
              {w.viewApi}
              <FiArrowUpRight aria-hidden className="h-5 w-5" />
            </a>
          </article>
        ))}
      </div>

      <h3 id="more-work" className="mb-4 mt-20 scroll-mt-24 font-display text-2xl uppercase tracking-tight">
        {w.fromGithub}
      </h3>

      {status === 'loading' && <p className="border-t border-paper/20 py-6 text-paper/70">{w.loading}</p>}

      {status === 'error' && (
        <p className="border-t border-paper/20 py-6">
          {w.error}{' '}
          <a href={GITHUB} target="_blank" rel="noreferrer" className="font-bold text-flame underline decoration-2 underline-offset-4">
            {w.openProfile}
          </a>
        </p>
      )}

      {status === 'ready' && (
        <>
          <ul className="border-t border-paper/20">
            {visible.map((p) => (
              <li key={p.repo} className="border-b border-paper/20">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name}, ${w.openOnGithub}`}
                  className="group -mx-3 grid gap-1 px-3 py-5 transition-colors hover:bg-paper/5 sm:grid-cols-[1fr_14rem_4.5rem] sm:items-baseline sm:gap-6"
                >
                  <div className="min-w-0">
                    <span className="break-words font-display text-xl font-bold group-hover:text-flame">{p.name}</span>
                    {p.summary && <p className="mt-1 max-w-[60ch] text-base text-paper/70">{p.summary}</p>}
                  </div>
                  <p className="text-base sm:text-right">{p.stack.join(', ')}</p>
                  <span className="hidden items-center gap-2 text-paper/70 sm:flex">
                    {p.year}
                    <FiArrowUpRight aria-hidden className="h-5 w-5 text-flame transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label={w.pages} className="mt-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="rounded-pill border border-paper/30 px-4 py-2 font-bold hover:border-flame hover:text-flame disabled:opacity-30 disabled:hover:border-paper/30 disabled:hover:text-paper"
              >
                {w.previous}
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => goTo(n)}
                  aria-label={`${w.page} ${n}`}
                  aria-current={n === page ? 'page' : undefined}
                  className={`h-10 w-10 rounded-pill font-bold ${n === page ? 'bg-flame text-night' : 'hover:bg-paper/10'}`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="rounded-pill border border-paper/30 px-4 py-2 font-bold hover:border-flame hover:text-flame disabled:opacity-30 disabled:hover:border-paper/30 disabled:hover:text-paper"
              >
                {w.next}
              </button>
            </nav>
          )}
        </>
      )}
    </Section>
  );
}
