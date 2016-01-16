function Person(firstname,lastname) {
    //console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;

 //return {}
}


// assignments aren't usually hoisted
var a
console.log(a); // undefined
 a = 2


//console.log(Person.prototype)  // are prototype assignments hoisted?
Person.prototype.getFullName = function() {
  console.log(this.firstname + ' ' + this.lastname)
}

//console.log(Person.prototype)


var alex = new Person('alex', 'tah');
console.log(alex)

alex.getFullName();


Person.prototype.sayHi = function() {
  console.log("Hello "+this.firstname+ "!")
}

alex.sayHi();  // logs "Hello alex!"
