const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 9120),
});

server.route({
  path: '/chicken/{breed}',
  method: 'GET',
  handler: (request, reply) => {
    reply(`chicken ${request.params.breed}`);
  },
});
server.start((error) => {
  if (error) { throw error; }
});
