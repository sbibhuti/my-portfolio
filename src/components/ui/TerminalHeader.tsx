import React from 'react'
import { Typography } from './Typography'

interface TerminalHeaderProps {
  title?: string
  icon?: React.ReactNode
  className?: string
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  title,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`bg-surface-container-highest border-outline/20 flex items-center justify-between border-b px-4 py-2 ${className}`}
    >
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>

      {title && (
        <Typography
          variant="overline"
          color="muted"
          align="center"
          className="tracking-[0.05em] sm:text-[11px]"
        >
          {title}
        </Typography>
      )}

      {icon && (
        <div className="text-on-surface-variant flex items-center text-xs">
          {icon}
        </div>
      )}
    </div>
  )
}

export default TerminalHeader
