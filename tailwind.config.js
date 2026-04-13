/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-dim': 'var(--surface-dim)',
        'surface-bright': 'var(--surface-bright)',

        'surface-container-lowest': 'var(--surface-container-lowest)',
        'surface-container-low': 'var(--surface-container-low)',
        'surface-container': 'var(--surface-container)',
        'surface-container-high': 'var(--surface-container-high)',
        'surface-container-highest': 'var(--surface-container-highest)',

        primary: 'var(--primary)',
        'primary-container': 'var(--primary-container)',
        'primary-fixed': 'var(--primary-fixed)',
        'primary-fixed-dim': 'var(--primary-fixed-dim)',

        secondary: 'var(--secondary)',
        'secondary-container': 'var(--secondary-container)',
        'secondary-fixed': 'var(--secondary-fixed)',
        'secondary-fixed-dim': 'var(--secondary-fixed-dim)',

        tertiary: 'var(--tertiary)',
        'tertiary-container': 'var(--tertiary-container)',
        'tertiary-fixed': 'var(--tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--tertiary-fixed-dim)',

        error: 'var(--error)',
        'error-container': 'var(--error-container)',

        outline: 'var(--outline)',
        'outline-variant': 'var(--outline-variant)',

        'on-background': 'var(--on-background)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',

        'on-primary': 'var(--on-primary)',
        'on-primary-container': 'var(--on-primary-container)',
        'on-primary-fixed': 'var(--on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--on-primary-fixed-variant)',

        'on-secondary': 'var(--on-secondary)',
        'on-secondary-container': 'var(--on-secondary-container)',
        'on-secondary-fixed': 'var(--on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--on-secondary-fixed-variant)',

        'on-tertiary': 'var(--on-tertiary)',
        'on-tertiary-container': 'var(--on-tertiary-container)',
        'on-tertiary-fixed': 'var(--on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--on-tertiary-fixed-variant)',

        'on-error': 'var(--on-error)',
        'on-error-container': 'var(--on-error-container)',

        'inverse-surface': 'var(--inverse-surface)',
        'inverse-on-surface': 'var(--inverse-on-surface)',
        'inverse-primary': 'var(--inverse-primary)',

        'surface-tint': 'var(--surface-tint)',
      },

      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },

      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['JetBrains Mono', 'monospace'],
      },
    },
  },

  plugins: [],
}
