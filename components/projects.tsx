import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { GITHUB_PROFILE_URL, getPublicRepos } from '@/lib/github'
import { projectDetails } from '@/lib/project-details'

export async function Projects() {
  const repos = await getPublicRepos()

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            id="projects-title"
            title="Projects"
            description="Pulled live from my public GitHub repositories, so new work shows up here automatically."
          />
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all on GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        {repos.length > 0 ? (
          <ol className="mt-12 flex flex-col border-t">
            {repos.map((repo, i) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                index={i + 1}
                details={projectDetails[repo.name]}
              />
            ))}
          </ol>
        ) : (
          <p className="mt-12 rounded-lg border border-dashed p-8 text-center text-muted-foreground">
            Projects could not be loaded right now.{' '}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              See them on GitHub
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
