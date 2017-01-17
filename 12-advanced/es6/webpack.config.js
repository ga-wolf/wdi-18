module.exports = {
  entry: [
    './app.es6'
  ],
  output: {
    path: __dirname,
    filename: 'transpiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.es6/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};
