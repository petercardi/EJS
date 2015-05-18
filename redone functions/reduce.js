var array = [true, true, false]

function any(array) {
  return array.reduce(function(pval, val) {
    return pval || val;
  });
}

console.log(any(array));
