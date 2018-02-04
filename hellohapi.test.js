const Hapi = require('hapi');
const server = require('./hello_hapi.js');

describe('test for server ', () => {
  test('should return hello hapi', () => {
    server.inject('/', (res) => {
      expect(res.result).toBe('hello hapi');
    });
  });
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
