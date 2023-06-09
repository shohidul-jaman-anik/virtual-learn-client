module.exports = {
  content: [
  "./src/**/*.{html,js}",
  'node_modules/preline/dist/*.js'
],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
      doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"),require('preline/plugin')],
}
