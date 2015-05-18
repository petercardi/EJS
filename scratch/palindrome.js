function palindrome(str) {
  if (str.length < 2)
  return true;
  return str.charAt(0) === str.charAt(str.length-1) && palindrome(str.slice(1, str.length-2));
}

var str = 'racecar';

console.log(palindrome(str))
