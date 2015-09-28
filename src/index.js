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
  42, // this one's contentious, i know
];

module.exports = {
  all: numbers,
  random: uniqueRandomArray(numbers)
};
