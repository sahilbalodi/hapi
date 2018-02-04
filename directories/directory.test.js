const server = require('./directory.js');
const Hapi = require('hapi');
const fs = require('fs');

describe('test for server', () => {
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
  test('should return file contents', () => {
    server.inject('/foo/bar/baz/file.html', (res) => {
      const fileContent = fs.readFileSync('/Users/sahilbalodi/Desktop/exercise/directories/public/index.html');
      expect(res.result).toBe(fileContent.toString());
    });
  });
});
