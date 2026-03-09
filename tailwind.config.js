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
            dark: '#a45d48',
            main: '#ba4d17',
            light: '#fdbf53',
            DEFAULT: '#ba4d17',
          },
          secondary: {
            dark: '#6b4423',
            main: '#d4a574',
            DEFAULT: '#d4a574',
          },
        },
      },
    },
    plugins: [],
  }