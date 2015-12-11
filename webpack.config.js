var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {  
  entry: {
      app: ['./app.ts']
    },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TypeScript + Angular 1.x + Redux',
      template: './index.html',
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.html$/, loader: "html"},
      { test: /\.css$/, loader: "style-loader!css-loader" }, 
    ]
  },
 node: {
    fs: "empty"
  }
}