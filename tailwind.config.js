/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primaire: "#FFC100"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      fontSize: {
        titre: "40px",
        texte: "20px"
      }
    },
  },
  plugins: [],
}

