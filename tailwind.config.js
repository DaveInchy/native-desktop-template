/* eslint-disable @typescript-eslint/no-var-requires */
const darkmode = 'media'
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './public/**/*.js',
    './public/**/*.ts',
    './public/**/*.css',
    './public/**/*.scss',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.css',
    './src/**/*.scss',
    './src/**/*.json',
    './src/**/*.md',
    './src/**/*.yml',
    './src/**/*.yaml',
    './src/**/*.mdx',
    // './src/**/*.jpg',
    // './src/**/*.jpeg',
    // './src/**/*.png',
    // './src/**/*.gif',
    // './src/**/*.svg',
    // './src/**/*.webp',
    // './src/**/*.ico',
    './src/**/*.woff',
    './src/**/*.woff2',
    './src/**/*.ttf',
    './src/**/*.eot',
    './src/**/*.otf',
    // './src/**/*.mp4',
    // './src/**/*.webm',
    // './src/**/*.mp3',
    // './src/**/*.wav',
    // './src/**/*.flac',
    // './src/**/*.aac',
    // './src/**/*.m4a',
    // './src/**/*.m4b',
    // './src/**/*.m4p',
    // './src/**/*.m4v',
    // './src/**/*.mpg',
    // './src/**/*.mpeg',
    // './src/**/*.mov',
    // './src/**/*.mkv',
    // './src/**/*.avi',
  ],
  darkMode: darkmode,
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'darkmode',
    lightTheme: 'lightmode',
    themes: [
      {
        darkmode: {
          'primary': '#3e3e3e',
          'secondary': '#374151',
          'accent': '#6366f1',
          'neutral': '#fcd34d',
          'base-100': '#333333',
          'info': '#581c87',
          'success': '#115e59',
          'warning': '#a16207',
          'error': '#dc2626',
          'black': '#000000',
          'white': '#ffffff',
          'light': !darkmode ? colors.white : colors.black,
          'dark': !darkmode ? colors.black : colors.white,
        },
        lightmode: {
          'primary': '#e3e3e3',
          'secondary': '#374151',
          'accent': '#6366f1',
          'neutral': '#fcd34d',
          'base-100': '#eeeeee',
          'info': '#581c87',
          'success': '#115e59',
          'warning': '#a16207',
          'error': '#dc2626',
          'black': '#000000',
          'white': '#ffffff',
          'light': !darkmode ? colors.white : colors.black,
          'dark': !darkmode ? colors.black : colors.white,
        },
      },
    ],
  },
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      fontFamily: {
        'la-patio': ['La Patio', 'sans-serif'],
        'capinella-ou-beaujolais': ['Capinella Ou Beaujolais', 'sans-serif'],
        'geometos-rounded': ['Geometos Rounded', 'sans-serif'],
        roboto: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'noto-sans': [
          '"Noto Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        'segoe-ui': [
          '"Segoe UI"',
          '-apple-system',
          'BlinkMacSystemFont',
          'serif',
        ],
        helvetica: [
          '"Helvetica Neue"',
          '-apple-system',
          'BlinkMacSystemFont',
          'serif',
        ],
        arial: ['Arial', '-apple-system', 'BlinkMacSystemFont', 'serif'],
        code: ['consolas', '-apple-system', 'BlinkMacSystemFont', 'monospace'],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
