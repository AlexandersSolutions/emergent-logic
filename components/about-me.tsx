import { SectionHeading } from '@/components/section-heading'
import { OWNER_NAME } from '@/lib/site'

const interests = [
  ['Software engineering', 'Building readable, maintainable software and understanding the decisions behind it.'],
  ['Systems & computer science', 'Exploring how components interact and how the foundations shape the whole.'],
  ['Data analytics', 'Turning information into useful questions, clearer understanding, and practical decisions.'],
]

export function AboutMe() {
  return (
    <section id="about-me" aria-labelledby="about-me-title" className="light-section section-shell">
      <div className="site-container about-grid">
        <div><SectionHeading index="02" id="about-me-title" title="A work in progress. By design." />
          <p className="mt-6 font-medium">{OWNER_NAME}</p>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">I’m an aspiring software engineer developing my knowledge across software, computer science, systems engineering, and data analytics.</p>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">This portfolio grows with that process: a place to share what I build and make the thinking behind the work visible.</p>
        </div>
        <div><p className="eyebrow mb-6">Areas of exploration</p><dl className="interest-list">
          {interests.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
        </dl></div>
      </div>
    </section>
  )
}
