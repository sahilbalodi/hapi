const server = require('./helping.js');
const Hapi = require('hapi');

describe('test server ', () => {
  test('server file returns a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
  test('server returns name and suffix', () => {
    server.inject('/?name=abc&suffix=!', () => {});
  });
});
