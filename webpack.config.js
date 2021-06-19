const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.[hash].min.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    compress: false,
    port: 3780,
    open: true,
    overlay: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss$)/,
        loader: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.[hash].min.css",
    }),
    // new OptimizeCssAssetsWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
};
