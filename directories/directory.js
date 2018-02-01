const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 9000),
});
server.register(Inert, (err) => {
  if (err) throw err;
});
server.route({
  path: '/foo/bar/baz/{path*}',
  method: 'GET',
  handler: { directory: { path: path.join(__dirname, 'public') } },
});
server.start((err) => {
  if (err) throw err;
  // console.log('server started');
});
module.exports = server;

// console.log(path.join(__dirname, 'public'));
