const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[4] || 8090),
});
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, reply) => { reply(`Hello ${request.params.name}`); },
});
server.start().then(() => {
  console.log('server started');
}, () => {
  process.exit();
});
module.exports = server;
