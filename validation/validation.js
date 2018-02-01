const Hapi = require('hapi');
const JOI = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[4] || 9120),
});

server.route({
  path: '/chicken/{breed}',
  method: 'GET',
  handler: (request, reply) => {
    reply(`chicken ${request.params.breed}`);
  },
  config: {
    validate: {
      params: {
        breed: JOI.string().required().max(5).min(0),
      },
    },
  },
});
server.start((error) => {
  if (error) { throw error; }
});
module.exports = server;
