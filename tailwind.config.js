/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        "logo" : [ "Leckerli One", "cursive2" ]
      },

      colors: {
        "titleColor" : "#F78E1E",
        "hoverTitleColor" : "#805b34"
      },
      gridTemplateColumns: {
        // config-auto-mi-grid
        'auto': 'repeat(auto-fill, minmax(28rem, 1fr))',

        
      }
    },
    screens: {
      phone: '414px',
      phonelg: '568px',
      tablet: '768px',
      tabletlg: '960px',
      tabletxl: '1024px',
      laptop: '1200px',
      laptoplg: '1400px',
      desktop: '1700px',
    },
  },
  plugins: [],
}
