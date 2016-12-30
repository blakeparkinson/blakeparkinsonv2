var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './client/app/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/client/app', loader: "babel-loader",  query: {
          presets: ['es2015']
        }},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
       test: /\.scss$/,
       loaders: ["style-loader", "css-loader", "sass-loader"]
     },
     {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: ["file-loader"]

   }
       ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
