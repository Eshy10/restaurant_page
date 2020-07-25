const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
  ],
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          },
    ]
  }
});