function Person(firstname,lastname) {
    //console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  //this.getFullName = ...  // not good idea to put methods in the constructor.
  // instead, define them on the prototype of the constructor
  // so that there is only one copy of the method. instead of
  // a copy fo the method for every object created.

 //return {}
}


// assignments aren't usually hoisted
var a
console.log(a); // undefined
 a = 2


//console.log(Person.prototype)  // are prototype assignments hoisted? // no
// quirk of the console.
// console.log(Person.prototype.getFullName) instead

console.log(Person.prototype.getFullName)   // undefined
Person.prototype.getFullName = function() {
  console.log(this.firstname + ' ' + this.lastname)
}
console.log(Person.prototype.getFullName) // function() {console.log(this.firstname ...)}
//console.log(Person.prototype)


var alex = new Person('alex', 'tah');
console.log(alex)

alex.getFullName();


Person.prototype.sayHi = function() {
  console.log("Hello "+this.firstname+ "!")
}

alex.sayHi();  // logs "Hello alex!"
