// const webpack = require('webpack')
// const path = require('path')

// const BUILD_DIR = path.resolve(__dirname, 'src/client/public')
// const APP_DIR = path.resolve(__dirname, 'src/client/app')

// module.exports = {
//   // entry: [
//   //   // 'webpack/hot/only-dev-server',
//   //   // './js/app.js'
//   //   APP_DIR + '/index.jsx'
//   // ],

//   entry: [
//     // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
//     'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
//     APP_DIR + '/index.jsx'
//   ],

//   output: {
//     // path: __dirname + '/build',
//     path: BUILD_DIR,
//     publicPath: '/assets/',
//     filename: 'bundle.js'
//   },

//   module: {
//     loaders: [
//       // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
//       { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx?$/, loader: 'babel', include: APP_DIR },
//       { test: /\.css$/, loader: 'style!css' }
//     ]
//   },

//   plugins: [
//     new webpack.NoErrorsPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
