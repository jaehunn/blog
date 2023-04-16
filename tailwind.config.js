/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#007aff',
        cyan: '#0de4e4',
        orange: '#ffa956',
        gray: '#a9bcce',
        yellow: '#ffd96a',
        pupple: '#8095ff',
      },
    },
  },
  plugins: [],
}
