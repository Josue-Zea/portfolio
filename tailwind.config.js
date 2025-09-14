/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat'],
        'secundary': ['Neuton'],
        'text': ['Maven Pro']
      },
      colors: {
        transparent: "transparent",
        gris: "#2b2b2b",
        white: "#ffffff",
        blackchido: "#131313",
        background: "#07090D",
        negrochido: "#09090b",
        verde: "#1ebd5c",
        grisclaro: "#86868b",
        grisclaro2: "#d1d5db",
        grisclaro3: "#9ca3af",
        grisoscuro: "#1a1a1a",
        naranja: "#FF6D09",
        naranja700: "#c2410c",
        azul: "#010309",
        textdestacado: "#20bfa9",
        colorboton: "#169483",
        colorboton2: "#441e7d",
        text: "#AEB3B9"
      },
      "animation": {
        "background-shine": "background-shine 3s linear infinite",
        "border-width": "border-width 3s infinite alternate",
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 35s linear infinite'
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        },
        "border-width": {
          "from": {
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "width": "200px",
            "opacity": "1"
          }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-80%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(30%)' },
        }
      }
    },
    
  },
  plugins: [],
}

