// all this code in IIFE () is 'safe'.
// variables are contained within it

(function(name) {
  var greeting = 'Hello';
  console.log(greeting + ' ' + name);
}('safecode'))

console.log(greeting)
