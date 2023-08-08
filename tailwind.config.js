/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'bg-gradient': 'linear-gradient(225deg, #F47E2D 0%, #FFB76A 47.40%, #FAB53C 100%)',
        "orange-grad":"linear-gradient(227deg, #FAB541 0%, #FEB663 51.39%, #F58534 100%)",
        "Move-grad":"linear-gradient(45deg, #F30085 0%, #510173 100%)",
        "Move-grad2":"linear-gradient(135deg, #FF0086 0%, #3F0071 100%)"
        
      }
      
    },
    screens: {
      'tab': {'min': '481px', 'max': '1080px'}, 
      'ph': {'min': '320px', 'max': '480px'}, 
      'Swith': {'min': '465px', 'max': '719px'}, 
      'tall': { 'raw': '(min-height: 470px) and (max-height: 803px)' },
      'xtall': { 'raw': '(min-height: 200px) and (max-height: 468px)' },
      'stall':{'raw':'(max-height: 642px)'}, 
      'Ltall':{'raw':'(max-height: 827px)'},
      "permaxLoading":{"max":"1764px"} , 
      "permaxLoading1":{"max":"1658px"} , 
      "permaxMaxAlphaMax":{"max":"1410px"} , 
      "permaxMaxAlpha":{"max":"1352px"} , 
      "permaxMaxAlphaa":{"max":"1120px"} , 
      "permax3": {'max': "980px"}, 
      "permax2": {'max': "825px"}, 
      "permax1": {'max': "782px"}, 
      "permax": {'max': "700px"}, 
      "permax-xs": {'max': "617px"}, 
      "permaxMedium": {"max":"500px"} ,
      'Spctelphone':{'max':"420px"} ,
      'telphone':{'max':"400px"} ,
      'zfolder': {'max': '319px'}, 
      'max': {'max':"319px"}, 
      'iphone':{'max':"319px"} , 
    }
  },
  plugins: [
     require('tailwind-scrollbar'),
],
});