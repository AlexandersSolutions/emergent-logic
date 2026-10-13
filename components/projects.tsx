import { ArrowUpRight } from 'lucide-react'
import { GITHUB_PROFILE_URL, getPublicRepos } from '@/lib/github'

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

export async function Projects() {
  const repos = await getPublicRepos()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Pulled live from my public GitHub repositories, so new work shows up here automatically.
          </p>
        </div>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all on GitHub
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      {repos.length > 0 ? (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono font-semibold group-hover:text-primary">{repo.name}</h3>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                {repo.description && (
                  <p className="mt-2 leading-relaxed text-muted-foreground">{repo.description}</p>
                )}
                <div className="mt-auto flex items-center gap-3 pt-6 text-sm text-muted-foreground">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}
                  <span>Updated {dateFormatter.format(new Date(repo.pushed_at))}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-xl border border-dashed p-8 text-center text-muted-foreground">
          Projects could not be loaded right now.{' '}
          <a href={GITHUB_PROFILE_URL} className="font-medium text-primary hover:underline">
            See them on GitHub
          </a>
          .
        </p>
      )}
    </section>
  )
}
