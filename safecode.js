// all this code in IIFE () is 'safe'.
// variables are contained within it

(function(global, name) {
  var greeting = 'Hello';
  // global.greeting = 'Hello'; // crash in to global intentionally
  console.log(greeting + ' ' + name);
}(window,'safecode'))

console.log(greeting)
