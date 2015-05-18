//reverse string

// var rev;
//
// var str = 'foobar';
//
// var revStr = function(str) {
//   for(var i = 1; i <= str.length; i++) {
//     rev += str[str.length - i];
//   }
//   console.log(rev);
// }

// reverse array
var revArr = [];
var array = [1,2,3,4,0];

var reverseArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    revArr[i] = array[array.length - (i+1)];
  }
  console.log(revArr);
  console.log('where the fuck are my values');
  return revArr;
};

reverseArray(array);



function reverseArrayByDylan(array) {
  var results = arguments[1] || [];
  if(array.length == 0) {
    return results;
  }
  results.push(array[array.length-1]);
  return reverseArrayByDylan(array.slice(0, array.length-1), results);
}
