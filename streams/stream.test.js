const server = require('./streams.js');
const Hapi = require('hapi');

describe('file stream.js ', () => {
  test('returns a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
// describe('stream server', () => {
//   test('returns response for get request', (done) => {
//     server.inject('/', (response) => {
//       expect(response).not.toBe(null);
//       done();
//     });
//   });
// });
describe('stream server', () => {
  test('returns cyphertext', (done) => {
    server.inject('/', (response) => {
      expect(response.result).toBe('Gur Chefhvg bs Uncv-arff');
      done();
    });
  });
});
