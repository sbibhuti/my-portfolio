import { Ellipsis, Mail, ShieldCheck, SquareTerminal } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import TerminalHeader from '../components/ui/TerminalHeader'
import SectionTitle from '../components/ui/SectionTitle'
import Chip from '../components/ui/Chip'
import Button from '../components/ui/Button'
import { Typography } from '../components/ui/Typography'

const PortfolioSection: React.FC = () => {
  return (
    <main className="sm:mx-auto max-w-7xl px-6 pt-24 pb-16">
      {/* Header Section */}
      <SectionTitle
        icon={<SquareTerminal size={12} />}
        subtitle="System.Output / Portfolio"
        title="ENGINEERED_SOLUTIONS"
        description="A curated selection of high-impact technical architectures, UI implementations, and digital transformation initiatives. Optimized for performance, scale, and user experience."
      />
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Project 1 */}
        <div className="group bg-surface-container-low/60 border-outline border-l-primary hover:border-primary/40 overflow-hidden rounded-lg border-l-4 transition-all duration-300 lg:col-span-8">
          <TerminalHeader
            title="~/projects/mfund-plus.app"
            icon={
              <Link
                to="/case-study"
                className="hover:text-primary flex items-center transition-colors"
              >
                <Ellipsis size={14} />
              </Link>
            }
          />
          <div className='p-6 pb-0'>
            <Typography as="h3" variant="h3" className="text-on-surface mb-2 text-2xl font-bold">
              Mfund Plus
            </Typography>
            <div className="mb-6 flex flex-wrap gap-2">
              <Chip label="ANT_DESIGN" variant="outline" />
              <Chip label="VIRTUALIZE" variant="primary" />
              <Chip label="REACT.JS" variant="outline" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 p-6 pt-0 md:grid-cols-2">
            <div>
              <div className="space-y-4">
                <div>
                  <Typography as="h4" variant="overline" color="primary" className="mb-1 font-mono text-[10px] font-bold">
                    Problem
                  </Typography>
                  <Typography as="p" variant="bodySmall" color="muted" className="text-sm">
                    Large volumes of API data displayed in the Ant Design Table
                    caused slow initial loading and laggy pagination in the MfundPlus application,
                    leading to poor UI responsiveness.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" variant="overline" color="secondary" className="mb-1 font-mono text-[10px] font-bold">
                    Solution
                  </Typography>
                  <Typography as="p" variant="bodySmall" color="muted" className="text-sm">
                    Implemented client-side caching using IndexedDB, integrated paginated data loading into Redux state management,
                    and applied table virtualization to render only visible rows.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" variant="overline" color="tertiary" className="mb-1 font-mono text-[10px] font-bold">
                    Impact
                  </Typography>
                  <Typography as="p" variant="bodySmall" className="text-sm font-medium">
                    Improved data load performance and pagination speed
                    <Typography as="span" variant="bodySmall" color="secondary" className="font-bold">
                      &nbsp;by 54%,&nbsp;
                    </Typography>
                    resulting in a smoother user experience and a scalable approach for handling large datasets.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="bg-surface-container border-outline relative rounded border p-4 font-mono text-xs">
              <div className="border-outline mb-4 flex items-center justify-between border-b pb-2">
                <span className="text-on-surface-variant">
                  Performance_Metrics.json
                </span>
                <Typography as="span" variant="bodySmall" color="secondary" className="font-bold">
                  READY
                </Typography>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Typography as="span" variant="bodySmall" color="muted">
                    Uptime:
                  </Typography>
                  <Typography as="span" variant="bodySmall">
                    99.99%
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography as="span" variant="bodySmall" color="muted">
                    API_Latency:
                  </Typography>
                  <Typography as="span" variant="bodySmall" color="secondary" className="font-bold">
                    42ms
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography as="span" variant="bodySmall" color="muted">
                    Active_Nodes:
                  </Typography>
                  <Typography as="span" variant="bodySmall">
                    128
                  </Typography>
                </div>
                <div className="bg-surface-container-high border-outline/50 mt-4 h-2 w-full overflow-hidden rounded-full border">
                  <div className="bg-secondary h-full w-3/4" />
                </div>
                <Typography as="p" variant="caption" color="muted" className="mt-2 text-[10px]">
                  {'// Processing 50k transactions/sec'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="bg-surface-container-low/60 border-outline border-l-secondary hover:border-secondary/40 overflow-hidden rounded-lg border-l-4 transition-all duration-300 lg:col-span-4">
          <TerminalHeader title="main.py" />
          <div className="flex h-full flex-col p-6">
            <Typography as="h3" variant="h3" className="text-on-surface mb-2 text-xl font-bold">
              Go To Foods
            </Typography>
            <div className="mb-4 flex flex-wrap gap-2">
              <Chip label="NEXT.JS" variant="outline" />
              <Chip label="STORYBOOK" variant="secondary" />
              <Chip label="CMS" variant="outline" />
            </div>
            <Typography as="p" variant="bodySmall" color="muted" className="mb-6 line-clamp-7 text-sm">
              Go To Foods is a multi-brand online food ordering platform built with Next.js using a monorepo architecture
              to manage 6–7 different brand applications within a single codebase.
              The platform follows a hybrid rendering approach combining SSR and CSR for optimal performance and SEO.
              Reusable UI components were developed and documented using Storybook,
              while brand-specific design tokens were generated using Tailwind CSS to maintain consistent theming across brands.
            </Typography>
            <div className="border-outline mt-auto border-t pt-6">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant font-mono text-[10px] font-bold">
                  IMPACT
                </span>
                <span className="text-secondary text-sm font-bold">
                  +16% Added User
                </span>
              </div>
              <div className="border-outline bg-surface-container mt-4 h-24 w-full overflow-hidden rounded border">
                <img
                  className="h-full w-full object-cover opacity-60 grayscale transition-opacity hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdGk-pQGi7R0pU7VqUwP6b2jqWl7sUxl8frT08PfGg6wGrKCpWA8_aGpi4-IGcQnt-2kWpxDcUkCb0TW1yR30N6kxuiZ_sV6K9-2yaajjm2o7NiM475mjYyLVXdkD0nHrBzY_lYAAmx3OJa19SHBmNahr8jp3x0V35tZvF507V-xJgEruhUE3mpTNyyyrwr7C1WXvbiUd4jKjQ0IhoaZrPF-hocDBi2R75D-eljuPEiCdVu_BGRWzCc12ksLBwMZa95NpMIYc4LAk"
                  alt="Go To Foods"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="bg-surface-container-low/60 border-outline border-l-tertiary hover:border-tertiary/40 overflow-hidden rounded-lg border-l-4 transition-all duration-300 lg:col-span-12">
          <TerminalHeader
            title="~/infrastructure/digital-vault"
            icon={<Ellipsis size={14} />}
          />
          <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <Typography as="h3" variant="h3" className="text-on-surface mb-2 text-2xl font-bold">
                Leap to Digital
              </Typography>
              <div className="mb-6 flex flex-wrap gap-2">
                <Chip label="SYSTEM ARCHITECTURE" variant="outline" />
                <Chip label="MICRO FRONTEND" variant="tertiary" />
                <Chip label="OPTIMIZATION" variant="outline" />
              </div>
              <div className="space-y-4">
                <div>
                  <Typography as="h4" variant="overline" color="primary" className="mb-1 font-mono text-[10px] font-bold">
                    Challenge
                  </Typography>
                  <Typography as="p" variant="bodySmall" color="muted" className="text-sm">
                    The Leap to Digital initiative required modernizing multiple legacy systems and integrating
                    diverse suppliers into a single scalable platform while supporting different user roles.
                    The growing codebase and team collaboration also demanded a more modular architecture
                    to maintain performance and development speed.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" variant="overline" color="secondary" className="mb-1 font-mono text-[10px] font-bold">
                    Approach
                  </Typography>
                  <Typography as="p" variant="bodySmall" color="muted" className="text-sm">
                    Implemented a Micro Frontend architecture using React with Webpack Module Federation to enable
                    independent deployments and shared dependencies. Built reusable components, applied lazy loading,
                    responsive UI with Tailwind CSS, and enforced structured workflows through GitHub.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" variant="overline" color="tertiary" className="mb-1 font-mono text-[10px] font-bold">
                    Result
                  </Typography>
                  <Typography as="p" variant="bodySmall" className="text-sm font-medium">
                    Reduced bundle size by
                    <Typography as="span" variant="bodySmall" color="secondary" className="font-bold">
                      &nbsp; 20% and improved &nbsp;
                    </Typography>
                    development efficiency through independent team deployments. The modular architecture enhanced application
                    performance, scalability, and ensured reliable, bug-free releases.
                  </Typography>
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="bg-surface-container border-outline flex aspect-square w-full flex-col items-center justify-center rounded-lg border p-6 text-center">
              <div className="bg-surface border-outline mb-4 flex h-16 w-16 items-center justify-center rounded-full border">
                <ShieldCheck className="text-secondary" size={32} />
              </div>
              <Typography as="div" variant="h2" className="text-on-surface text-3xl font-bold">
                100%
              </Typography>
              <div className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase">
                Data Integrity
              </div>
              <div className="mt-6 w-full space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-on-surface-variant">
                    Security_Score
                  </span>
                  <Typography as="span" variant="bodySmall" color="secondary" className="font-bold">
                    A+
                  </Typography>
                </div>
                <div className="bg-surface-container-high h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-secondary h-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <section className="border-outline mt-20 flex flex-col items-center border-t py-12 text-center">
        <Typography as="h3" variant="h3" className="text-on-surface mb-4 text-2xl font-bold">
          Ready to compile your next project?
        </Typography>
        <Typography as="p" variant="bodySmall" color="muted" className="mb-8 max-w-md text-sm">
          Let's discuss how technical rigor can drive your business impact.
          Available for consulting and architecture roles.
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="font-mono text-sm font-bold">
            <Mail size={14} />
            START_THREAD
          </Button>
          <Button
            variant="secondary"
            className="bg-surface-container hover:bg-surface-container-high border-outline/20 font-mono text-sm font-bold"
          >
            VIEW_GITHUB
          </Button>
        </div>
      </section>
    </main>
  )
}

export default PortfolioSection
