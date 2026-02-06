/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1a8',
          400: '#56b47c',
          500: '#32995a',
          600: '#247a47',
          700: '#1e6139',
          800: '#1a4d2f',
          900: '#164028',
        },
        earth: {
          50: '#faf9f7',
          100: '#f3f0eb',
          200: '#e6dfd3',
          300: '#d4c8b3',
          400: '#c0ad8e',
          500: '#b09673',
          600: '#a08562',
          700: '#856e52',
          800: '#6d5a45',
          900: '#5a4a3a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
