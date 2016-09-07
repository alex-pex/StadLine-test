const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const config = require("./webpack.config")

new WebpackDevServer(webpack(config), {
  stats: {
    colors: true,
  },
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: false,
}).listen(3000, "localhost", function serve(err) {
  if (err) {
    return console.log(err);
  }

  return console.log("Listening at http://localhost:3000/");
});
