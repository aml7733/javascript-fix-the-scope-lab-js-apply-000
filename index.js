var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}

function add2(n) {
  const two = 2;
  return n + two;
}

function funky() {
  return "FUNKY!";
}

var funkyFunction = function() {
  return funky;
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funky();
