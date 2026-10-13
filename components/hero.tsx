import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { OWNER_NAME, SITE_SUBTITLE } from '@/lib/site'
import { GITHUB_PROFILE_URL } from '@/lib/github'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section">
      <div className="site-container hero-content">
        <p className="eyebrow">{OWNER_NAME} <span aria-hidden="true">/</span> Aspiring software engineer</p>
        <h1 id="hero-title" className="hero-title">Emergent<br /><span>Logic.</span></h1>
        <p className="hero-subtitle">{SITE_SUBTITLE}</p>
        <p className="hero-description">Exploring how software, systems, and data come together to solve meaningful problems. A growing collection of projects, decisions, and lessons along the way.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">Explore the work <ArrowDown size={16} aria-hidden="true" /></a>
          <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-footnote"><span>Software · Systems · Data</span><span>Learning through building</span></div>
      </div>
    </section>
  )
}
