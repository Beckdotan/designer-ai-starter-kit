import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        bone: '#FAFAF7',
        paper: '#F2F0EA',
        chalk: '#E8E5DD',
        cobalt: {
          DEFAULT: '#2C5FFF',
          ink: '#1240D9',
          light: '#7FA0FF',
        },
        graphite: '#4A4A48',
        smoke: '#8B8B87',
        terminal: {
          bg: '#111114',
          fg: '#E8E5DD',
          warm: '#17140F',
        },
      },
      fontFamily: {
        sans: ['"General Sans"', 'Heebo', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(44px, 8vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-l': ['clamp(32px, 5.2vw, 56px)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-m': ['clamp(26px, 3vw, 36px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-l': ['clamp(18px, 1.4vw, 20px)', { lineHeight: '1.6' }],
        'body': ['clamp(16px, 1.1vw, 17px)', { lineHeight: '1.7' }],
        'body-s': ['14px', { lineHeight: '1.55' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'mono-label': ['12px', { lineHeight: '1.3', letterSpacing: '0.12em' }],
        'mono-body': ['13px', { lineHeight: '1.7' }],
      },
      transitionTimingFunction: {
        quart: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,10,10,0.04), 0 8px 24px -8px rgba(10,10,10,0.08)',
        lift: '0 2px 6px rgba(10,10,10,0.06), 0 18px 40px -14px rgba(10,10,10,0.15)',
        'focus-ring': '0 0 0 2px #FAFAF7, 0 0 0 4px #2C5FFF',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        prose: '65ch',
        content: '1200px',
      },
      animation: {
        'flash-border': 'flashBorder 150ms cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      keyframes: {
        flashBorder: {
          '0%, 100%': { boxShadow: 'inset 0 0 0 1px #E8E5DD' },
          '50%': { boxShadow: 'inset 0 0 0 2px #2C5FFF' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
