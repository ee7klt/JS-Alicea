// var person;
//
// persom={};   // say we make typo.
//
// console.log(persom);   // no error if don't use strict. returns Object{}
// // window.person will be undefined.


// "use strict";
//
// var person;
// persom = {};
// console.log(persom);  // uncaught error. must declare variables before using them under
// // strict mode.

// can also isolate strict mode to execution context of a particular Function

function logNewPerson() {
  "use strict";
  var person;
  persom = {};
  console.log(persom)
}

logNewPerson();   // Uncaught error
