import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { GITHUB_PROFILE_URL, getPublicRepos } from '@/lib/github'
import { projectDetails } from '@/lib/project-details'

export async function Projects() {
  const repos = await getPublicRepos()
  // Curated notes take priority; all other repositories retain GitHub’s recency order.
  repos.sort((a, b) => Number(Boolean(projectDetails[b.name])) - Number(Boolean(projectDetails[a.name])))

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell projects-section">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            id="projects-title"
            title="Work, with the thinking behind it."
            description="An evolving collection of public projects. Explore the source, implementation, and engineering notes where available."
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
