const Hapi = require('hapi');
const server = require('./validation');

describe('server', () => {
  test('server file should return server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
describe('server', () => {
  test('server should return 200 status code if valid params are passed in url', (done) => {
    server.inject('/chicken/abcd', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('server should return 400 status code if invalid params are passed in url', (done) => {
    server.inject('/chicken/abcdefgh', (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
  test('server returns correct reponse data', (done) => {
    server.inject('/chicken/abcde', (response) => {
      expect(response.result).toBe('chicken abcde');
      done();
    });
  });
  test('server returns correct reponse data', (done) => {
    server.inject('/chicken/abcdefgh', (response) => {
      expect(response.result.error).toBe('Bad Request');
      done();
    });
  });
});
