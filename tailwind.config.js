/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(#E6EEF7, rgba(255, 255, 255, 0.3))",
      },
    },
  },
  plugins: [],
}