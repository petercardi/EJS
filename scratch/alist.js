var input = [1,2,3]

var obj = null;
for (var i = input.length-1; i >= 0; i--) {
  console.log("loop num: " + i)
  console.log("object going in: ", obj)
  obj = { value: input[i], rest: obj };
  console.log("object after transformation: ", obj)
}

console.log(obj)
