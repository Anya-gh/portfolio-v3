/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalgold: '#d4af37'
      },
      backgroundImage: {
        sunset: "url('./assets/bgs/sunset.jpg')"
      }
    },
  },
  plugins: [],
}

