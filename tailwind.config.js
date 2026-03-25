const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['app/**/*.{js,ts,tsx}','components/**/*.{js,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        homepageIcon: '#8DDCFF',
        accent: '#8DDCFF',
        slate: colors.slate,
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
