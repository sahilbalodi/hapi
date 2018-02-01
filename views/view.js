const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  port: Number(process.argv[4] || 8050),
  host: 'localhost',
});
server.start((error) => {
  if (error) { throw error; }
  console.log('server started');
});
module.exports = server;
