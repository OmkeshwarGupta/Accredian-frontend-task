module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {

      colors:{
        col1: "#1A73E826",
        col2:" #1A73E8",
        text1: "#262626",
        text2: "#1A202C",
        btn1: "#94A3B8",
        col3: "#EEF5FF",
        col4: "#282828",
        col5: "#E2E8F0",
        col6:"#737373",
        c1: "#237CF2",
        c2: "#3289FC",
        c3:"#4696FF",
        col7:"rgba(26, 115, 232, 0.35)",
        col8: "#1350A0"

      },
      scale: {
        '130': '1.3',
        '140':'1.4'
      },
      boxShadow: {
        'custom': '0px 4px 65px 1px rgba(0, 7, 43, 0.21)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
