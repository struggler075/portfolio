/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#a3e635', // Keep default lime but reference it explicitly if needed
        },
        zinc: {
          950: '#0a0a0a', // Custom deep black
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}