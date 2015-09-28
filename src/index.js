var uniqueRandomArray = require('unique-random-array');

var numbers = [
  934534534,
  7234,
  004350450,
  42348399444,
  7,
  52343240,
  26347586,
  404,
];

module.exports = {
  all: numbers,
  random: uniqueRandomArray(numbers)
};
