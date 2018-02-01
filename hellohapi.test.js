// const axios = require('axios');

// describe('test for server ', () => {
// test('should return ', (done) => {
// axios.get('www.google.com').then((data) => {
//  console.log(data);
// expect(data).toBe('Hello hapi');
// done();
// }).catch((error) => { console.log(error); });
// });
// });
const Hapi = require('hapi');
const server = require('./hello_hapi.js');

describe('test for server ', () => {
  test('should return hello hapi', () => {
    server.inject('/', (res) => {
      expect(res.result).toBe('hello hapi');
    });
  });
  test('server should be a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
