const Hapi = require('hapi');
const Vision = require('vision');
const Path = require('path');
const handlebars = require('handlebars');

const server = new Hapi.Server();
server.connection({
  port: Number(process.argv[4] || 8010),
  host: 'localhost',
});
server.register(Vision, (err) => {
  if (err) throw err;
});
server.views({
  engines: {
    html: handlebars,
  },
  path: Path.join(__dirname, 'template'),
});
server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});
server.start((error) => {
  if (error) { throw error; }
  console.log('server started');
});
module.exports = server;
