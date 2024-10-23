/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,css,php}',
    '!./node_modules/**/*'
  ],
  theme: {
    extend: {
      colors: {
        custom: {
         
        },
      },
      screens: {
        xs: '470px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      maxWidth: {
        'mainWrapper': '1120px',
        'largeWrapper': '1440px',
      },
      container: {
        center: true,
        padding: '12px',
        maxWidth: '1120px !important'
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
