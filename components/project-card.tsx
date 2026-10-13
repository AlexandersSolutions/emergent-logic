import { ArrowUpRight } from 'lucide-react'
import type { Repo } from '@/lib/github'
import type { ProjectDetails } from '@/lib/project-details'

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

type ProjectCardProps = {
  repo: Repo
  index: number
  details?: ProjectDetails
}

const detailFields: { key: keyof Omit<ProjectDetails, 'technologies'>; label: string }[] = [
  { key: 'problem', label: 'Problem' },
  { key: 'contributions', label: 'My contributions' },
  { key: 'decisions', label: 'Engineering decisions' },
  { key: 'lessons', label: 'Lessons learned' },
  { key: 'aiAssistance', label: 'AI assistance' },
]

export function ProjectCard({ repo, index, details }: ProjectCardProps) {
  const technologies = details?.technologies ?? (repo.language ? [repo.language] : [])
  const filledFields = detailFields.filter(({ key }) => details?.[key])

  return (
    <li className="group grid gap-4 border-b py-8 transition-colors md:grid-cols-[4rem_1fr_auto] md:gap-8">
      <span className="font-mono text-sm text-muted-foreground/70 transition-colors group-hover:text-primary">
        {String(index).padStart(2, '0')}
      </span>

      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="break-words font-mono text-lg font-semibold tracking-tight">{repo.name}</h3>
        {repo.description && (
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {repo.description}
          </p>
        )}

        {filledFields.length > 0 && (
          <dl className="mt-2 grid max-w-2xl gap-4 sm:grid-cols-2">
            {filledFields.map(({ key, label }) => (
              <div key={key} className="flex flex-col gap-1">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{details?.[key]}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {technologies.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-primary/25 px-2 py-0.5 font-mono text-xs text-accent-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
          <span>Updated {dateFormatter.format(new Date(repo.pushed_at))}</span>
        </div>
      </div>

      <div className="flex flex-row gap-4 text-sm md:flex-col md:items-end md:gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
        >
          Repository
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">for {repo.name}</span>
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
          >
            Live demo
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">for {repo.name}</span>
          </a>
        )}
      </div>
    </li>
  )
}
