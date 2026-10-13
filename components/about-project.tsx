import { SectionHeading } from '@/components/section-heading'

export function AboutProject() {
  return (
    <section id="about-project" aria-labelledby="about-project-title" className="light-section section-shell colophon">
      <div className="site-container about-grid">
        <SectionHeading index="03" id="about-project-title" title="Behind the portfolio" />
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>Emergent Logic is a living portfolio: built to evolve as the projects and the person behind them develop.</p>
          <p>Built with Next.js, React, and Tailwind CSS. Public GitHub repositories update automatically, with space for project-specific engineering notes.</p>
          <p className="text-sm">Created by Alexander Kennedy with AI assistance. The original design and implementation used v0 by Vercel; this refinement used ChatGPT. Project-specific AI assistance is noted where supplied.</p>
        </div>
      </div>
    </section>
  )
}
