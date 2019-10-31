const env = process.env.NODE_ENV;

if (env === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')
    ]
  };
}
