const server = require('./validationjoi.js');
const Hapi = require('hapi');

const req = {
  method: 'POST',
  url: '/login',
  payload: JSON.stringify({ name: 'Ethan' }),
};
describe('server- joi', () => {
  test('server returns a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
  test('server responds to a request', () => {
    server.inject(req, (response) => {
      expect(response.result).toBe('login');
    });
  });
});
