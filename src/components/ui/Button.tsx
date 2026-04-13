import React, { type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) => {
  // Base classes implementing micro-interactions
  const baseClasses =
    'inline-flex items-center justify-center gap-3 font-body font-medium text-[0.9375rem] rounded-main cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-1'

  let variantClasses = ''
  switch (variant) {
    case 'primary':
      variantClasses =
        'px-8 py-3 border-none outline-none no-underline bg-primary text-on-primary hover:shadow-[0_0_15px_color-mix(in_srgb,var(--primary-container)_40%,transparent)]'
      break
    case 'secondary':
      variantClasses =
        'px-8 py-3 border border-outline text-on-surface rounded-lg font-mono font-bold hover:bg-surface-bright transition-all active:scale-95 bg-transparent'
      break
    case 'ghost':
      variantClasses =
        'px-1 py-1 border-none outline-none no-underline bg-transparent text-primary font-tech hover:bg-surface-bright'
      break
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim()

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
