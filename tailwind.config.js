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
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Tablet specific
        'tablet': {'min': '768px', 'max': '1023px'},
        'tablet-portrait': {'min': '768px', 'max': '1023px', 'orientation': 'portrait'},
        'tablet-landscape': {'min': '768px', 'max': '1023px', 'orientation': 'landscape'},
        // Mobile specific
        'mobile': {'max': '767px'},
        'mobile-small': {'max': '374px'},
      },
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
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.8rem + 2.25vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.2rem + 4vw, 4rem)',
        'fluid-6xl': 'clamp(3.75rem, 2.5rem + 6.25vw, 5rem)',
      }
    },
  },
  plugins: [],
}

