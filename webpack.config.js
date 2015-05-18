var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  cache: true,

  context: __dirname,
  entry: './_js/main.js',
  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js'
  },
  
  module:  {
    loaders: [
      { test: /\.css$/,  loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version'), exclude: /node_modules/ },
      { test: /\.less$/,  loader: ExtractTextPlugin.extract('style-loader', 'css!less!autoprefixer-loader?browsers=last 2 version'), exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw', exclude: /node_modules/},
    ]
  },

  stats: {
    colors: true
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new ngAnnotatePlugin({
      add: true
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      '_css': __dirname + '/_css/'
    }
  }

};