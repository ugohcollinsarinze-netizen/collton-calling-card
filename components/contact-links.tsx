import { Mail, Phone } from 'lucide-react'

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const contacts = [
  {
    label: 'Email',
    value: 'ugohcollinsarinze@gmail.com',
    href: 'mailto:ugohcollinsarinze@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '(708) 351-7136',
    href: 'tel:+17083517136',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/collins-ugoh-a469b575',
    href: 'https://www.linkedin.com/in/collins-ugoh-a469b575',
    icon: Linkedin,
    external: true,
  },
]

export function ContactLinks() {
  return (
    <section aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
      >
        How to reach me
      </h2>
      <ul className="grid gap-3 md:grid-cols-2 [&>li:last-child]:md:col-span-2">
        {contacts.map(({ label, value, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:border-gold/60 hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gold text-ink">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-white/50">{label}</span>
                <span className="block break-words text-sm font-medium text-white group-hover:text-gold-light">
                  {value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
