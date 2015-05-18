// function some(array) {
//   var total = 0;
//   array.reduce(function(a, b) {
//     for (i = 0; i < array.length; i++) {
//       a += b;
//     }
//     return total;
//   })
// };

var array = [1,2,3,4,5,6]



//realz


var sum = function(array) {
  return array.reduce(function(total, current) {
    return total + current;
  });
}

console.log(sum(array))
