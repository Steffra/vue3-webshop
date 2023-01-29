const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', 'poppins'],
    },
    extend: {
      colors: {
        'light-green': '#c5d5cb',
        'darker-green': '#82a28e',
        'even-darker-green': '#64806e',
        'dark-grey': '#9fa8a3',
        'light-grey': '#e3e0cf',
      },

      width: {
        224: '30rem',
      },
    },
  },
}
