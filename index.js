const http = require('http');
const { healthCheck, onError, onListening } = require('mtr-health');
const app = require('./app');

const { env } = process;
const svc = env.SVC_NAME || 'Meteor';
const host = env.HOST || 'localhost';
const port = Number(env.PORT) || 3000;

const server = http.createServer(app);
const conParam = { timeout: 30000 };

if (process.env.NODE_ENV === 'production') healthCheck(server, conParam);
server.listen(port)
  .on('error', err => onError(err, port))
  .on('listening', () => onListening(svc, host, port));
