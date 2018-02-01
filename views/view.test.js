const server = require('./view.js');
const Hapi = require('hapi');
const fs = require('fs');

describe('test server ', () => {
  test('should return server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
describe('test server ', () => {
  test('should should return html', (done) => {
    const fileContent = fs.readFileSync('/Users/sahilbalodi/Desktop/exercise/views/template/index.html', 'utf-8');
    server.inject('/?name=sahil', (res) => {
      expect(res.result).toBe(fileContent);
      done();
    });
  });
});
