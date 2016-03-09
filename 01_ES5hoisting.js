// ********* ES5 Hoisting ***********

var myFunc = function() {
  return x;
};

console.log(myFunc()); //reference error x is not defined

//___________________________________________


var myFunc = function() {
  return x;
};

console.log(myFunc()); //undefined

var x = 5;

//___________________________________________

var x = 5;

var myFunc = function() {
  return x;
};

console.log(myFunc()); //5


//___________________________________________

var x = 5;

console.log(myFunc()); //typeError myFunc is not a function

var myFunc = function() {
  return x;
};

//___________________________________________

var x = 5;

console.log(myFunc()); //5

function myFunc() {
  return x;
}

//___________________________________________

console.log(myFunc()); //undefined

var x = 5;

function myFunc() {
  return x;
}

