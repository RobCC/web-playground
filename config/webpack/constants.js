const path = require('path');

module.exports = {
  DEV: 'development',
  PROD: 'production',
  ROOT: path.resolve(__dirname, '../../'),
  CONFIG_PATH: path.resolve(__dirname, '../'),
  BUILD_PATH: path.resolve(__dirname, '../../build'),
};
