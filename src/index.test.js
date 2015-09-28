var assert = require('assert');
var numbers = require('./');

describe('numbers that are cool', () => {
  describe('all', () => {
    it('should be an array of numbers', () => {
      assert.deepEqual(
        numbers.all.filter(n => typeof n === 'number'),
        numbers.all
      );
    });

    it('should contain 42', () => {
      assert.ok(numbers.all.indexOf(42) >= 0);
    });
  });

  describe('random', () => {
    it('should return a random cool number', () => {
      var randomNumber = numbers.random();
      assert.ok(numbers.all.indexOf(randomNumber) >= 0);
    });
  });
});
