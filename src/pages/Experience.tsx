import { Bolt, CircleCheck, FolderOpen, History } from 'lucide-react'
import Chip from '../components/ui/Chip'
import { Typography } from '../components/ui/Typography'

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
    role: 'Senior Software Engineer',
    period: 'NOV 2024 - JAN 2026',
    hash: 'ph0t0n_2024',
    present: true,
    highlights: [
      'Architecting enterprise-scale design systems using React and Tailwind.',
      'Leveraged a hybrid SSR-CSR architecture along with React optimization techniques to deliver a 30% faster initial load time.',
      'Ensured WCAG 2.1 accessibility compliance.'
    ],
    tags: ['nextjs', 'typescript', 'storybook'],
  },
  {
    company: 'Logiciel Solutions',
    role: 'Senior Software Engineer',
    period: 'AUG 2023 - JUN 2024',
    hash: 'l0g1c_2023',
    highlights: [
      'Developed a multi-layered access control mechanism.',
      'Adopted Module Federation to implement a micro frontend architecture.',
      'Reduced bundle sizes by 40% through code splitting & tree-shaking.',
    ],
    tags: ['nodejs', 'accessibility', 'design_ops'],
  },
  {
    company: 'Azentio Software',
    role: 'Software Engineer',
    period: 'OCT 2021 - AUG 2023',
    hash: 'az3nt_2021',
    highlights: [
      'Developed core modules for Investment Management Solutions.',
      'Built reusable UI component library used across 4 product teams.',
      'Implemented real-time data visualization dashboards.',
      'Integrated charting, PDF reporting, and Excel-compatible features.',
      'A high-performance data grid featuring integrated paging and row virtualization.'
    ],
    tags: ['antdesign', 'Visualization', 'virtualize'],
  },
  {
    company: 'NCore Technology',
    role: 'Associate Engineer',
    period: 'JUL 2019 - OCT 2021',
    hash: 'nc0r3_2019',
    highlights: [
      'Path handling and application data management',
      'Standardized UI elements using MUI and styled-components',
      'Ensure system stability and optimal uptime through proactive bug resolution.'
    ],
    tags: ['javascript', 'bootstrap', 'styled', 'mui'],
  },
]

export default function ExperienceTimeline() {
  return (
    <main className="bg-background text-on-background mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-24 pb-16 md:grid-cols-[280px_1fr]">
      {/* SIDEBAR */}
      <aside className="hidden md:block">
        <div className="bg-surface-container-low border-primary rounded-lg border-l-4 p-4">
          <Typography
            as="h2"
            variant="sectionTitle"
            className="font-label text-outline mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em]"
          >
            <FolderOpen size={14} />
            EXPLORER
          </Typography>
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
            <Typography
              as="h3"
              variant="sectionTitle"
              className="font-label text-outline mb-3 text-[10px] font-bold tracking-[0.2em]"
            >
              COMMIT_METRICS
            </Typography>
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
          <Typography as="h1" variant="h1" className="text-on-background mb-2 text-4xl font-black tracking-tight">
            GIT_LOG --ALL
          </Typography>
          <Typography as="p" variant="bodyMonoSmall" color="muted">
            Tracing professional deployments across the ecosystem.
          </Typography>
        </header>
        <div className="bg-outline-variant absolute top-32 bottom-0 left-4 w-0.5 opacity-30 md:left-8" />
        {experiences.map((exp, i) => (
          <div key={i} className="group relative mb-16 pl-12 md:pl-20">
            {/* TIMELINE DOT */}
            <div
              className={`absolute top-2 left-[0.85rem] h-4 w-4 rounded-full md:left-[1.85rem] ${exp.present ? 'bg-primary border-background border-4' : 'bg-outline-variant border-background border-4'} z-10`}
            />
            {/* CARD */}
            <div className="bg-surface-container-low border-outline-variant/20 overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:translate-x-1">
              {/* HEADER */}
              <div className="bg-surface-container-highest border-outline-variant/10 flex items-center justify-between border-b px-4 py-2">
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
                    <Typography as="h3" variant="h3" className="text-on-background text-2xl font-bold tracking-tight">
                      {exp.company}
                    </Typography>
                    <Typography as="p" variant="bodySmall" color="secondary" className="font-label text-sm font-bold">
                      {exp.role}
                    </Typography>
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
                      <Typography as="span" variant="bodySmall" color="secondary" className="mr-2">
                        +
                      </Typography>
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
