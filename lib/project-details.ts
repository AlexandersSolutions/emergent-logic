export type ProjectDetails = {
  problem?: string
  technologies?: string[]
  contributions?: string
  decisions?: string
  outcomes?: string
  lessons?: string
  aiAssistance?: string
}

// Keyed by the exact GitHub repository name. Every field is optional and only
// renders when filled in, so repos without an entry show their GitHub data only.
export const projectDetails: Record<string, ProjectDetails> = {
  'emergent-logic': {
    problem: 'Create a portfolio that can grow alongside an expanding body of technical work.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    decisions: 'Server-rendered repository listings with hourly revalidation, reusable section components, and a CSS-only dusk-to-dawn palette.',
    aiAssistance: 'Original implementation assisted by v0 by Vercel; portfolio refinement assisted by ChatGPT.',
  },
}
