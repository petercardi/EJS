var beancount = function(string, char) {
  var bcount = 0
  for (var index = 0; index < string.length; index++) {
    if (string.charAt(index) === char)
      bcount++
  return bcount
  }
}
