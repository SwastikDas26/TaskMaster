/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'robot': ['Roboto', 'sans-serif']
      },
      width: {
        '128': '42rem'
      },
      colors: {
        'logo': '#9333EA',
        'btn1': 'rgba(147, 51, 234, 0.06)',
        'btn2': 'rgba(147, 51, 234, 1)',
        'btn3': '#404040'
      }
    },
  },
  plugins: [],
}
