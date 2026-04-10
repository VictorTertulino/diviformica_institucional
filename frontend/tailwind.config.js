/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial Luxury Palette
        carbon: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c1',
          400: '#91919f',
          500: '#737384',
          600: '#5d5d6c',
          700: '#4c4c58',
          800: '#41414b',
          900: '#393941',
          950: '#18181b',
        },
        navy: {
          50: '#eeeeff',
          100: '#d8d8ff',
          200: '#b5b5ff',
          300: '#8a8aff',
          400: '#5a5ae0',
          500: '#2020b8',
          600: '#00007e',
          700: '#00006b',
          800: '#000058',
          900: '#000048',
          950: '#000028',
        },
        champagne: {
          50: '#fdfaf3',
          100: '#f8f0d8',
          200: '#f1dfaf',
          300: '#e8c87e',
          400: '#dfac51',
          500: '#d7963a',
          600: '#c17a2e',
          700: '#a15e28',
          800: '#834b27',
          900: '#6c3f23',
          950: '#3d2010',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['clamp(1.8rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8', fontWeight: '300' }],
      },
      spacing: {
        'section': 'clamp(80px, 12vw, 160px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.7s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
