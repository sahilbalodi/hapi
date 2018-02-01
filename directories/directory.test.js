const server = require('./directory.js');
const Hapi = require('hapi');
const fs = require('fs');

describe('test for server', () => {
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
  test('should return hello abc', (done) => {
    server.inject('/foo/bar/baz/index.html', (res) => {
      const fileContent = fs.readFileSync('/Users/sahilbalodi/Desktop/exercise/directories/public/index.html', 'utf-8');
      expect(res.result).toBe(fileContent.toString());
      done();
    });
  });
});
