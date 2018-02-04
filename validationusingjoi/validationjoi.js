const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8082,
});

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    reply(request.payload.password);
  },
  config: {
    validate: {
      payload: Joi.object({
        username: Joi.string(),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
        birthyear: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email(),
      })
        .options({ allowUnknown: true })
        .with('username', 'birthyear')
        .without('password', 'accessToken'),
    },
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
    console.log('server started');
  });
}
module.exports = server;
