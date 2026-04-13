import { Copyright } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'GITHUB', to: '/github' },
  { label: 'LINKEDIN', to: '/linkedin' },
  { label: 'EMAIL', to: '/email' },
]

const Footer: React.FC = () => {
  return (
    <footer className="border-outline-variant bg-surface-container-low w-full border-t py-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-on-surface-variant font-mono text-[10px] font-bold tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <Copyright size={10} />{' '}
            <span>2024 BIBHUTI_SUNARI // SYSTEM_READY</span>
          </span>
        </div>

        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-on-surface-variant hover:text-primary font-mono text-[12px] font-bold tracking-widest uppercase transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
