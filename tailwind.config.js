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
        homepageIcon: '#B6FF2E',
        accent: '#B6FF2E',
        ink: {
          950: '#14171B',
          900: '#1F2329',
          800: '#262B32',
          700: '#333A42',
          600: '#454E58',
        },
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
