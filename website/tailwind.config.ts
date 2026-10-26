import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fefdf8',
          100: '#fdf8ef',
          200: '#faf0d7',
          300: '#f5e4b8',
          400: '#edd08a',
          500: '#e3b95e',
        },
        warmgray: {
          50:  '#faf9f7',
          100: '#f3f2ee',
          200: '#e8e5de',
          300: '#d6d2c8',
          400: '#b5b0a3',
          500: '#8f8a7e',
          600: '#6b6660',
          700: '#524f4a',
          800: '#3a3835',
          900: '#252320',
          950: '#0f0e0c',
        },
        emergency: {
          50:  '#fff5f5',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        purple: {
          50:  '#f6f0fb',
          100: '#ecddf7',
          200: '#d8bbef',
          300: '#bc90e3',
          400: '#9f65d4',
          500: '#8347c0',
          600: '#6b34a8',
          700: '#55298a',
          800: '#3f1f6b',
          900: '#2b144a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'header-height': '4.5rem',
        'helpbar-height': '2.5rem',
        'total-bar': '7rem',
      },
      boxShadow: {
        'header': '0 1px 3px 0 rgb(0 0 0 / 0.08)',
        'header-scrolled': '0 4px 24px 0 rgb(0 0 0 / 0.10)',
        'card': '0 2px 8px 0 rgb(0 0 0 / 0.06), 0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card-hover': '0 8px 32px 0 rgb(0 0 0 / 0.12)',
        'mega': '0 20px 60px 0 rgb(0 0 0 / 0.12)',
        'overlay': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      borderRadius: {
        'xl': '0.375rem',
        '2xl': '0.5rem',
        '3xl': '0.75rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-8px)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'skeleton-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'progress': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'backdrop-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 250ms cubic-bezier(0.4,0,0.2,1) both',
        'fade-in-up': 'fade-in-up 300ms cubic-bezier(0.4,0,0.2,1) both',
        'fade-out': 'fade-out 200ms cubic-bezier(0.4,0,0.2,1) both',
        'slide-in-right': 'slide-in-right 300ms cubic-bezier(0.4,0,0.2,1) both',
        'slide-out-right': 'slide-out-right 250ms cubic-bezier(0.4,0,0.2,1) both',
        'scale-in': 'scale-in 200ms cubic-bezier(0.4,0,0.2,1) both',
        'skeleton': 'skeleton-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'progress': 'progress 1.5s cubic-bezier(0.4,0,0.2,1) infinite',
        'backdrop-in': 'backdrop-in 200ms ease both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
