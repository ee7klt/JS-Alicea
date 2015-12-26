function greet(whattosay) {
  return function(name) {
    // this inner function will have access to variables
    // created in its outer environment
    // even after the outer function has popped off the execution stack.
    // this inner function 'closes in' all the outer variables
    // it will access.

    //whattosay = 'a'
    console.log(this)
    console.log(whattosay + ' ' + name)
    var a = function() {
      console.log('inside a')
      console.log(this)
    }
    a()
  }
}


greet('Hi')('Alex')

var sayHi = greet('Hi');
sayHi('Alex');
