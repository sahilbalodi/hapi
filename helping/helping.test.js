const server = require('./helping.js');
const Hapi = require('hapi');
const verify = require('./verify.js');

describe('test server ', () => {
  test('server file returns a server object', (done) => {
    expect(server).toBeInstanceOf(Hapi.Server);
    done();
  });
  test('server returns name and suffix', (done) => {
    server.inject('/?name=abc&suffix=!', (response) => {
      expect(response.result).toBe('Hello abc!\n');
      done();
    });
  });
  test('server returns name and suffix', (done) => {
    server.inject('/?name=&suffix=!!', (response) => {
      expect(response.result).toBe('Hello !!\n');
      done();
    });
  });
  test('server returns name and suffix', (done) => {
    server.inject('/?name=1&suffix=2', (response) => {
      expect(response.result).toBe('Hello 12\n');
      done();
    });
  });
});
describe('test verify', () => {
  test('verify should return null if both arguments are undefined', () => {
    expect(verify()).toBe(null);
  });
  test('verify should return null if both arguments are not string', () => {
    expect(verify(1, 2)).toBe(null);
  });
  test('verify should return null if both arguments are not string', () => {
    expect(verify(null, 2)).toBe(null);
  });
  test('verify should return true if  arguments are  string', () => {
    expect(verify('abc', 'def')).toBe(true);
  });
});
