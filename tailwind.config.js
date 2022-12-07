/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar': "url('/src/assets/images/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}
