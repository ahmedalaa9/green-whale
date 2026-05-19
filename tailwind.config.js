/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            'deep-blue': '#1565B8',
            'sky-blue': '#38BDF8',
            'green': '#3BA640',
            'dark-green': '#166534',
            'fresh-green': '#4ADE80',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.7s ease forwards',
          'fade-in': 'fadeIn 0.6s ease forwards',
          'marquee': 'marquee 25s linear infinite',
          'slide-up-out': 'slideUpOut 0.6s ease forwards',
          'pulse-slow': 'pulseSlow 2.5s ease-in-out infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(32px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          slideUpOut: {
            '0%': { transform: 'translateY(0)', opacity: '1' },
            '100%': { transform: 'translateY(-100%)', opacity: '0' },
          },
          pulseSlow: {
            '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
            '50%': { opacity: '1', transform: 'scale(1.04)' },
          },
        },
      },
    },
    plugins: [],
  }
  