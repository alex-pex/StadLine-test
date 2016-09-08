const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const config = require("./webpack.config")

// For proxy / use with React Router
const express = require("express")
const proxy = require("proxy-middleware")
const url = require("url")

// The proxy
const app = express()
// Proxy the request for static assets
app.use("/dist", proxy(url.parse("http://localhost:3000/dist")))

app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

const wds = new WebpackDevServer(webpack(config), {
  stats: {
    colors: true,
  },
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
})

wds.listen(3001, "localhost", function serve(err) {
  if (err) {
    return console.log(err);
  }

  return console.log("Listening at http://localhost:3000/");
});

app.listen(3000)
