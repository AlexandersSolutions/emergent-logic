import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        A portfolio by Alexander Kennedy
      </p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
        Gray <span className="text-primary">Eminence</span>
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        A home for my coding projects on GitHub. I will be continuously adding to this site as I
        grow my portfolio.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          See the projects
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#about-me"
          className="inline-flex items-center rounded-lg border px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          About me
        </a>
      </div>
    </section>
  )
}
