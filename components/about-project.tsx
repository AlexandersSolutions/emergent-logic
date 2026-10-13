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
    body: 'Alexander Kennedy, and sometimes AI. When AI helped, it is mentioned within that project.',
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
