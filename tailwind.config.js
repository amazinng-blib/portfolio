/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ernestColor: {
          dark: '#1c2026',
          light: '#31e7f7',
          primary: '#2fdeed',
          secondary: 'pink',
        },
      },
      fontFamily: {
        wdc: ['var(--font-sara)', ...fontFamily.sans],
        wdc2: ['var(--font-oswald)', ...fontFamily.sans],
        wdc3: ['var(--font-lato)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
