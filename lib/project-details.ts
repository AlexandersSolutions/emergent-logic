export type ProjectDetails = {
  problem?: string
  technologies?: string[]
  contributions?: string
  decisions?: string
  lessons?: string
  aiAssistance?: string
}

// Keyed by the exact GitHub repository name. Every field is optional and only
// renders when filled in, so repos without an entry show their GitHub data only.
export const projectDetails: Record<string, ProjectDetails> = {}
