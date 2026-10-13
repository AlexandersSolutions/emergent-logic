import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/lib/github'
import { CONTACT_EMAIL } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          index="04"
          id="contact-title"
          title="Contact"
          description="Questions, opportunities, or feedback on a project are all welcome."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex h-full items-center justify-between gap-4 bg-background/60 p-6 transition-colors hover:bg-background/30 sm:p-8"
            >
              <span className="flex min-w-0 flex-col gap-2">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Email
                </span>
                <span className="break-all text-lg font-medium">{CONTACT_EMAIL}</span>
              </span>
              <ArrowUpRight
                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center justify-between gap-4 bg-background/60 p-6 transition-colors hover:bg-background/30 sm:p-8"
            >
              <span className="flex min-w-0 flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  GitHub
                </span>
                <span className="break-all text-lg font-medium">@{GITHUB_USERNAME}</span>
              </span>
              <ArrowUpRight
                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
