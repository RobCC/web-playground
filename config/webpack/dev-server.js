const { BUILD_PATH } = require('./constants');

module.exports = {
  contentBase: BUILD_PATH,
  port: 1234,
  hot: true,
  noInfo: true,
  open: false,
  overlay: true,
  historyApiFallback: true,
  onListening: server => {
    const port = server.listeningApp.address().port;

    console.log(`Listening on: ${port}`);
  }
};
