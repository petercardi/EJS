var min = function(n1, n2) {
  if n1 === n2 {
    if ((n1 - n2) > 0) {
      console.log(n2 + ' is smaller')
    }
    else if ((n1 - n2) < 0) {
      console.log(n2 + ' is smaller')
    }
    else if ((n1 - n2) === 0) {
      console.log('the numbers are identical, silly')
    }
  }
}


var min = function(n1, n2) {
  if (n1 > n2)
    return n2;
    console.log(n2 + ' is smaller');
  else if (n1 < n2)
    return n1;
    console.log(n1 + ' is smaller');
  else if (n1 === n2)
    return n1;
    console.log('the numbers are identical, silly');
};
