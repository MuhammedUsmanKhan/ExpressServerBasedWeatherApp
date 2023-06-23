/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./staticWeatherApp/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'weatherBackground': "url('/images/noaa-cthDc0hUM0o-unsplash.jpg')",
        //'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

