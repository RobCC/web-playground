const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENV_DEV = 'development';
const ENV_PROD = 'production';

module.exports = ({ NODE_ENV }) => {
  console.log(`Environment: ${NODE_ENV}`);

  const stylingLoaders = [
    { loader: 'css-loader' },
    { loader: 'postcss-loader' },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass')
      }
    }
  ];

  if (NODE_ENV === ENV_PROD) {
    stylingLoaders.unshift({ loader: MiniCssExtractPlugin.loader });
  } else {
    stylingLoaders.unshift({ loader: 'style-loader' });
  }

  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: stylingLoaders
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
        }
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
    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })]
  };
};
