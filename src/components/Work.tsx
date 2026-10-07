import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Section } from './Section';

interface Project {
  name: string;
  year: string;
  summary: string | null;
  stack: string[];
  repo?: string;
}

const USER = 'vallevinicius';
const GITHUB = `https://github.com/${USER}`;
const FEATURED_REPOS = ['MeiDeSaqua-Back', 'AquiTemODS-Back'];
const PER_PAGE = 6;
const CACHE_KEY = 'gh-repos-v2';

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

    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        return res.json() as Promise<GithubRepo[]>;
      })
      .then((repos) => {
        const list = repos
          .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== USER && !FEATURED_REPOS.includes(r.name))
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
  const { projects, status } = useGithubProjects();
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE));
  const visible = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById('more-work')?.scrollIntoView({ block: 'start' });
  };

  return (
    <Section id="work" title="Projects">
      <div className="grid gap-10 md:grid-cols-2">
        {featured.map((p) => (
          <article key={p.name} className="border-t-[6px] border-buoy pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight">{p.name}</h3>
              <span className="text-muted">{p.year}</span>
            </div>
            <p className="mt-3 max-w-prose text-muted">{p.summary}</p>
            <p className="mt-4 font-medium">{p.stack.join(', ')}</p>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 font-semibold underline decoration-buoy decoration-2 underline-offset-4"
            >
              View the API on GitHub
              <FiArrowUpRight aria-hidden className="h-5 w-5" />
            </a>
          </article>
        ))}
      </div>

      <h3 id="more-work" className="mb-2 mt-16 scroll-mt-24 font-display text-xl font-bold">
        From GitHub
      </h3>

      {status === 'loading' && <p className="border-t border-ink/30 py-6 text-muted">Loading repositories…</p>}

      {status === 'error' && (
        <p className="border-t border-ink/30 py-6">
          Could not load the repositories from GitHub right now.{' '}
          <a href={GITHUB} target="_blank" rel="noreferrer" className="font-semibold underline decoration-buoy decoration-2 underline-offset-4">
            Open my GitHub profile
          </a>
        </p>
      )}

      {status === 'ready' && (
        <>
          <ul className="border-t border-ink/30">
            {visible.map((p) => (
              <li key={p.name} className="border-b border-ink/30">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name}, open on GitHub`}
                  className="group -mx-3 grid gap-1 px-3 py-5 transition-colors hover:bg-sand/50 sm:grid-cols-[1fr_14rem_4.5rem] sm:items-baseline sm:gap-6"
                >
                  <div className="min-w-0">
                    <span className="break-words font-display text-xl font-bold">{p.name}</span>
                    {p.summary && <p className="mt-1 max-w-[60ch] text-base text-muted">{p.summary}</p>}
                  </div>
                  <p className="text-base sm:text-right">{p.stack.join(', ')}</p>
                  <span className="hidden items-center gap-2 text-muted sm:flex">
                    {p.year}
                    <FiArrowUpRight aria-hidden className="h-5 w-5 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label="Project pages" className="mt-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="rounded-full px-4 py-2 font-semibold hover:bg-sand/60 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => goTo(n)}
                  aria-label={`Page ${n}`}
                  aria-current={n === page ? 'page' : undefined}
                  className={`h-10 w-10 rounded-full font-semibold ${n === page ? 'bg-ink text-foam' : 'hover:bg-sand/60'}`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="rounded-full px-4 py-2 font-semibold hover:bg-sand/60 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}
    </Section>
  );
}
