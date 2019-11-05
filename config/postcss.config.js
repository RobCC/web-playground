const { PROD } = require('./webpack/constants');

const env = process.env.NODE_ENV;

if (env === PROD) {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')
    ]
  };
} else {
  module.exports = {
    plugins: [
      require('stylelint')
    ]
  };
}
