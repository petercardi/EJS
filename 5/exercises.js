// flattening
var arrayses = [[1,2],[3,4],[5,6]];
var flatten = function(a, b) {
  arrayses.reduce;
  console.log(a, b);
  return a.concat(b);
}

// age difference




// every
var everyelement = function(array) {
  if array.includes(false)
    return false;
  else
    return true;
}

// some
var someelements = function(array) {
  if array.includes(true)
    return true;
  else
    return false;
}

var input = [1,2,3]

var obj = {}

for (var i = input.length-1; i <= 0; i--) {
  if (i === input.length-1) {
    obj['rest'] = null;
    obj['value'] = input[i];
    var total = obj;
  } else {
    obj['rest'] = total;
    obj['value'] = input[i];
  }
  console.log("object is " + obj);
  console.log("total is " + total);
}
