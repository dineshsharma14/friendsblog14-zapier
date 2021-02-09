/* globals describe, it, expect */
const zapier = require('zapier-platform-core');
const App = require('../index');
const appTester = zapier.createAppTester(App);

// describe('addition ', () => {
//   it('should work', () => {
//     expect(1 + 1).toEqual(2);
//   });
// });

describe('friendsblogs-GET', () => {
  it('should load posts', done => {
    const bundle = {};
    appTester(App.triggers.post.operation.perform, bundle)
      .then(results => {
        expect(results.length).toBeGreaterThan(1);

        const firstResult = results[0];
        console.log('test result ' + firstResult);
        expect(firstResult.username).toBe('reddog');
        expect(firstResult.title).toBe('title');
        expect(firstResult.content).toBe('body');

        done();
      })
      .catch(done)
  })
})
