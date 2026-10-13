import { AboutMe } from '@/components/about-me'
import { AboutProject } from '@/components/about-project'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutProject />
        <Projects />
        <AboutMe />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          Gray Eminence, made by Alexander Kennedy.
        </div>
      </footer>
    </>
  )
}
