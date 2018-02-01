const Hapi = require('hapi');
const Vision = require('vision');
const handlebars = require('handlebars');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  port: Number(process.argv[4] || 8000),
  host: 'localhost',
});
server.register(Vision, (error) => {
  if (error) { throw error; }
});
server.views({
  engines: {
    html: handlebars,
  },
  helpersPath: Path.join(__dirname, 'helpers'),
  path: Path.join(__dirname, 'helpers'),
});
server.route({
  path: '/',
  method: 'GET',
  handler: { view: 'helper' },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
    console.log('server start');
  });
}
module.exports = server;
