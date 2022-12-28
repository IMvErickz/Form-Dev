/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBack': '#18181b',
        'bgInput': '#475569',
        'yellowForm': '#D3E700'
      },

      fontFamily: {
        headerText: 'Stencil Std, fantasy'
      }
    },
  },
  plugins: [],
}
