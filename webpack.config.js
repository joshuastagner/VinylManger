var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'public/client');

var config = {
    context: APP_DIR,
    entry: './App.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        }
      ]
    }
};

module.exports = config;