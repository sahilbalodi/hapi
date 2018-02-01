const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8000 || process.argv[2]),
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
server.start().then(() => {
  console.log('server started');
}, () => {
  process.exit();
});
module.exports = server;
