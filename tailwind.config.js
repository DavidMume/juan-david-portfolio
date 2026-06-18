/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b1220',
        navy: '#10223f',
        cyan: '#08a6c8',
        steel: '#667085',
        mist: '#eef6f8',
        saffron: '#f4b740',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(11, 18, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
