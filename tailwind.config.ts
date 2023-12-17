/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '700': "#6941C6",
          '600': "#7F56D9",
          '100': "#F4EBFF",
          '50': "#F9F5FF",
        },
        
      }
    },
  },
  plugins: [],
}