/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(34,193,195,0.65172006302521), rgba(253,187,45,0.6685267857142857)), url('../public/dkmhero.jpeg')",
        // background: rgb(34,193,195);
        //background: linear-gradient(156deg, rgba(34,193,195,0.65172006302521) 0%, rgba(253,187,45,0.6685267857142857) 100%);
      },
    },
  },
  plugins: [],
}
