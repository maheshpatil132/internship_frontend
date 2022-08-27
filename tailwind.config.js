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

        },
        buyer : {
          'primary':'#1672DE',
          'heading':'#222C2E',
          'button_1':'#DCFFD0',
          'button_2':'#FDCECE',
          'know_more':'#070242',
          'small_heading':'#002046',
          'button_1_text':' #00769B',
        },

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
