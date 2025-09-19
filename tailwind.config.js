/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'wa-green': '#25D366',
        'gray-light': '#F5F5F5',
        'gray-medium': '#E0E0E0',
      }
    },
  },
  plugins: [],
}
