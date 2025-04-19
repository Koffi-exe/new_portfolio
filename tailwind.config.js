/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c0ff',
          300: '#66a0ff',
          400: '#3380ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      zIndex: {
        '-10': '-10',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};