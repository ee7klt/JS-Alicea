function Person() {
    console.log(this);
  this.firstname = 'Alex';
  this.lastname = 'Tah';

 //return {}
}

var alex = new Person();
console.log(alex)

// var alex2 = Person();
// console.log(alex2);   // undefined
// console.log(window.firstname); // Alex

// function Person2() {
//   firstname = 'Alex';  //sets firstname on window
//   lastname = 'Tah';
// }
//
// var alex2 = new Person2();  // still creates object, but no properties
// console.log(alex2 )


var obj = {a: 1, b: {c:2, d: 3 }}
for (var prop in obj) {console.log(prop)}
