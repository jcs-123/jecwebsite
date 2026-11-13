/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        jyothi: {
          purple: {
            950: '#19062b',
            900: '#260a3d',
            800: '#3c1361', // Official primary brand purple
            700: '#4e197c',
            600: '#63219d',
            500: '#7f2dc7',
            400: '#9d4deb',
            300: '#c48af5',
            200: '#e1c3fb',
            100: '#f3e6fd',
            50: '#faf5fe',
          },
          gold: {
            900: '#5c4106',
            800: '#7d5909',
            700: '#a3750f',
            600: '#ca9216',
            500: '#e8b854', // Official primary brand gold
            400: '#f5c768', // Vibrant warm gold
            300: '#f8d78c',
            200: '#fbe7b6',
            100: '#fdf4db',
            50: '#fffcf5',
          },
          charcoal: {
            900: '#0f172a',
            800: '#1e293b',
            700: '#334155',
            600: '#475569',
            500: '#64748b',
          }
        }
      },
      fontFamily: {
        brand: ['Outfit', 'Montserrat', 'sans-serif'],
        sub: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(232, 184, 84, 0.45)',
        'glow-purple': '0 0 40px -5px rgba(60, 19, 97, 0.4)',
        'card-hover': '0 20px 30px -10px rgba(60, 19, 97, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
