const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080),
});
const handlerFunction = (request, reply) => reply('Hello sahil');
server.route({ path: '/', method: 'GET', handler: handlerFunction });
server.start(() => {});
