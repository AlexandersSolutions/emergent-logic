import { SectionHeading } from '@/components/section-heading'

const facts = [
  {
    title: 'What it is',
    body: 'A site that hosts my coding projects from GitHub. I will be continuously adding to it as I grow my portfolio.',
  },
  {
    title: 'Why it matters',
    body: 'I want future employers, along with friends and family, to see the kinds of things I am able to create with code.',
  },
  {
    title: 'Who made it',
    body: 'Created by Alexander Kennedy with AI assistance from v0 by Vercel. v0 helped design and implement this site, including the purple theme, page layout, GitHub project listing, and contact section. AI assistance on other projects is noted within each project.',
  },
]

export function AboutProject() {
  return (
    <section id="about-project" aria-labelledby="about-project-title" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="01" id="about-project-title" title="The site" />
        <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
          {facts.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-3 bg-background/80 p-6 sm:p-8">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</dt>
              <dd className="leading-relaxed text-muted-foreground">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
