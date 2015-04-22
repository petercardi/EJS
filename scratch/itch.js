var alwaysPrecedeByString = function(string) {
  return function(newString) {
    return string + ' ' + newString;
  };
};

var sunshineAndCloudy = alwaysPrecedeByString("Sunshine and a clear day ahead in");
console.log(sunshineAndCloudy('Boulder, CO'))
