const Hapi = require('hapi');
// const JOI = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8082,
});

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    reply('login');
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
    console.log('server started');
  });
}
module.exports = server;
