require('dotenv').config();
const countryPath = `./src/countries/${process.env.COUNTRY}/Country`;

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ["./src", countryPath, "./src/countries/default"],
      alias: {
        "Country": countryPath
      },
      extensions: [".js", ".jsx", ".es", ".es6", ".mjs"]
    }
  ]
  ]
};
