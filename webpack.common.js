const path = require('path')

module.exports = {
  entry: {
    app: './index.tsx'
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
}
