const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/client/app/index.jsx",
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/public/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: "babel", exclude: /node_modules/ },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$|\.sass$/, loader: "style!css!sass" },
    ],
  },
};
