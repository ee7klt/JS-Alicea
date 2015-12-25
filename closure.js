function greet(whattosay) {
  return function(name) {
    // this inner function will have access to variables
    // created in its outer environment
    // even after the outer function has popped off the execution stack.
    // this inner function 'closes in' all the outer variables
    // it will access.
    console.log(whattosay + ' ' + name)
  }
}


greet('Hi')('Alex')

var sayHi = greet('Hi');
sayHi('Alex');
