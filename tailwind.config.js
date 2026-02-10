/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        barber: {
          red: '#DC143C',
          blue: '#1e3a8a',
          gold: '#B8860B',
          dark: '#0f172a',
        }
      },
      animation: {
        'barber-pole': 'rotate-pole 1s linear infinite',
        'logo-pulse': 'logoPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        'rotate-pole': {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '0 84px' }
        },
        'logoPulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        'zoomIn': {
          'from': { transform: 'scale(0.8)' },
          'to': { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: [],
}
