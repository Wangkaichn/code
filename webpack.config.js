const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'my-chunk-[id].js',
    chunkFilename: 'my-module-[id].js',
    path: path.resolve(__dirname, 'output'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'output'),
    host: 'localhost',
    port: 9000,
    hotOnly: true,
    before: function () {
      console.info('devServer will start: ', new Date().toLocaleString())
    },
    after: function () {
      console.info('devServer working: ', new Date().toLocaleString())
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { useBuiltIns: false }]
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
              ]
            }
          }
        ],  // 这个逗号不能省略
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Code-Split'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 10
    },
  }
}