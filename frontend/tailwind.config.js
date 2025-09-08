/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Royal blue from logo
        secondary: '#84cc16', // Lime green from logo
        'dark-blue-1': '#1e3a8a', // Darker blue variant
        'dark-blue-2': '#1e40af', // Primary blue
        'dark-blue-3': '#1e3a8a', // Dark blue variant
        'light-gray-1': '#f5f5f5',
        'light-gray-2': '#f7f7fd',
        'text-black': '#16161a',
        'text-gray': '#6b7280', // Gray from logo
        'accent-blue': '#3b82f6', // Lighter blue accent
        'accent-green': '#a3e635', // Lighter green accent
      },
      fontFamily: {
        'primary': ['Barlow', 'sans-serif'],
        'secondary': ['Teko', 'sans-serif'],
      },
      fontSize: {
        'section-title': ['70px', { lineHeight: '1', fontWeight: '700' }],
        'section-title-back': ['140px', { lineHeight: '1', fontWeight: '700' }],
      },
      spacing: {
        'section-padding-top': '183px',
        'section-padding-bottom': '170px',
        '6.5': '1.625rem',
        '9.5': '2.375rem',
        '18': '4.5rem',
        '20': '5rem',
        '25': '6.25rem',
        '55': '13.75rem',
        '75': '18.75rem',
        '102': '1.02',
        '1.25': '0.3125rem',
        '1.5': '0.375rem',
        '1.75': '0.4375rem',
        '2.5': '0.625rem',
        '0.75': '0.1875rem',
      },
      scale: {
        '50': '0.5',
        '60': '0.6',
        '80': '0.8',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'float': 'float 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1s ease-in-out infinite',
        'rotate': 'rotate 30s linear infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'subtle-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(30, 64, 175, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(30, 64, 175, 0)' },
        },
      },
      transitionDuration: {
        'default': '0.3s',
        'slow': '0.5s',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
