import { Bolt, CircleCheck, FolderOpen, History } from 'lucide-react'
import Chip from '../components/ui/Chip'

type Experience = {
  company: string
  role: string
  period: string
  hash: string
  highlights: string[]
  tags: string[]
  present?: boolean
}

const experiences: Experience[] = [
  {
    company: 'Photon Interactive',
    role: 'Senior UI Developer',
    period: 'NOV 2024 - JAN 2026',
    hash: 'ph0t0n_2024',
    present: true,
    highlights: [
      'Architecting enterprise-scale design systems using React and Tailwind.',
      'Reduced bundle sizes by 40% through code splitting & tree-shaking.',
      'Leading a team of 5 developers for global banking UI modernization',
    ],
    tags: ['nextjs', 'typescript', 'design_ops'],
  },
  {
    company: 'Logiciel Solutions',
    role: 'Full Stack Engineer',
    period: 'AUG 2023 - JUN 2024',
    hash: 'l0g1c_2023',
    highlights: [
      'Implemented real-time data visualization dashboards.',
      'Migrated legacy PHP systems to Node.js microservices.',
      'Optimized Postgres queries resulting in 50% faster API responses.',
    ],
    tags: ['nodejs', 'postgresql', 'aws'],
  },
  {
    company: 'Azentio Software',
    role: 'Frontend Developer',
    period: 'OCT 2021 - AUG 2023',
    hash: 'az3nt_2021',
    highlights: [
      'Developed core modules for Islamic Banking ERP suite.',
      'Built reusable UI component library used across 12 product teams.',
      'Ensured WCAG 2.1 accessibility compliance.',
    ],
    tags: ['angular', 'accessibility', 'rxjs'],
  },
  {
    company: 'NCore Technology',
    role: 'Associate Developer',
    period: 'JUL 2019 - OCT 2021',
    hash: 'nc0r3_2019',
    highlights: [
      'Integrated 3rd party payment gateways.',
      'Maintained legacy jQuery applications.',
    ],
    tags: ['javascript', 'bootstrap', 'php'],
  },
]

export default function ExperienceTimeline() {
  return (
    <main className="bg-background text-on-background mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-24 pb-16 md:grid-cols-[280px_1fr]">
      {/* SIDEBAR */}
      <aside className="hidden md:block">
        <div className="bg-surface-container-low border-primary rounded-lg border-l-4 p-4">
          <h2 className="font-label text-outline mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
            <FolderOpen size={14} />
            EXPLORER
          </h2>
          <div className="space-y-1">
            <div className="bg-surface-bright text-primary font-label flex items-center gap-2 rounded px-2 py-1 text-sm">
              <History size={10} />
              experience.git
            </div>
            {['skills.sh', 'readme.md', 'config.json'].map((item) => (
              <div
                key={item}
                className="text-on-surface-variant hover:bg-surface-container-high font-label flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm transition-colors"
              >
                <Bolt size={10} />
                {item}
              </div>
            ))}
          </div>
          {/* METRICS */}
          <div className="mt-8">
            <h3 className="font-label text-outline mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
              COMMIT_METRICS
            </h3>
            {[
              { label: 'SYSTEM_STABILITY', value: 98, color: 'bg-secondary' },
              { label: 'CODE_EFFICIENCY', value: 94, color: 'bg-primary' },
            ].map((metric) => (
              <div key={metric.label} className="mb-3">
                <div className="font-label text-on-surface-variant mb-1 flex justify-between text-[10px]">
                  <span>{metric.label}</span>
                  <span>{metric.value}%</span>
                </div>
                <div className="bg-surface-container-highest h-1 overflow-hidden rounded-full">
                  <div
                    className={`h-full ${metric.color}`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      {/* TIMELINE */}
      <section className="relative">
        <header className="mb-12">
          <h1 className="font-headline text-on-background mb-2 text-4xl font-black tracking-tight">
            GIT_LOG --ALL
          </h1>
          <p className="font-label text-on-surface-variant text-sm">
            Tracing professional deployments across the ecosystem.
          </p>
        </header>
        <div className="bg-outline-variant absolute top-32 bottom-0 left-4 w-0.5 opacity-30 md:left-8" />
        {experiences.map((exp, i) => (
          <div key={i} className="group relative mb-16 pl-12 md:pl-20">
            {/* TIMELINE DOT */}
            <div
              className={`absolute top-2 left-[0.85rem] h-4 w-4 rounded-full md:left-[1.85rem] ${exp.present ? 'bg-primary border-background border-4' : 'bg-outline-variant border-background border-4'} z-10`}
            />
            {/* CARD */}
            <div className="bg-surface-container-low border-outline-variant/20 overflow-hidden rounded-lg border-b shadow-xl transition-all duration-300 group-hover:translate-x-1">
              {/* HEADER */}
              <div className="border-outline-variant/10 flex items-center justify-between border-b px-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/40"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/40"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40"></span>
                  </div>
                  <span className="font-label text-on-surface-variant text-[11px] tracking-wider uppercase">
                    commit_hash: {exp.hash}
                  </span>
                </div>
                {exp.present && (
                  <span className="font-label text-primary bg-primary/10 rounded px-2 py-0.5 text-[10px]">
                    RECENT
                  </span>
                )}
              </div>
              {/* CONTENT */}
              <div className="p-6">
                <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <h3 className="font-headline text-on-background text-2xl font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="font-label text-secondary text-sm font-bold">
                      {exp.role}
                    </p>
                  </div>
                  <span className="font-label text-outline text-xs">
                    {exp.period}
                  </span>
                </div>
                {/* HIGHLIGHTS */}
                <div className="font-label space-y-2 text-sm">
                  {exp.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="border-secondary bg-secondary/10 rounded border-l-4 p-2"
                    >
                      <span className="text-secondary mr-2">+</span>
                      {h}
                    </div>
                  ))}
                </div>
                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Chip key={tag} label={`#${tag}`} variant="label" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* DEPLOY READY */}
        <div className="mt-12 flex items-center gap-4 pl-12 md:pl-20">
          <div className="bg-surface-container border-secondary/20 text-secondary font-label flex items-center gap-2 rounded border px-3 py-1 text-xs">
            <CircleCheck size={14} />
            SYSTEM_DEPLOY_READY
          </div>
          <div className="bg-outline-variant/30 h-px flex-1" />
        </div>
      </section>
    </main>
  )
}
