/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#c2c8c4", // Light Gray
        dark: "#193022",  // Dark Green
        neutral: "#504f53", // Neutral Gray
        medium: "#949790", // Medium Gray
        accent: "#445b3c", // Accent Green
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Free font
        body: ['Inter', 'sans-serif'],          // Free font
        accent: ['Cormorant Garamond', 'serif'], // Free font
        handwritten: ['Freehand', 'cursive'],  // Free handwritten font
      },
    },
  },
  plugins: [],
}

