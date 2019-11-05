const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const StyleLintFormatter = require('stylelint-formatter-pretty');

const setStyleLoaders = require('./style-loaders');
const { DEV, ROOT_PATH, SRC_PATH, BUILD_PATH } = require('./constants');

module.exports = ({ NODE_ENV }) => {
  return {
    mode: NODE_ENV,
    entry: SRC_PATH + '/index.js',
    devtool: NODE_ENV === DEV ? 'eval-source-map' : false,
    context: ROOT_PATH,
    devServer: require('./dev-server'),
    output: {
      path: BUILD_PATH,
      filename: 'index.js',
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
      new StyleLintPlugin({
        formatter: StyleLintFormatter
      }),
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'index.css' })
    ]
  };
};
