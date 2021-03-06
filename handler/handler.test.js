const server = require('./handler.js');
const Hapi = require('hapi');
const fs = require('fs');

describe('test for server', () => {
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
  test('should return hello abc', (done) => {
    server.inject('/', (res) => {
      const fileContent = fs.readFileSync('/Users/sahilbalodi/Desktop/exercise/handler/index.html');
      expect(res.result).toBe(fileContent.toString());
      done();
    });
  });
});
