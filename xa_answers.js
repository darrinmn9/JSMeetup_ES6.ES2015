//iterative
var factorial = num => {

  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  }

  var answer = 1;

  //loop through all numbers from 1 to num, and multiply them together
  for (var i = 1; i <= num; i++) {
    answer = answer * i;
  }

  return answer;

};


//____________________________________________________________________
//recursive

var factorial = num => {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  }
  // If the number is 0, its factorial is 1.
  else if (num === 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    return (num * factorial(num - 1));
  }
};









//recursive + ES6 tail call optimization: http://www.2ality.com/2015/06/tail-call-optimization.html

var factorial = (n, acc = 1) => {
  if (n <= 1) {
    return acc;
  } else {
    return factorial(n - 1, n * acc);
  }
};

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
factorial(100000);
