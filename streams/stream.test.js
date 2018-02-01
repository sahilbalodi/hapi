const server = require('./streams');
const Hapi = require('hapi');

describe('file stream.js ', () => {
  test('returns a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
describe('stream server', () => {
  test('returns response for get request', (done) => {
    server.inject('/', (response) => {
      expect(response).not.toBe(null);
      done();
    });
  });
});
