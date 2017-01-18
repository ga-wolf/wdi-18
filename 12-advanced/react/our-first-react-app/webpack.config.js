// Include the contents of some package
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Configure it
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/template.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    './app/main.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
