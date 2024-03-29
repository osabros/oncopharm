/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      keyframes: {
        'repeated-fade-and-zoom': {
          '0%':   { opacity: 1, transform: 'scale(1)' },
          '17%':  { opacity: 1, transform: 'scale(1.05)' },
          '25%':  { opacity: 0, },
          '92%':  { opacity: 0, },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'image-repeated-fade': 'repeated-fade-and-zoom 20s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
