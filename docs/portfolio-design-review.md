# Emergent Logic — design review

## Scope and baseline
Reviewed the tracked application, components, configuration, and GitHub data layer. The existing stack is Next.js 16, React 19, TypeScript, Tailwind 4, Geist/Geist Mono, Lucide, and a retained Base UI button abstraction. The page is composed of server components; the GitHub request revalidates hourly. No framework migration, new dependency, fabricated project, or professional accomplishment is included.

Visual browser inspection was unavailable in this environment. These findings come from source inspection; desktop, tablet, and mobile appearance and interactions still require browser review. No deployment is authorized by this work.

## Five opportunities
1. **Positioning:** the original hero describes a place for code rather than the owner's technical direction. The revision identifies an aspiring software engineer and connects software, systems, and data.
2. **Evidence order:** the original site explanation precedes projects. Projects now immediately follow the introduction; site implementation and AI attribution move to a compact colophon.
3. **Incomplete content:** the biography was empty and project notes unpopulated. The biography now uses supplied interests; the portfolio's own technical notes are supported by its source. Other contributions and outcomes remain unspecified.
4. **Mobile navigation:** all section links were hidden below the desktop breakpoint. A wrapping, always-visible navigation row preserves access without extra JavaScript or a menu dependency.
5. **Visual progression:** the original background remained dark purple throughout. Section-local dusk, plum, rose, and warm dawn colors create a progression while ensuring that growing repository content does not move dark text onto a dark background.

## Preserved strengths
The Emergent Logic name and tagline, purple identity, Geist typography, numbered section headings, open project rows, GitHub refresh behavior and fallback, email/profile links, security headers, and honest AI attribution remain. Skills are described as interests, not proficiency scores.

## Engineering and design changes
- `app/globals.css`: reusable container and spacing rules, fluid typography, two contextual palettes, visible focus and skip link, mobile navigation, reduced-motion handling. The background uses CSS gradients without scroll listeners or animation packages.
- `app/page.tsx`: projects-first order and a keyboard-focusable main target.
- `app/layout.tsx`: clearer metadata; removed generator branding.
- `components/hero.tsx`, `site-header.tsx`: clearer identity, restrained calls to action, persistent mobile links.
- `components/about-me.tsx`, `about-project.tsx`: supplied interests and a smaller technical colophon.
- `components/projects.tsx`, `project-card.tsx`: curated entries appear before the remaining recency-ordered repositories; larger project headings, comfortable link targets, optional outcomes.
- `components/contact.tsx`: readable dawn palette and consistent contact surfaces.
- `lib/project-details.ts`: optional outcomes field and source-supported details for this portfolio. Optional fields render only when supplied.
- `next.config.mjs`: removed `ignoreBuildErrors` so production builds enforce the existing strict TypeScript configuration.

The two palettes are scoped with CSS custom properties: existing Tailwind utilities consume the local values. That makes a component reusable across dark and light sections without maintaining separate markup. Section-local gradients also make contrast independent of project count.

## Validation
- Final production build and built-in TypeScript validation passed after the content and palette adjustments.
- Whitespace/diff check passed.
- Representative sRGB contrast checks: project secondary text on the lightest plum 6.55:1; dawn secondary text on its darkest rose 4.72:1; dawn accent 4.87:1; hero secondary text 9.43:1. These checks are not a complete accessibility audit.
- No lint script exists; no unrelated lint framework was added.
- Browser screenshots, keyboard interaction, wrapping, and responsive behavior are NOT visually verified.

## Content to add
For two or three strongest projects, supply the problem and audience, your personal contributions, important decisions and tradeoffs, technologies actually used, a verified result or honest current status, lessons, and AI assistance. Add these to `lib/project-details.ts`, keyed by exact repository name. A new optional `outcomes` field supports real results without forcing invented metrics.

Add a biography in your own voice, confirmed education details, current availability, and a resume only when ready. The supplied email remains unchanged. Do not publish contact information you do not intend to make public.

## Remaining review
Preview at 390px, 768px, and 1440px; also test 320px and 200% zoom. Check sticky navigation anchors, tab order, skip link, focus visibility, email/profile/repository/demo links, reduced motion, and long repository names. Review the dark-to-light transition and typography with real project data before merging.

The existing feed returns the first 100 non-fork repositories and uses the same empty fallback for an API failure and an empty account. Pagination and separate empty/error states are potential future improvements. Existing external demo URLs are still sourced from GitHub. No analytics, hosting architecture, or dependency upgrades were introduced.
