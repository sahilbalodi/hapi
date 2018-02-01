const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8000 || process.argv[2]),
});
server.register(Inert, (err) => {
  if (err) throw err;
});
server.route({
  path: '/foo/bar/baz/{file*}',
  method: 'GET',
  handler: { directory: { path: path.join(__dirname, './public') } },
});
server.start().then(() => {
  console.log('server started');
}, () => {
  process.exit();
});
module.exports = server;
