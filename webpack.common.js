const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  // context: path.resolve(__dirname, 'assets'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
