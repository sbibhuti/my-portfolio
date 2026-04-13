import React from 'react'
import {
  ArrowRight,
  ChevronsLeftRight,
  Cloud,
  Database,
  Download,
  DraftingCompass,
  Gauge,
  Network,
  RefreshCcw,
  SquareTerminal,
  Webhook,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'

const TECH_STACK = [
  { icon: 'JS', label: 'JS/TS', color: 'text-primary' },
  { icon: <Database />, label: 'NoSQL', color: 'text-secondary' },
  { icon: <Cloud />, label: 'AWS', color: 'text-tertiary' },
  { icon: <Webhook />, label: 'Node.js', color: 'text-primary' },
]

const TRUSTED_BY = [
  {
    name: 'Photon',
    class: 'text-lg text-on-surface tracking-tighter',
  },
  {
    name: 'Logiciel',
    class: 'font-mono text-sm text-secondary',
  },
  {
    name: 'Azentio',
    class: ' font-headline',
  },
  {
    name: 'Ncore Technology',
    class: 'tracking-tighter text-secondary',
  },
]

const Home: React.FC = () => {
  return (
    <main className="bg-background text-on-background mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-12 lg:grid-cols-12 lg:px-12">
      {/* LEFT SIDE */}
      <div className="space-y-8 lg:col-span-7">
        <div className="space-y-2">
          <span className="text-secondary font-mono text-sm font-bold tracking-[0.2em] uppercase">
            System.Initialize()
          </span>
          <h1 className="font-headline text-5xl leading-none font-black tracking-tighter lg:text-7xl">
            Building <span className="text-primary italic">Scalable,</span>
            <br />
            <span className="text-on-surface font-light tracking-tight">
              High-Performance
            </span>
            <br />
            Web Applications
          </h1>
        </div>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
          Senior Software Engineer specializing in modern JavaScript ecosystems.
          Turning complex technical requirements into elegant, resilient
          codebases.
        </p>
        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          <Chip
            label="React & Next.js Expert"
            variant="label"
            className="text-primary"
            casing="capitalize"
            icon={<SquareTerminal size={12} />}
          />
          <Chip
            label="SSR / CSR Architectures"
            variant="label"
            className="text-secondary"
            casing="capitalize"
            icon={<DraftingCompass size={12} />}
          />
          <Chip
            label="Performance Tuning"
            variant="label"
            className="text-tertiary"
            casing="capitalize"
            icon={<Gauge size={12} />}
          />
        </div>
        {/* BUTTONS */}
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Button variant="primary">
            VIEW PROJECTS <ArrowRight size={18} />
          </Button>
          <Button variant="secondary">
            DOWNLOAD RESUME <Download size={18} />
          </Button>
        </div>
      </div>
      {/* RIGHT SIDE IDE CARD */}
      <div className="lg:col-span-5">
        <div className="group relative">
          {/* Glow */}
          <div className="from-primary to-secondary absolute -inset-1 bg-linear-to-r opacity-20 blur-2xl transition-opacity group-hover:opacity-40"></div>
          {/* Card */}
          <div className="bg-surface-container-lowest border-outline-variant/20 relative overflow-hidden rounded-xl border shadow-2xl">
            {/* Header */}
            <div className="bg-surface-container-highest flex items-center justify-between px-4 py-3">
              <div className="flex gap-2">
                <div className="window-control-red h-3 w-3 rounded-full"></div>
                <div className="window-control-yellow h-3 w-3 rounded-full"></div>
                <div className="window-control-green h-3 w-3 rounded-full"></div>
              </div>
              <div className="text-on-surface-variant flex items-center gap-1 font-mono text-[10px]">
                <ChevronsLeftRight size={14} />
                ProfileSummary.tsx
              </div>
              <div className="w-12"></div>
            </div>
            {/* CODE AREA */}
            <div className="space-y-6 p-6 font-mono text-sm">
              <div>
                <div className="flex gap-4">
                  <span className="text-outline-variant text-xs">01</span>
                  <span>
                    <span className="text-primary">const</span>{' '}
                    <span className="text-on-surface">engineer</span> ={' {'}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline-variant text-xs">02</span>
                  <span className="text-on-surface-variant pl-4">name:</span>
                  <span className="text-secondary">'Bibhuti Sunari'</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline-variant text-xs">03</span>
                  <span className="text-on-surface-variant pl-4">role:</span>
                  <span className="text-secondary">
                    'Senior Software Engineer'
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline-variant text-xs">04</span>
                  <span className="text-on-surface-variant pl-4">status:</span>
                  <span className="text-tertiary">AVAILABLE_FOR_HIRE</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline-variant text-xs">05</span>
                  <span>{'};'}</span>
                </div>
              </div>
              {/* TECH STACK */}
              <div className="pt-2">
                <div className="text-outline-variant mb-3 text-[10px] tracking-widest uppercase">
                  Core_Tech_Stack
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {TECH_STACK.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="bg-surface-container-low hover:bg-surface-bright flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                        <span
                          className={`material-symbols-outlined ${item.color}`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-on-surface-variant text-[9px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* TRUSTED BY */}
              <div className="border-outline-variant/10 border-t pt-4">
                <div className="text-outline-variant mb-4 text-[10px] tracking-widest uppercase">
                  Trusted_By
                </div>
                <div className="flex flex-wrap items-center gap-6 opacity-70 grayscale transition-all hover:grayscale-0">
                  {TRUSTED_BY.map((item) => (
                    <span key={item.name} className={`font-bold ${item.class}`}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* FOOTER */}
            <div className="bg-surface-container-low border-outline-variant/10 flex items-center justify-between border-t px-4 py-1.5 font-mono text-[10px]">
              <div className="flex items-center gap-4">
                <span className="text-secondary flex items-center gap-1">
                  <Network size={12} />
                  main*
                </span>
                <span className="text-on-surface-variant flex items-center gap-1">
                  <RefreshCcw size={12} />0
                </span>
              </div>
              <div className="text-on-surface-variant flex items-center gap-4">
                <span>UTF-8</span>
                <span>TypeScript JSX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
