var person = {
firstname: 'Default',
lastname: 'Default',
greet: function() {
  return 'Hi ' + this.firstname;
}

}

var john = Object.create(person);
console.log(john)

john.firstname = 'John';
john.greet();
person.newMethod = function() {console.log("i am a new method")} // john will now get newMethod




var PersonConstructor = function() {
  this.firstname= 'Default',
  this.lastname= 'Default',
  this.greet = function() {
    return 'Hi ' + this.firstname;
  }
}

var peter = new PersonConstructor();
console.log(peter)
PersonConstructor.prototype.newMethod = function() {console.log("i am a new method")}
