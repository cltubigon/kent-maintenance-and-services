/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        DEFAULT: '1140px',
      },
    },
    extend: {
      boxShadow: {
        custom1: '0 0 23px 0 rgba(49, 144, 221, 0.53)',
        custom2: '3px 3px 3px 0px rgba(47, 142, 221, 0.32)',
        custom3: '2px 2px 2px 0px rgba(47, 142, 221, 0.32)',
        custom4: '1px 1px 5px 0px rgba(40, 140, 204, 0.75)',
        custom5: '0px 0px 20px 5px rgba(47, 142, 221, 0.22)',
        custom6: '3px 3px 3px 0px rgba(0, 0, 0, 0.22)',
        customInner1: 'rgba(0, 0, 0, 0.22) 0px 1px 4px inset',
      },
      fontFamily: {
        tinos: ['var(--tinos)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#fe2020',
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6565',
          600: '#ec1616',
          700: '#c70e0e',
          800: '#a41010',
          900: '#881414',
          950: '#4a0505',
        },
        secondary: {
          DEFAULT: '#0A3341',
          50: '#edfdfe',
          100: '#d1fafc',
          300: '#6ce8f4',
          400: '#29d3e7',
          700: '#13748b',
          900: '#194f60',
        },
        paragraph: {
          DEFAULT: '#737373',
        },
      },
    },
  },
  plugins: [],
}
