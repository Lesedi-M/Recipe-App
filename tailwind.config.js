  // tailwind.config.js
  module.exports = {
    
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    
     theme: {
       extend: {
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms'),
     ],
   }
