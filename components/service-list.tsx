import type { LucideIcon } from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceList({ heading, services }: { heading: string; services: Service[] }) {
  return (
    <section aria-labelledby={`${heading}-heading`.replace(/\s+/g, '-').toLowerCase()}>
      <h2
        id={`${heading}-heading`.replace(/\s+/g, '-').toLowerCase()}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
      >
        {heading}
      </h2>
      <ul className="flex flex-col gap-4">
        {services.map(({ title, description, icon: Icon }) => (
          <li key={title} className="flex gap-3">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-gold-light">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
