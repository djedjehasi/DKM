/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(34,193,195,0.65172006302521), rgba(253,187,45,0.6685267857142857)), url('../public/dkmhero.jpeg')",
        'service-patten': "linear-gradient(to right bottom, rgba(34,193,195,0.85), rgba(253,187,45,0.85)), url('../public/dkmservice.jpeg')"
      },
    },
  },
  plugins: [],
}
