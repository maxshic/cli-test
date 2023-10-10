const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { dirname } = require('path');
const WebpackBar = require('webpackbar');


module.exports = {
  entry: path.resolve(__dirname ,'src' ,'index.js'),
  plugins: [
    new WebpackBar(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'WebpackTest',
      template: path.resolve(__dirname ,'index.html'),
      filename: 'index.html',
    }),
    
  ],
  output: {
    path: path.resolve(__dirname ,'dist'),
    filename: 'bundle.js'
  },
  // stats: {
  //   colors: true,
  //   logging: false,
  //   loggingTrace: false
  // },
  stats: 'none',
  devServer: {
    // stats: 'none',
    disableHostCheck: true,
    noInfo: true,
    compress: true,
    host: 'localhost',
    port: 5000,
    // hotOnly: true,
    historyApiFallback: true,
    hot: true,
    quiet: true,
    // open: true,
    overlay: true,
    // publicPath: 'assets',
    // useLocalIp: true,
    after: function(app, server, compiler){
      // console.log('server', server);
    },
    onListening: function(server){
      // const port = server.listeningApp.address().port;
      // console.log('Listening on port:', port);
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader' ,'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimeType: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') //别名
    },
    extensions: ['.jsx', '...'], //引入文件无需带拓展名
  },
}