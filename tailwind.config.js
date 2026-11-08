/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0A192F',
            light: '#172A45',
            dark: '#050D1A',
            deep: '#030811'
          },
          green: {
            DEFAULT: '#1E7E34',
            emerald: '#28A745',
            light: '#34D399',
            dark: '#145A25',
            glow: '#4ADE80'
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F59E0B',
            warm: '#E6A117',
            subtle: '#FEF3C7'
          },
          bronze: {
            DEFAULT: '#321B09',
            dark: '#231306'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(2, 12, 27, 0.3)',
        'premium-hover': '0 20px 40px -15px rgba(2, 12, 27, 0.4)',
        'glow-green': '0 0 25px -5px rgba(40, 167, 69, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.35)'
      },
      animation: {
        'fade-in': 'fadeOutToIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeOutToIn: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.995)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

