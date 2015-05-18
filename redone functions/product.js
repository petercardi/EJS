function product(array) {
  return array.reduce(function(total, currentVal) {
    return total * currentVal;
  });
}

array = [1,2,3,4,5];
console.log(product(array))
