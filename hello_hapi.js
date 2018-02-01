const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080),
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => { reply('hello hapi'); },
});
server.start().then(() => {
  console.log('server started');
}, () => {
  process.on('SIGTERM', console.log);
  process.exit();
});
module.exports = server;
