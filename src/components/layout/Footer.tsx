import { Copyright } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'
import { Typography } from '../ui/Typography'

const FOOTER_LINKS = [
  { label: 'GITHUB', to: 'https://github.com/sbibhuti/my-portfolio' },
  { label: 'LINKEDIN', to: 'https://www.linkedin.com/in/bibhuti-sunari-756a42311/' },
  { label: 'EMAIL', to: 'mailto:bibhutisunari11@gmail.com' },
]

const Footer: React.FC = () => {
  return (
    <footer className="border-outline-variant bg-surface-container-low w-full py-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Typography
          as="div"
          variant="overline"
          color="muted"
          className="font-mono text-[10px] font-bold tracking-widest"
        >
          <Typography as="span" variant="overline" color="muted" className="flex items-center gap-2">
            <Copyright size={10} />{' '}
            <Typography as="span" variant="overline" color="muted">
              2024 BIBHUTI_SUNARI // SYSTEM_READY
            </Typography>
          </Typography>
        </Typography>

        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Button
              variant='ghost'
              key={link.label}
              href={link.to}
              className="text-on-surface-variant hover:text-primary font-mono text-[12px] font-bold tracking-widest uppercase transition-all"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
