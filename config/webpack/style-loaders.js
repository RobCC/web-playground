const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PROD, ROOT, CONFIG_PATH } = require('./constants');

module.exports = NODE_ENV => {

  const stylingLoaders = [
    { loader: 'css-loader' },
    {
      loader: 'postcss-loader',
      options: {
        config: { path: `${CONFIG_PATH}/postcss.config.js` }
      },
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass')
      },
    }
  ];

  if (NODE_ENV === PROD) {
    stylingLoaders.unshift({ loader: MiniCssExtractPlugin.loader });
  } else {
    stylingLoaders.unshift({ loader: 'style-loader' });
  }

  return stylingLoaders;
};