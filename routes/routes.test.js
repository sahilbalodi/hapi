const Hapi = require('hapi');
const server = require('./routes.js');

describe('test for server ', () => {
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });

  test('should return hello abc', () => {
    server.inject('/abc', (res) => {
      expect(res.result).toBe('hello abc');
    });
  });
});
