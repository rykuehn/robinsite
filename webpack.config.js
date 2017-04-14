const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']}) },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin({ filename: 'main.css', disable: false, allChunks: true })]
}