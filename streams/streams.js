const Hapi = require('hapi');
// const fs = require('fs');

const server = new Hapi.Server();
server.connection({
  port: Number(9010 || process.argv[2]),
  host: 'localhost',
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply('done');
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
  });
}
module.exports = server;
