import { SectionHeading } from '@/components/section-heading'
import { OWNER_NAME } from '@/lib/site'

const aboutMeParagraphs: string[] = [
  // Add your About Me paragraphs here. Each string becomes its own paragraph.
]

export function AboutMe() {
  return (
    <section id="about-me" aria-labelledby="about-me-title" className="border-t">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-4">
          <SectionHeading index="03" id="about-me-title" title="About me" />
          <p className="font-medium text-primary">{OWNER_NAME}</p>
        </div>
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground md:pt-10">
          {aboutMeParagraphs.length > 0 ? (
            aboutMeParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="rounded-lg border border-dashed p-6 text-base">
              More about me is coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
