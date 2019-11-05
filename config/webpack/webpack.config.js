const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setStyleLoaders = require('./style-loaders');
const devServer = require('./dev-server');
const { DEV, PROD, ROOT, BUILD_PATH, CONFIG_PATH } = require('./constants');

module.exports = ({ NODE_ENV }) => {
  console.log(`Environment: ${NODE_ENV}`);

  return {
    mode: NODE_ENV,
    entry: './src/index.js',
    devtool: NODE_ENV === DEV ? 'eval-source-map' : false,
    context: ROOT,
    devServer,
    output: {
      path: BUILD_PATH,
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: setStyleLoaders(NODE_ENV)
        },
        {
          test: /\.(png|pje?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|tff|otf|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: "bundle.css" })
    ]
  };
};
