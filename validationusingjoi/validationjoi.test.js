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
  // test('server responds to a request', () => {
  //   server.inject(req, (response) => {
  //     expect(response.result).toBe('login');
  //   });
  // });
  test('server validates the request', () => {
    server.inject(req, (response) => {
      expect(response.raw.res.statusCode).toBe(200);
    });
  });
  test('server validates the request', () => {
    const reqInvalid = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({ name: 'abcdefghi', password: 'abcd+123' }),
    };
    server.inject(reqInvalid, (response) => {
      expect(response.result.statusCode).toBe(400);
    });
  });
});
