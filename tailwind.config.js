/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        code:{
          'primary':'#00A99D',
          'text-color':' #637D94',
          'text-heading':'#222C2E',
          'dash_board_primary':'#1672DE',
          'nav_dash':'#FBFCFC'

        }
      },
      height:{
        code:{
          'height':'566px',
          'width':'406px'
        }
      },
      fontSize:{
        'heading':'32px'
      }
    },
  },
  plugins: [],
}
