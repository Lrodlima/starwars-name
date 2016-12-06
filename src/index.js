var uniqueRandomArray = require('random-uniq-array');
var starWarsName = require('./starwars-names.json');

module.exports = {
  all: starWarsName,
  random: uniqueRandomArray(starWarsName)
};
