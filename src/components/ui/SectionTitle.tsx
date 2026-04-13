import React from 'react'
import { Typography } from './Typography'

interface SectionTitleProps {
  icon?: React.ReactNode
  subtitle: string
  title: string
  description?: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  icon,
  subtitle,
  title,
  description,
  className = '',
}) => {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="mb-2 flex items-center gap-3">
        {icon && (
          <span className="material-symbols-outlined text-primary text-sm">
            {icon}
          </span>
        )}
        <Typography variant="overline" color="muted">
          {subtitle}
        </Typography>
      </div>

      <Typography variant="h1" className="mb-4">
        {title}
      </Typography>

      {description && (
        <Typography
          variant="bodySmall"
          color="muted"
          className="max-w-2xl leading-relaxed"
        >
          {description}
        </Typography>
      )}
    </section>
  )
}

export default SectionTitle
