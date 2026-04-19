import React from 'react'

interface ChipProps {
  label: string
  variant?:
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'label'
  casing?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  className?: string
  icon?: React.ReactNode
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  casing,
  className = '',
  icon,
}) => {
  let variantClasses = ''
  const appliedCasing = casing || 'uppercase'

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-primary-container text-on-primary-container border-primary/30 font-mono text-[10px]'
      break
    case 'secondary':
      variantClasses =
        'bg-secondary-container text-on-secondary-container border-secondary/30 font-mono text-[10px]'
      break
    case 'tertiary':
      variantClasses =
        'bg-tertiary-container text-on-tertiary-container border-tertiary/30 font-mono text-[10px]'
      break
    case 'outline':
      variantClasses =
        'bg-surface-container text-on-surface-variant border-outline font-mono text-[10px]'
      break
    case 'label':
      variantClasses =
        'bg-surface-container-high text-on-surface-variant font-label text-[10px] border-transparent'
      break
    case 'default':
    default:
      variantClasses =
        'bg-surface-container-highest text-on-surface font-tech text-xs border-outline/10 hover:bg-surface-bright hover:border-outline/30'
      break
  }

  return (
    <span
      className={`inline-flex items-center justify-center gap-1.5 rounded border px-2 py-0.5 tracking-[0.05em] transition-all duration-200 md:px-3 md:py-1 ${appliedCasing} ${variantClasses} ${className}`}
    >
      {icon && (
        <span className="flex items-center justify-center text-inherit [&>svg]:h-3 [&>svg]:w-3">
          {icon}
        </span>
      )}
      {label}
    </span>
  )
}

export default Chip
