/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      fontWeight: {
        'slab-bold': '700',
        'mono-regular': '400',
      },
      letterSpacing: {
        'wide': '0.1em', 
        'extralight': '200',
      },
            fontSize: {
        'custom-14': '14px',
      },
      lineHeight: {
        'custom-24': '24px',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
    },
  },
  plugins: [
        require('@tailwindcss/typography'),

  ],
}