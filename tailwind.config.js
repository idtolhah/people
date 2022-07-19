module.exports = {
  content: [
    "./public/index.html",
    "./src/components/**/*.{html,jsx}",
    "./src/screens/**/*.{html,jsx}",
    "./src/App.jsx"
  ],
  theme: {
    screens: {
      'phone': {'min': '0px', 'max': '639px'},
      'tablet': {'min': '640px', 'max': '1023px'},
      'desktop': {'min': '1024px'},
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        'default': '5px',
        'sm': '5px',
        'md': '10px',
        'lg': '20px',
        'xl': '40px',
      },
      colors: {
        // abstracts
        'primary': '#2463EB',
        'secondary': '#E6EEFF',
        'disabled': '#E2E5E4',
        // generals
        'white': '#FFFFFF',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}