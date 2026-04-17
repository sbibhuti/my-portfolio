import React from 'react'
import { Typography } from '../components/ui/Typography'

const CaseStudy: React.FC = () => {
  return (
    <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-24 pb-16 md:grid-cols-12">
      {/* Case Study Header */}
      <section className="mb-8 md:col-span-12">
        <div className="text-on-surface-variant mb-4 flex items-center gap-3">
          <Typography as="span" variant="caption" className="material-symbols-outlined text-sm">
            terminal
          </Typography>
          <span className="font-mono text-xs tracking-widest uppercase">
            system_log // optimization_task
          </span>
        </div>

        <Typography as="h1" variant="display" className="headline mb-6 leading-none font-black tracking-tighter md:text-6xl">
          Improving Performance in a{' '}
          <Typography as="span" variant="display" color="primary">
            Next.js
          </Typography>{' '}
          Application
        </Typography>

        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-surface-container text-on-surface border-outline-variant rounded-full border px-3 py-1 font-mono text-[10px]">
            Vercel Edge
          </span>

          <span className="bg-surface-container text-on-surface border-outline-variant rounded-full border px-3 py-1 font-mono text-[10px]">
            Web Vitals
          </span>

          <span className="bg-surface-container text-on-surface border-outline-variant rounded-full border px-3 py-1 font-mono text-[10px]">
            Brotli compression
          </span>
        </div>
      </section>

      {/* Left Column */}
      <aside className="md:col-span-3">
        <div className="bg-surface-container-low border-outline-variant sticky top-24 overflow-hidden rounded-lg border">
          <div className="bg-surface-container-low border-outline-variant flex items-center justify-between border-b px-4 py-2">
            <span className="text-on-surface-variant font-mono text-[10px] font-bold uppercase">
              Explorer
            </span>

            <div className="flex gap-1.5">
              <div className="border-outline-variant bg-surface-container-high h-2.5 w-2.5 rounded-full border"></div>
            </div>
          </div>

          <div className="space-y-1 p-3">
            <div className="text-primary bg-primary-container flex items-center gap-2 rounded p-2 font-mono text-xs">
              <span className="material-symbols-outlined text-sm">
                folder_open
              </span>
              STRATEGY
            </div>

            <div className="space-y-0.5 pl-4">
              <div className="text-on-surface-variant hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded p-2 font-mono text-xs transition-colors">
                <span className="material-symbols-outlined text-secondary text-sm">
                  analytics
                </span>
                profiling.log
              </div>

              <div className="text-on-surface hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded p-2 font-mono text-xs font-semibold transition-colors">
                <span className="material-symbols-outlined text-primary text-sm">
                  javascript
                </span>
                code_splitting.ts
              </div>

              <div className="text-on-surface-variant hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded p-2 font-mono text-xs transition-colors">
                <span className="material-symbols-outlined text-tertiary text-sm">
                  image
                </span>
                assets_opt.config
              </div>
            </div>

            <div className="text-on-surface-variant hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded p-2 font-mono text-xs transition-colors">
              <Typography as="span" variant="caption" className="material-symbols-outlined text-sm">
                folder
              </Typography>
              IMPLEMENTATION
            </div>

            <div className="text-on-surface-variant hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded p-2 font-mono text-xs transition-colors">
              <Typography as="span" variant="caption" className="material-symbols-outlined text-sm">
                folder
              </Typography>
              RESULTS
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="space-y-12 md:col-span-9">
        {/* Problem Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-outline-variant h-px grow"></div>

            <span className="text-error px-2 font-mono text-[10px] font-bold tracking-widest uppercase">
              01. The Problem
            </span>

            <div className="bg-outline-variant h-px w-8"></div>
          </div>

          <div className="bg-surface-container-lowest border-outline-variant overflow-hidden rounded-lg border">
            <div className="bg-surface-container-low border-outline-variant flex items-center gap-2 border-b px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#cf222e]"></div>
                <div className="h-3 w-3 rounded-full bg-[#d4a72c]"></div>
                <div className="h-3 w-3 rounded-full bg-[#1f883d]"></div>
              </div>

              <span className="text-on-surface-variant ml-2 font-mono text-[11px] font-bold">
                bash — diagnostics_report.err
              </span>
            </div>

            <div className="bg-surface-container space-y-2 p-6 font-mono text-sm leading-relaxed">
              <Typography as="p" variant="bodySmall" color="error" className="flex items-start gap-4">
                <Typography as="span" variant="caption" className="text-on-surface-variant/40">
                  1
                </Typography>
                <Typography as="span" variant="bodySmall">
                  [CRITICAL] Lighthouse CI: Performance Score &lt; 40
                </Typography>
              </Typography>

              <Typography as="p" variant="bodySmall" className="text-on-surface-variant/40 flex items-start gap-4">
                <Typography as="span" variant="caption" className="text-on-surface-variant/40">
                  2
                </Typography>
                <Typography as="span" variant="bodySmall">
                  ---
                </Typography>
              </Typography>

              <Typography as="p" variant="bodySmall" className="flex items-start gap-4">
                <Typography as="span" variant="caption" className="text-on-surface-variant/40">
                  3
                </Typography>
                <Typography as="span" variant="bodySmall">
                  Main thread blocked for 1.2s during hydration.
                </Typography>
              </Typography>

              <Typography as="p" variant="bodySmall" className="flex items-start gap-4">
                <Typography as="span" variant="caption" className="text-on-surface-variant/40">
                  4
                </Typography>
                <Typography as="span" variant="bodySmall">
                  Excessive DOM size detected: 3,400 elements.
                </Typography>
              </Typography>

              <Typography as="p" variant="bodySmall" color="tertiary" className="flex items-start gap-4">
                <Typography as="span" variant="caption" className="text-on-surface-variant/40">
                  5
                </Typography>
                <span>
                  [WARN] Unused JS chunks found in initial payload (840KB).
                </span>
              </Typography>
            </div>
          </div>

          <Typography as="p" variant="bodySmall" color="muted" className="max-w-2xl text-sm leading-relaxed">
            The initial audit revealed significant bottlenecks in the user
            journey. The application was suffering from high First Contentful
            Paint (FCP) and heavy JavaScript execution times, resulting in a
            sluggish mobile experience.
          </Typography>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-outline-variant h-px grow"></div>

            <span className="text-primary px-2 font-mono text-[10px] font-bold tracking-widest uppercase">
              02. Implementation
            </span>

            <div className="bg-outline-variant h-px w-8"></div>
          </div>

          <div className="bg-surface-container-lowest border-outline-variant overflow-hidden rounded-lg border">
            <div className="bg-surface-container-low border-outline-variant flex items-center gap-2 border-b px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#cf222e]"></div>
                <div className="h-3 w-3 rounded-full bg-[#d4a72c]"></div>
                <div className="h-3 w-3 rounded-full bg-[#1f883d]"></div>
              </div>

              <span className="text-on-surface-variant ml-2 font-mono text-[11px] font-bold">
                code_splitting.ts
              </span>
            </div>

            <div className="bg-surface-container space-y-2 p-6 font-mono text-sm">
              <pre className="text-on-surface whitespace-pre-wrap">
                {`// Dynamic imports to reduce initial bundle size

                                import dynamic from "next/dynamic"

                                const Chart = dynamic(() => import("../components/Chart"), {
                                ssr: false
                                })

                                const HeavyComponent = dynamic(
                                () => import("../components/HeavyComponent"),
                                { loading: () => <Typography as="p">Loading...</Typography> }
                                )

                                // Image optimization
                                import Image from "next/image"

                                <Image
                                src="/hero.png"
                                width={1200}
                                height={600}
                                priority
                                alt="Hero"
                                />
                                `}
              </pre>
            </div>
          </div>

          <Typography as="p" variant="bodySmall" color="muted" className="max-w-2xl text-sm leading-relaxed">
            We reduced the JavaScript bundle by implementing dynamic imports and
            lazy loading for heavy components. Image optimization with Next.js
            and Brotli compression further reduced payload size and improved
            rendering performance.
          </Typography>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-outline-variant h-px grow"></div>

            <span className="text-secondary px-2 font-mono text-[10px] font-bold tracking-widest uppercase">
              03. Performance Metrics
            </span>

            <div className="bg-outline-variant h-px w-8"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Metric Card */}
            <div className="bg-surface-container border-outline-variant space-y-2 rounded-lg border p-6">
              <Typography as="p" variant="caption" color="muted" className="font-mono text-xs uppercase">
                Lighthouse Score
              </Typography>

              <Typography as="h3" variant="h3" color="primary" className="text-3xl font-bold">94</Typography>

              <Typography as="p" variant="caption" color="muted" className="text-xs">
                Improved from 38 after optimizations
              </Typography>
            </div>

            {/* Metric Card */}
            <div className="bg-surface-container border-outline-variant space-y-2 rounded-lg border p-6">
              <Typography as="p" variant="caption" color="muted" className="font-mono text-xs uppercase">
                First Contentful Paint
              </Typography>

              <Typography as="h3" variant="h3" color="secondary" className="text-3xl font-bold">1.1s</Typography>

              <Typography as="p" variant="caption" color="muted" className="text-xs">
                Reduced from 3.4s
              </Typography>
            </div>

            {/* Metric Card */}
            <div className="bg-surface-container border-outline-variant space-y-2 rounded-lg border p-6">
              <Typography as="p" variant="caption" color="muted" className="font-mono text-xs uppercase">
                Bundle Size
              </Typography>

              <Typography as="h3" variant="h3" color="tertiary" className="text-3xl font-bold">−62%</Typography>

              <Typography as="p" variant="caption" color="muted" className="text-xs">
                From 840KB → 320KB
              </Typography>
            </div>
          </div>
          {/* Summary + Conclusion */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Summary */}
            <div className="bg-surface-container border-outline-variant space-y-3 rounded-lg border p-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">
                  analytics
                </span>

                <span className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">
                  Summary
                </span>
              </div>

              <Typography as="p" variant="bodySmall" color="muted" className="text-sm leading-relaxed">
                Performance improvements were achieved through bundle reduction,
                dynamic imports, and optimized image delivery. The changes
                resulted in significantly faster page load times and smoother
                user interactions across mobile and desktop environments.
              </Typography>
            </div>

            {/* Conclusion */}
            <div className="bg-surface-container border-outline-variant space-y-3 rounded-lg border p-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  task_alt
                </span>

                <span className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">
                  Conclusion
                </span>
              </div>

              <Typography as="p" variant="bodySmall" color="muted" className="text-sm leading-relaxed">
                By focusing on performance-first architecture, the application
                achieved production-grade performance metrics while maintaining
                scalability. The improvements also ensured better SEO rankings
                and higher Lighthouse scores.
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default CaseStudy
