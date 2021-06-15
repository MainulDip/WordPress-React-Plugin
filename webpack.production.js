const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
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
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
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
        //   'postcss-loader', // For TailWind CSS
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: ['web', 'es5']
})
