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
const server = require('./abc.js');

describe('test for server ', () => {
  test('should return hello hapi', () => {
    server.inject('/', (res) => {
      expect(res.result).toBe('hello hapi');
      console.log('hello hapi');
    });
  });
});
