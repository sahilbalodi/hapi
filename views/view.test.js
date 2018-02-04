const server = require('./view.js');
const Hapi = require('hapi');

describe('test server ', () => {
  test('should return server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
describe('test server ', () => {
  test('should should return html', (done) => {
    server.inject('/?name=sahil', (res) => {
      expect(res.result).toEqual('<h1>Hello sahil<h1>\n');
      done();
    });
  });
});
