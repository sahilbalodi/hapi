const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080 || process.argv[2]),
});
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, reply) => { reply(`hello ${request.params.name}`); },
});
server.start().then(() => {
  console.log('server started');
}, () => {
  process.exit();
});
module.exports = server;
