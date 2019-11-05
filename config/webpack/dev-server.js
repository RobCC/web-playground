const chalk = require('chalk');
const log = console.log;
const internalIp = require('internal-ip');

const { BUILD_PATH } = require('./constants');

module.exports = {
  contentBase: BUILD_PATH,
  host: '0.0.0.0',
  port: 1234,
  open: false,
  hot: true,
  noInfo: true,
  overlay: true,
  historyApiFallback: true,
  onListening: server => {
    const PORT = server.listeningApp.address().port;

    log(
      `${chalk.green.bold(`Running on ${process.env.NODE_ENV}`)}`
    );
    log(
      `${chalk.cyan.bold('Listening on:')} ${chalk.cyan(`http://localhost:${PORT}`)}`
    );
    log(
      `${chalk.cyan.bold('Private IP:')} ${chalk.cyan(`http://${internalIp.v4.sync()}:${PORT}`)}`
    );
  }
};
