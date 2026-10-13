import { GITHUB_PROFILE_URL } from '@/lib/github'

const links = [
  { href: '#about-project', label: 'The Project' },
  { href: '#projects', label: 'Projects' },
  { href: '#about-me', label: 'About Me' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden="true" className="size-3 rounded-full bg-primary" />
          Gray Eminence
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm sm:gap-4">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
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
