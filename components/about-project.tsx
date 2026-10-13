import { Code2, Heart, Users } from 'lucide-react'

const facts = [
  {
    icon: Code2,
    title: 'What it is',
    body: 'A site that hosts my coding projects from GitHub. I will be continuously adding to it as I grow my portfolio.',
  },
  {
    icon: Heart,
    title: 'Why it matters',
    body: 'I want future employers, along with friends and family, to see the kinds of things I am able to create with code.',
  },
  {
    icon: Users,
    title: 'Who made it',
    body: 'Alexander Kennedy, and sometimes AI. When AI helped, it will be mentioned within that project.',
  },
]

export function AboutProject() {
  return (
    <section id="about-project" className="border-y bg-secondary/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">The project</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-xl border bg-card p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
