export const GITHUB_USERNAME = 'AlexandersSolutions'
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`

export type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  fork: boolean
  pushed_at: string
}

export async function getPublicRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=pushed&per_page=100`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    )
    if (!res.ok) return []
    const repos: Repo[] = await res.json()
    return repos.filter((repo) => !repo.fork)
  } catch {
    return []
  }
}
