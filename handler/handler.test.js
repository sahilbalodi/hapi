const server = require('./handler.js');
const Hapi = require('hapi');

describe('test for server', () => {
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
