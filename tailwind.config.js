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
            dark: '#000000',
            main: '#ffffff',
            light: '#ffffff',
            DEFAULT: '#ffffff',
          },
          secondary: {
            dark: '#000000',
            main: '#000000',
            DEFAULT: '#000000',
          },
        },
      },
    },
    plugins: [],
  }