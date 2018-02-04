const Hapi = require('hapi');
const JOI = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(9120 || process.argv[4]),
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
        breed: JOI.string().required().min(0).max(5),
      },
    },
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
  });
}
module.exports = server;
