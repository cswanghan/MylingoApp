/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'success': '#58CC02',
        'warning': '#FFCE00',
        'error': '#FF4B4B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'confetti-rain': 'confetti-rain 2s linear infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'confetti-rain': {
          '0%': { transform: 'translateY(-100%) rotateZ(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotateZ(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}