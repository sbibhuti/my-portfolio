/* eslint-disable react-refresh/only-export-components */
import { type ElementType, type HTMLAttributes, forwardRef } from 'react'

// 1. Variant Map
export const typographyVariants = {
  display:
    'font-headline text-5xl md:text-7xl font-bold uppercase tracking-tight',
  h1: 'font-headline text-4xl font-bold',
  h2: 'font-headline text-3xl font-bold',
  h3: 'font-headline text-2xl font-bold',
  h4: 'font-headline text-xl font-bold',
  sectionTitle: 'font-mono text-sm tracking-widest uppercase',
  bodyLarge: 'font-sans text-lg',
  body: 'font-sans text-base',
  bodySmall: 'font-sans text-sm',
  bodyMonoLarge: 'font-label text-lg',
  bodyMono: 'font-label text-base',
  bodyMonoSmall: 'font-label text-sm',
  caption: 'font-label text-xs',
  overline: 'font-mono uppercase tracking-widest',
  code: 'font-mono text-sm font-bold bg-surface-container border border-outline rounded px-1.5 py-0.5',
}

// 2. Color Map
export const typographyColors = {
  default: 'text-on-surface',
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  muted: 'text-on-surface-variant',
  inverse: 'text-on-primary',
  error: 'text-error',
  inherit: '',
}

// 3. Weight Map
export const typographyWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
  black: 'font-black',
}

// 4. Align Map
export const typographyAligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

// Default tags mapping
const defaultTags: Record<keyof typeof typographyVariants, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  sectionTitle: 'h2',
  bodyLarge: 'p',
  body: 'p',
  bodySmall: 'p',
  bodyMonoLarge: 'p',
  bodyMono: 'p',
  bodyMonoSmall: 'p',
  caption: 'span',
  overline: 'span',
  code: 'code',
}

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: keyof typeof typographyVariants
  as?: ElementType
  color?: keyof typeof typographyColors
  weight?: keyof typeof typographyWeights
  align?: keyof typeof typographyAligns
  truncate?: boolean
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body',
      as,
      color = 'default',
      weight,
      align,
      truncate = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultTags[variant]

    // Construct classes
    const classes = [
      typographyVariants[variant],
      typographyColors[color],
      weight ? typographyWeights[weight] : '',
      align ? typographyAligns[align] : '',
      truncate ? 'truncate' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Component ref={ref as unknown} className={classes} {...props}>
        {children}
      </Component>
    )
  }
)

Typography.displayName = 'Typography'
