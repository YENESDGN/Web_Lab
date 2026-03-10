/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#2563EB',
        accent: '#7C3AED',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      }
    },
  },
  plugins: [],
}
