/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        gcbp: {
          primary: '#1e40af',
          light: '#f3f4f6',
          text: '#4b5563',
          bg: '#fafafa',
          dark: '#1e1b4b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif']
      }
    },
  },
  plugins: [],
}

