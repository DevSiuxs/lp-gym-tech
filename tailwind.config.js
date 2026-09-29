/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tron-black': '#050505',
        'tron-dark': '#0a0a0c',
        'tron-blue': '#00f0ff',
        'tron-blue-glow': '#00a3ff',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
