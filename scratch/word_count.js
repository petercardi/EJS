var fs = require('fs');

var filename = process.argv[2]

fs.readFile(filename, function(err, data))


var words = 'foo bar baz foo';

var wordCount = {};

words.split(' ').forEach(function(word) {
  if (wordCount[word]) {
    wordCount += 1;
  } else {
    wordCount[word] = 1;
  } // .toTernary()
})























// var stringCount = function(plants) {
//   for (var i=0; i<plants.length; i++) {
//     if
//   };
//   // return {'blue mustard': 1};
// };
//
// var actual = stringCount(['blue mustard']);
// var expected = {'blue mustard': 1};
// console.log('actual: ', actual);
// console.log('expected: ', expected);
//
// var actual = stringCount(['blue mustard']);
// var expected = {'blue mustard': 1};
// console.log('actual: ', actual);
// console.log('expected: ', expected);
//
//
