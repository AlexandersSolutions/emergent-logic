import { GITHUB_PROFILE_URL } from '@/lib/github'
import { SITE_TITLE } from '@/lib/site'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about-me', label: 'About' },
  { href: '#about-project', label: 'Colophon' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="site-container header-inner">
        <a href="#top" className="brand"><span aria-hidden="true" className="brand-mark" />{SITE_TITLE}</a>
        <nav aria-label="Main"><ul className="nav-links">
          {links.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
        </ul></nav>
        <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="header-github">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
