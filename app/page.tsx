import { AboutMe } from '@/components/about-me'
import { AboutProject } from '@/components/about-project'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'
import { OWNER_NAME, SITE_SUBTITLE, SITE_TITLE } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <AboutMe />
        <AboutProject />
        <Contact />
      </main>
      <footer className="light-section border-t">
        <div className="site-container flex flex-col gap-2 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-medium text-foreground">{SITE_TITLE}</span>, made by {OWNER_NAME}.
          </p>
          <p className="italic">{SITE_SUBTITLE}</p>
        </div>
      </footer>
    </>
  )
}
