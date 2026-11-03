/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        slate: {
          50: '#fafafa',
          100: '#f3f3f3',
          200: '#e3e3e3',
          300: '#c9c9c9',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#303030',
          900: '#202020',
          950: '#141414',
        },
        lime: {
          50: '#f1f6ef',
          100: '#e2eddf',
          200: '#c7ddc2',
          300: '#afcfa7',
          400: '#98bf8f',
          500: '#80ac76',
          600: '#5e8655',
          700: '#466740',
          800: '#354e31',
          900: '#283c26',
          950: '#1d2a1c',
        },
      },
    },
  },
  plugins: [],
};
