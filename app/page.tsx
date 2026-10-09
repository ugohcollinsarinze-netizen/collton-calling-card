import {
  Cloud,
  Headset,
  Network,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  ShieldHalf,
} from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'
import { ServiceList, type Service } from '@/components/service-list'

const itServices: Service[] = [
  {
    title: 'Managed IT Support & Helpdesk',
    description: 'Proactive maintenance, troubleshooting, and responsive user support.',
    icon: Headset,
  },
  {
    title: 'Network Design & Infrastructure',
    description: 'Reliable LAN/WAN, Wi-Fi, server, and hardware setup that scales.',
    icon: Network,
  },
  {
    title: 'Cloud Migration & Microsoft 365',
    description: 'Seamless moves to the cloud with secure, well-managed workspaces.',
    icon: Cloud,
  },
]

const securityServices: Service[] = [
  {
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Find and fix weaknesses before attackers can exploit them.',
    icon: ScanSearch,
  },
  {
    title: 'Security Monitoring & Incident Response',
    description: 'Threat detection, containment, and rapid recovery from breaches.',
    icon: ShieldAlert,
  },
  {
    title: 'Risk Assessment & Compliance',
    description: 'Policies and controls aligned with NIST, HIPAA, PCI-DSS, and more.',
    icon: ShieldCheck,
  },
]

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--color-gold-light),var(--color-gold)_55%,var(--color-gold-deep))] px-4 py-10 md:py-16">
      <article className="w-full max-w-3xl overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-gold-deep/50 ring-1 ring-gold-light/40">
        <header className="border-b border-gold/20 p-6 md:p-10">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gold text-ink">
              <ShieldHalf className="size-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                Collins Ugoh
              </p>
              <h1 className="font-serif text-2xl font-bold leading-tight text-white text-balance md:text-4xl">
                Collton IT and Cybersecurity Services
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/70 text-pretty">
            I help businesses run smarter and stay safer. From everyday IT support to defending
            against modern cyber threats, Collton delivers practical, dependable solutions tailored
            to your goals, so you can focus on growth with total peace of mind.
          </p>
        </header>

        <div className="grid gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-10">
          <ServiceList heading="IT Services" services={itServices} />
          <ServiceList heading="Cybersecurity Services" services={securityServices} />
        </div>

        <footer className="border-t border-gold/20 bg-ink-soft/60 p-6 md:p-10">
          <ContactLinks />
        </footer>
      </article>
    </main>
  )
}
