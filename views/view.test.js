const server = require('./view.js');
const Hapi = require('hapi');

describe('test server ', () => {
  test('should return server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
