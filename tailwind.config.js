/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#193022',
        secondary: '#504f53',
        accent: '#445b3c',
        background: '#c2c8c4',
        muted: '#949790',
    },
    fontFamily: {
        fredericka: ['"Fredericka the Great"', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
    },
    },
  },
  plugins: [],
}

