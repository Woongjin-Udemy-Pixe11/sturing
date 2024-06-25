import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'gray-1000': 'rgba(1, 1, 1, 1)',
        'gray-900': 'rgba(49, 49, 49, 1)',
        'gray-800': 'rgba(77, 77, 77, 1)',
        'gray-700': 'rgba(103, 103, 103, 1)',
        'gray-600': 'rgba(144, 144, 144, 1)',
        'gray-500': 'rgba(181, 181, 181, 1)',
        'gray-400': 'rgba(208, 208, 208, 1)',
        'gray-300': 'rgba(227, 227, 227, 1)',
        'gray-200': 'rgba(243, 243, 243, 1)',
        'gray-100': 'rgba(249, 249, 249, 1)',
        'main-700': 'rgba(21, 68, 208, 1)',
        'main-600': 'rgba(65, 113, 255, 1)',
        'main-500': 'rgba(98, 132, 232, 1)',
        'main-400': 'rgba(160, 184, 255, 1)',
        'main-300': 'rgba(160, 184, 255, 1)',
        'main-200': 'rgba(217, 227, 255, 1)',
        'main-100': 'rgba(236, 241, 255, 1)',
        red: 'rgba(255, 65, 65, 1)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        'large-title': '2.4rem',
        'large-1': '2.3rem',
        'headline-1': '2.2rem',
        'headline-2': '2.1rem',
        'headline-3': '1.8rem',
        'body-1': '1.7rem',
        'body-2': '1.5rem',
        'content-1': '1.4rem',
        'content-2': '1.2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: ['Pretendard-Regular', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        modal: '0 0 0.4rem rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
