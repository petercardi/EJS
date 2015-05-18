function LengthInFeet(number) {
  this.dimension = number;
}

function LengthInMeters(number) {
  this.dimension = number;
}

LengthInMeters.prototype.inFeet = function(number) {
  return this.number * 3.28084;
};

LengthInFeet.prototype.inMeters = function(number) {
  return this.number / 3.28084;
};

LengthInMeters.prototype.inMeters = function(number) {
  return this.number;
};

LengthInFeet.prototype.inFeet = function(number) {
  return this.number;
};
