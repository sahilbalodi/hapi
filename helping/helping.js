const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8000),
  host: 'localhost',
});
server.start((error) => {
  if (error) { throw error; }
  console.log('server start');
});
