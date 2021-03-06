const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-maps",
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }, 
      { test: /\.css$/, loader: ["style-loader", "css-loader"] }, 
      {
        test: /\.s(a|c)ss$/,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
  // target: "node",
  // node: {
  //   fs: "empty"
  // },
  devServer: {
    contentBase: path.resolve("src"),
    hot: true,
    open: true,
    port: 8000,
    historyApiFallback: true,
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};