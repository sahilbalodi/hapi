const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8070 || process.argv[2]),
});
const filePath = path.join(__dirname, 'index.html');
server.register(Inert, (err) => {
  if (err) throw err;
});
server.route({
  path: '/',
  method: 'GET',
  handler: { file: filePath },
});
server.start((err) => {
  if (err) { throw err; }
  console.log('server started');
});
module.exports = server;
