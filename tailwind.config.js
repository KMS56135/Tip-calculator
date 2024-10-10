/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      "strong-cyan": "hsl(172, 67%,45%)",
      "very-dark-cyan": "hsl(183, 100%, 15%)",
      "gark-grayish-cyan": "hsl(186, 14%, 43%)",
      "hrayish-cyan": "hsl(184, 14%, 56%)",
      "light-grayish-cyan": "hsl(185, 41%, 84%)",
      "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      "white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      "Space-Mono": ["Space Mono", 'monospace'],
    },
    container: {
      center: true,
      screens: {
        "mobile": "376px",
        "desktop": "920px",
      }
    },
    screens: {
      "desktop": "920px"
    }
  },
  plugins: [],
}

