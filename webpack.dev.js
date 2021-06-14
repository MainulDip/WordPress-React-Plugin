const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  plugins: [
    // new RemoveEmptyScriptsPlugin({ extensions: ['css.ts'] }),
    // new MiniCssExtractPlugin({
    //   filename: '/style/[name].bundle.css'
    // }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          //   'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
})
