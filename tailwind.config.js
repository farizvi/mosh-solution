/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'sand': '#F9F9F2',
        'orange': '#FF6340',
      },
      borderColor: {
        'sand': '#F9F9F2',
      },
      fontFamily: {
        // sans: ['Maison Neue', 'cursive']
        custom1: ["Custom-1", "sans-serif"],
        custom2: ["Custom-2", "sans-serif"],
      },
      fontSize: {
        'bigTitle': '48px',
        'title': '18px',
        'bodyText': '16px',
        'caption': '14px'
      },
      textColor: {
        'bodyTextColor': '#003D3B',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
};
