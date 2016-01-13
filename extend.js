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

john.__proto__ = person;


for (var prop in john) { // for ... in loops over every member of object
  //console.log(prop)
  if (john.hasOwnProperty(prop))
  console.log(prop+': ' + john[prop]);
}

var jane = {
  address: '111 Main St.',
  firstname: 'Jane',
  getFormalFullName: function () {
    return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName: function() {
    return firstname;
  }
}


_.extend(john, jane, jim);
console.log(john)
