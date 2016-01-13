var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}


var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// you should never do this. modern browsers allow way to directly access prototype
// but will slow down performance
// DEMO only!!!
john.__proto__   = person;  // will never mistakently type this
//set object 'john' s prototype to person
// john inherits from person
// this mean, if try to execute method on john that does not exists within john
// engine will look in person.
console.log(john.getFullName());
// 'this' in getFullName now refers to john, not to person
// i.e. whichever object originated the call.
console.log(john.firstname); // returns John, not Default. Why??
// because of prototype chain. first looks in john object. when found, stops


var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName()); // returns 'Jane Default'
// found firstname, but not lastname in object jane.
// goes up the proto chain and finds lastname = Default
