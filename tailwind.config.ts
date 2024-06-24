import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        'main-color': 'rgba(65, 113, 255, 1)',
        'sub-color': 'rgba(98, 132, 232, 1)',
        'main-400': 'rgba(160, 184, 255, 1)',
        'main-300': 'rgba(160, 184, 255, 1)',
        'main-200': 'rgba(217, 227, 255, 1)',
        'main-100': 'rgba(236, 241, 255, 1)',
        red: 'rgba(255, 65, 65, 1)',
      },
      fontSize: {
        'large-title': '2.4rem',
        'large-1': '2.3rem',
        'headline-1': '2.2rem',
        'headlin-2': '2.1rem',
        'body-1': '1.7rem',
        'body-2': '1.5rem',
        'text-caption': '1.4rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: ['Pretendard-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
