import { ArrowDown, Mail } from 'lucide-react'
import { CONTACT_EMAIL, OWNER_NAME, SITE_SUBTITLE, SITE_TITLE } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-24 sm:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          A portfolio by {OWNER_NAME}
        </p>
        <h1
          id="hero-title"
          className="mt-6 text-balance text-5xl font-semibold tracking-tighter sm:text-7xl lg:text-8xl"
        >
          Emergent <span className="text-primary">Logic</span>
          <span className="sr-only">: {SITE_SUBTITLE}</span>
        </h1>
        <p
          aria-hidden="true"
          className="mt-5 text-pretty text-xl font-light italic tracking-tight text-secondary-foreground sm:text-2xl"
        >
          {SITE_SUBTITLE}
        </p>
        <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          A home for my coding projects on GitHub. I will be continuously adding to {SITE_TITLE}{' '}
          as I grow my portfolio.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            View projects
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
