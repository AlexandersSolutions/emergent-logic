import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/lib/github'

const aboutMeParagraphs: string[] = [
  // Add your About Me paragraphs here. Each string becomes its own paragraph.
]

export function AboutMe() {
  return (
    <section id="about-me" className="border-t bg-secondary/60">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">About me</h2>
          <p className="mt-2 font-medium text-primary">Alexander Kennedy</p>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          {aboutMeParagraphs.length > 0 ? (
            aboutMeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <p className="rounded-xl border border-dashed bg-card p-6 text-base">
              More about me is coming soon.
            </p>
          )}
          <p className="text-base">
            Find me on GitHub at{' '}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              @{GITHUB_USERNAME}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
