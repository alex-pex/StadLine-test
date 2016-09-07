const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/client/public')
const APP_DIR = path.resolve(__dirname, 'src/client/app')

module.exports = {
  entry: [
    // 'webpack/hot/only-dev-server',
    // './js/app.js'
    APP_DIR + '/index.jsx'
  ],

  output: {
    // path: __dirname + '/build',
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel', include: APP_DIR },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
