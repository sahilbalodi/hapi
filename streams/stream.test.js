const server = require('./streams');
const Hapi = require('hapi');

describe('file stream.js ', () => {
  test('returns a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
