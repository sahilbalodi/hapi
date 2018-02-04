// const Hapi = require('hapi');
// const inert = require('inert');
//
// const server = new Hapi.Server();
// server.connection({
//   port: 8000,
//   host: 'localhost',
// });
// server.register(inert, (error) => {
//   if (error) { throw error; }
// });
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (req, res) => { res(req.query.name); },
// });
// server.start((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('server started');
// });

config: {
  validation: {
    payload: JOI.object({
      username: JOI.string(),
      password: JOI.string().alphanum(),
      accessToken: JOI.string().alphanum(),
      birthyear: JOI.number().integer().min(1900).max(2013),
      email: JOI.string().email(),
    }).options({ allowUnknown: true })
      .with('username', 'birthyear')
      .without('password', 'accessToken'),
  },
},