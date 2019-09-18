const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // devtool: 'source-map',
  output: {
    filename: "v-simple-drag.js",
    publicPath: "/dist/",
    library: 'v-simple-drag',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: "vue"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new DashboardPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
}
