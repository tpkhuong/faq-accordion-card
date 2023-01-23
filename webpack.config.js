const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js",
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: [{ loader: "styles-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  mode: "production",
};
