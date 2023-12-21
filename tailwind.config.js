/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'BUGreen': {
        100: '#9aaf9d',
        200: '#9bb09d',
        300: '#8ca590',
        400: '#7e9982',
        500: '#708e74',
        600: '#658068',
        700: '#5a715d',
        800: '#4e6351',
        900: '#435545',
      },
      'BUGold': {
        100: '#f2dab4',
        200: '#efd1a2',
        300: '#ecc78f',
        400: '#e9be7c',
        500: '#e6b56a',
        600: '#e3ac57',
        700: '#e0a345',
        800: '#e0a345',
        900: '#c9923e',
      },
      'JBlue': {
        100: '#f2dab4',
        200: '#efd1a2',
        300: '#ecc78f',
        400: '#e9be7c',
        500: '#00bcd4',
        600: '#e3ac57',
        700: '#e0a345',
        800: '#e0a345',
        900: '#c9923e',
      },
      primary: '#00bcd4',
      secondary: '#e6b56a',
    },
    extend: {
      fontFamily: {
        Gistesy: ['Gistesy', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
