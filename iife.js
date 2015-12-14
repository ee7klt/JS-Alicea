function greet(name) { // function statement
  console.log ('Hello '+name);
}

greet('statement');


var greetFunc = function (name) {  // function expression
  // kinda like a literal
  console.log ('Hello '+name);
}

greetFunc('expression');

// instead of calling greetFunc like above, can set value, and then invoke it


var greeting = function(name) {
  console.log('Hello '+name);
}('IIFE');   //invoke at point of creation. IIFE!


// suppose it returns a value
var greeting2 = function(name) {
  return 'Hello '+name;
};
// if only set expression, will just get function back here
console.log(greeting2)

// invoke it to get the value
console.log(greeting2('there'))

// suppose we invoke it immediately instead
var greeting3 = function(name) {
  return 'Hello '+name;
}('IIFE 2');

console.log(greeting3)

// // can't immediately invoke statements?
// function test() {
//   console.log('this is a test')
// }();   //syntax error

3;
'i am a string'; // no errors for running expressions

// this is parsed as statement, JS returns syntax error
// function(name) {
//   console.log('Hello '+name);
// }

// putting parantheses makes JS think its an expression.
// only ever use () operator with expressions
(function(name) {
  return 'Hello '+name;
})

// doesn't this do anything?
(function(name) {
  return 'Hello '+name;
})   // no, it didn't






(function(name) {
  console.log( 'Hello '+name);
})('alex')
