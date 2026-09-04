/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#07090E',
        surface: '#0E131F',
        cyberPurple: '#7C3AED',
        cyberCyan: '#06B6D4',
      },
    },
  },
  plugins: [],
}
