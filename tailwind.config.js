/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        proximanovalight: ['proxima-nova-light'],
        proximanovasemibold: ['proxima-nova-semi-bold'],
        proximanovabold: ['proxima-nova-bold']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}