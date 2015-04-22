for (var num = 1; num < 101; num++) {
  var print = "";
  if (num % 3 === 0 && num % 5 === 0)
    print = "FizzBuzz";
  else if (num % 3 === 0)
    print = "Fizz";
  else if (num % 5 === 0)
    print = "Buzz";
  else
    print = num;
  console.log(print);
}
