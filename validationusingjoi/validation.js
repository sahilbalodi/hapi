const Hapi = require('hapi');
const JOI = require('joi');

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
  config: {
    validation: {
      payload: JOI.object({
        username: JOI.string(),
        password: JOI.string().alphanum(),
        accessToken: JOI.string().alphanum(),
        birthyear: JOI.number().integer().min(1900).max(2013),
        email: JOI.string().email(),
      }).options({ allowUnknown: true }).with('username', 'birthyear').without('password', 'accessToken'),
    },
  },
});
server.start((error) => {
  if (error) { throw error; }
  console.log('server started');
});
