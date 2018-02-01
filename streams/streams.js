const Hapi = require('hapi');
const fs = require('fs');
const rot13 = require('rot13-transform');
// const bl = require('bl');

const server = new Hapi.Server();
server.connection({
  port: Number(9010 || process.argv[4]),
  host: 'localhost',
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    const fileContents = fs.createReadStream('/Users/sahilbalodi/Desktop/exercise/streams/file.txt');
    reply(null, fileContents.pipe(rot13()));
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
    console.log('server started');
  });
}
module.exports = server;
