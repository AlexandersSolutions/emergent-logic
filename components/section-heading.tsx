type SectionHeadingProps = {
  index: string
  title: string
  id: string
  description?: string
}

export function SectionHeading({ index, title, id, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
      </p>
      <h2 id={id} className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
