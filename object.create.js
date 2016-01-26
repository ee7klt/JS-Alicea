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

// create a Smith family
var Smiths = Object.create(person);
Smiths.lastname = "Smith";

//create a new Smith from Smiths object
var Alderson = Object.create(Smiths);
Alderson.firstname = "Alderson";
console.log(Alderson);



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


// Create a new Cumberbatch family
var Cumberbatches = new PersonConstructor();
Cumberbatches.lastname = "Cumberbatch";
console.log(Cumberbatches)


// But how do I create a new Cumberbatch from the Cumberbatches family??
