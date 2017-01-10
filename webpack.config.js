module.exports = {
  entry: './app.js',

  output: {
    // path: 'build',
    filemane: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
