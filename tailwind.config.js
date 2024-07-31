/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      width: {
        '45%': '45%',
        '55%': '55%',
        '40%': '40%',
        '60%': '60%',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #00bbcc, #6a0dad)',
        'reverse-custom-gradient': 'linear-gradient(45deg, #a020f0, #00bbbb)',
      },
      fontFamily: {
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}

