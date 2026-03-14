/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            dark: '#6d28d9',
            main: '#a855f7',
            light: '#e9d5ff',
            DEFAULT: '#a855f7',
          },
          secondary: {
            dark: '#7c3aed',
            main: '#c084fc',
            DEFAULT: '#c084fc',
          },
          accent: {
            glow: '#d8b4fe',
            soft: '#f3e8ff',
          },
        },
      },
    },
    plugins: [],
  }