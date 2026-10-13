import { GITHUB_PROFILE_URL } from '@/lib/github'
import { SITE_TITLE } from '@/lib/site'

const links = [
  { href: '#about-project', label: 'The Site' },
  { href: '#projects', label: 'Projects' },
  { href: '#about-me', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span aria-hidden="true" className="size-2 rotate-45 bg-primary" />
          {SITE_TITLE}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href} className="hidden md:block">
                <a
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="md:ml-2">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-primary/40 px-3 py-1.5 font-medium text-primary transition-colors hover:border-primary hover:bg-primary/10"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
