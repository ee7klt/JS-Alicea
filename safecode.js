// all this code in IIFE () is 'safe'.
// variables are contained within it

(function(global, name) {
  var greeting = 'Hello';
  console.log(greeting + ' ' + name);
}(window,'safecode'))

console.log(greeting)
