import React from 'react'
import TerminalHeader from '../components/ui/TerminalHeader'
import {
  CircleCheckBig,
  Cog,
  Cpu,
  FolderTree,
  Gauge,
  LayoutGrid,
  MapPin,
  Palette,
  ShieldCheck,
  SquareTerminal,
  Zap,
} from 'lucide-react'
import { Typography } from '../components/ui/Typography'

const DEV_TOOLS: string[] = [
  'ESLint // Veracode',
  'Git // GitHub',
  'Vercel // AWS',
  'Postman // Requestly',
]

const About: React.FC = () => {
  const activityGrid = Array.from({ length: 154 }, (_, i) => {
    const rand = Math.random()

    let color = 'bg-surface-container-high'

    if (rand > 0.7) color = 'bg-primary'
    else if (rand > 0.4) color = 'bg-primary/40'

    return <div key={i} className={`h-3 w-3 rounded-sm ${color}`} />
  })

  return (
    <main className="sm:mx-auto max-w-7xl space-y-12 px-6 pt-24 pb-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Bio */}
        <div className="bg-surface-container-low overflow-hidden rounded-lg border border-transparent lg:col-span-7">
          {/* Terminal Header */}
          <TerminalHeader title="ABOUT_SYSTEM.MD" />
          {/* Content */}
          <div className="space-y-6 p-2 sm:p-8">
            <Typography as="h1" variant="h1" className="text-4xl font-black tracking-tight">
              ARCHITECTING{' '}
              <Typography as="span" variant="h1" color="primary" className="italic">
                DIGITAL INFRASTRUCTURE
              </Typography>
            </Typography>
            <div className="text-on-surface-variant font-body space-y-4 leading-relaxed">
              <Typography as="p" variant="body" color="muted">
                I am{' '}
                <Typography as="span" variant="body" color="secondary" className="font-mono">
                  Bibhuti Sunari
                </Typography>
                , a UI-First Full-Stack Engineer focused on performance-first
                architecture and high-fidelity user interfaces.
              </Typography>
              <Typography as="p" variant="body" color="muted">
                With over 5 years of experience in the ecosystem, I specialize
                in bridging the gap between complex backend logic and fluid
                frontend experiences.
              </Typography>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="bg-surface-container-lowest border-outline-variant/10 flex items-center gap-2 rounded border px-3 py-1.5">
                  <MapPin size={12} className="text-primary" />
                  <span className="font-mono text-xs tracking-tighter uppercase">
                    Remote // Global
                  </span>
                </div>
                <div className="bg-surface-container-lowest border-outline-variant/10 flex items-center gap-2 rounded border px-3 py-1.5">
                  <ShieldCheck size={12} className="text-secondary" />
                  <span className="font-mono text-xs tracking-tighter uppercase">
                    Security Focused
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Metric Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
          {/* Performance */}
          <div className="bg-surface-container-low hover:bg-surface-bright group rounded-lg border border-transparent p-6 transition-all">
            <div className="mb-4 flex items-start justify-between">
              <Gauge className="text-secondary transition-transform group-hover:scale-110" />
              <span className="text-secondary bg-secondary/10 rounded px-2 py-0.5 font-mono text-[10px]">
                Lighthouse
              </span>
            </div>
            <Typography as="div" variant="h2" className="font-headline mb-1 text-3xl font-black">
              30%
            </Typography>
            <div className="text-on-surface-variant font-mono text-xs leading-tight tracking-widest uppercase">
              Improved Runtime Performance
            </div>
          </div>
          {/* Efficiency */}
          <div className="bg-surface-container-low hover:bg-surface-bright group rounded-lg border border-transparent p-6 transition-all">
            <div className="mb-4 flex items-start justify-between">
              <Cpu className="text-primary transition-transform group-hover:scale-110" />
              <span className="text-primary bg-primary/10 rounded px-2 py-0.5 font-mono text-[10px]">
                System
              </span>
            </div>
            <Typography as="div" variant="h2" className="font-headline mb-1 text-3xl font-black">
              99.9%
            </Typography>
            <div className="text-on-surface-variant font-mono text-xs leading-tight tracking-widest uppercase">
              Uptime Deployment Target
            </div>
          </div>
          {/* Full Metric */}
          <div className="bg-surface-container border-outline-variant/10 group relative flex items-center gap-6 overflow-hidden rounded-lg border p-6 sm:col-span-2">
            <div className="relative z-10">
              <div className="text-tertiary mb-2 font-mono text-xs tracking-[0.2em] uppercase">
                Active Contributions
              </div>
              <Typography as="div" variant="h1" className="font-headline text-4xl font-black">
                1,400+
              </Typography>
              <div className="text-on-surface-variant mt-1 text-xs">
                Commits in the last cycle
              </div>
            </div>
            <div className="ml-auto opacity-20 transition-opacity group-hover:opacity-40">
              <LayoutGrid
                size={64}
                className="text-primary transition-transform group-hover:scale-110"
              />
            </div>
            <div className="via-primary/5 absolute inset-0 -translate-x-full bg-linear-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <section className="space-y-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4">
          <Typography as="h2" variant="h2" className="text-on-surface text-xl font-black tracking-widest uppercase">
            TECHNICAL_ARSENAL
          </Typography>
          <div className="bg-outline-variant/30 h-px grow" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* CORE TECH */}
          <div className="bg-surface-container-lowest border-outline-variant/20 group hover:border-primary/40 flex flex-col rounded-lg border transition-colors">
            <div className="bg-surface-container-high flex items-center gap-2 px-3 py-2">
              <SquareTerminal size={10} className="text-primary" />
              <span className="text-on-surface font-mono text-[10px] tracking-widest uppercase">
                CORE_TECH
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex justify-between">
                <span className="text-secondary font-mono text-xs">
                  JavaScript
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  L.80
                </span>
              </div>
              <div className="flex justify-between">
                <Typography as="span" variant="caption" color="primary" className="font-mono text-xs">
                  ReactJS
                </Typography>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  L.95
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary font-mono text-xs">
                  NextJS (SSR/CSR/SSG)
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  L.75
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary font-mono text-xs">
                  TypeScript
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  L.60
                </span>
              </div>
            </div>
          </div>
          {/* ARCHITECTURE */}
          <div className="bg-surface-container-lowest border-outline-variant/20 group hover:border-secondary/40 flex flex-col rounded-lg border transition-colors">
            <div className="bg-surface-container-high flex items-center gap-2 px-3 py-2">
              <FolderTree size={10} className="text-secondary" />
              <span className="text-on-surface font-mono text-[10px] tracking-widest uppercase">
                ARCHITECTURE
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex justify-between">
                <Typography as="span" variant="caption" className="font-mono text-xs">
                  Monolithic
                </Typography>
                <span className="text-secondary font-mono text-[10px]">
                  ACTIVE
                </span>
              </div>
              <div className="flex justify-between">
                <Typography as="span" variant="caption" className="font-mono text-xs">
                  Mono_Repo
                </Typography>
                <span className="text-secondary font-mono text-[10px]">
                  ACTIVE
                </span>
              </div>
              <div className="flex justify-between">
                <Typography as="span" variant="caption" className="font-mono text-xs">
                  SSR_CSR_Hybrid_Apps
                </Typography>
                <span className="text-secondary font-mono text-[10px]">
                  READY
                </span>
              </div>
              <div className="flex justify-between">
                <Typography as="span" variant="caption" className="font-mono text-xs">
                  Micro_Frontend
                </Typography>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  IDLE
                </span>
              </div>
            </div>
          </div>
          {/* PERFORMANCE */}
          <div className="bg-surface-container-lowest border-outline-variant/20 group hover:border-tertiary/40 flex flex-col rounded-lg border transition-colors">
            <div className="bg-surface-container-high flex items-center gap-2 px-3 py-2">
              <Zap size={10} className="text-tertiary" />
              <span className="text-on-surface font-mono text-[10px] tracking-widest uppercase">
                PERFORMANCE
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex justify-between">
                <span className="text-tertiary font-mono text-xs">
                  Lazy_Loading
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  OPTIMIZE
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary font-mono text-xs">
                  Memoization
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  STABLE
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary font-mono text-xs">
                  Code_Splitting
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  FAST
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary font-mono text-xs">
                  Virtualization
                </span>
                <span className="text-on-surface-variant font-mono text-[10px]">
                  SYNC
                </span>
              </div>
            </div>
          </div>
          {/* UI STYLING */}
          <div className="bg-surface-container-lowest border-outline-variant/20 group hover:border-primary/40 flex flex-col rounded-lg border transition-colors">
            <div className="bg-surface-container-high flex items-center gap-2 px-3 py-2">
              <Palette size={10} className="text-primary" />
              <span className="text-on-surface font-mono text-[10px] tracking-widest uppercase">
                UI_STYLING
              </span>
            </div>
            <div className="space-y-3 p-4">
              {['Tailwind_CSS', 'Material_UI', 'Ant_Design'].map((tool) => (
                <div key={tool} className="flex items-center justify-between">
                  <span className="font-mono text-xs">{tool}</span>
                  <div className="flex gap-1">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <div className="bg-primary h-2 w-2 rounded-full" />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <Typography as="span" variant="caption" className="font-mono text-xs">
                  Styled_Components
                </Typography>
                <div className="flex gap-1">
                  <div className="bg-primary h-2 w-2 rounded-full" />
                  <div className="bg-primary h-2 w-2 rounded-full" />
                  <div className="bg-outline-variant h-2 w-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          {/* DEV TOOLS */}
          <div className="bg-surface-container-lowest border-outline-variant/20 group hover:border-secondary/40 flex flex-col rounded-lg border transition-colors">
            <div className="bg-surface-container-high flex items-center gap-2 px-3 py-2">
              <Cog size={10} className="text-secondary" />
              <span className="text-on-surface font-mono text-[10px] tracking-widest uppercase">
                DEV_TOOLS
              </span>
            </div>
            <div className="space-y-3 p-4">
              {DEV_TOOLS.map((tool) => (
                <div key={tool} className="flex items-center gap-2">
                  <CircleCheckBig
                    size={10}
                    className="text-on-surface-variant"
                  />
                  <span className="text-on-surface-variant font-mono text-xs">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* GitHub Activity */}
      <div className="bg-surface-container-low border-outline-variant/10 rounded-lg border p-6">
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
          <Typography as="h3" variant="h3" className="font-mono text-sm font-bold tracking-widest text-white">
            DEPLOYMENT_ACTIVITY
          </Typography>
          <div className="text-on-surface-variant flex items-center gap-4 font-mono text-[10px]">
            <div className="flex items-center gap-1">
              <div className="bg-surface-container-high h-2 w-2 rounded" /> Low
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-primary/40 h-2 w-2 rounded" />
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-primary/70 h-2 w-2 rounded" />
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-primary h-2 w-2 rounded" /> High
            </div>
          </div>
        </div>
        {/* Activity Grid */}
        <div className="flex flex-wrap gap-1.5 overflow-hidden">
          {activityGrid}
        </div>
        <div className="border-outline-variant/10 mt-4 flex flex-col sm:flex-row items-center justify-between border-t pt-4">
          <div className="text-on-surface-variant font-mono text-[10px]">
            LATEST_PUSH: Merge branch 'feature/auth-bypass' into main [14m ago]
          </div>
          <div className="text-secondary font-mono text-[10px]">
            SYSTEM_OPTIMIZED // NO_ERRORS
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
