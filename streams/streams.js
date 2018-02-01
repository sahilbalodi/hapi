const Hapi = require('hapi');
// const fs = require('fs');

const server = new Hapi.Server();
server.connection({
  port: process.argv[2],
  host: 'localhost',
});
server.start((error) => {
  if (error) { throw error; }
});
