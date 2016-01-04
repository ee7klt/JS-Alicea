var person = {
  firstName: 'Alex',
  lastName: 'Tah',
  getFullName: function () {
    var fullname = this.firstName + ' ' + this.lastName;
    return fullname;
  }
}


//suppose have a function outside
// this will fail because 'this' points to global,
// not the 'person' object
var logName = function (lang1, lang2) {
  console.log('Logged: '+ this.getFullName());
  console.log('Arguments: '+lang1+' '+lang2);
  console.log('-----------')
}

// but wouldn't it be nice if can control what 'this' points to?


var logNameSuccess = logName.bind(person);
logNameSuccess('en','es')


// can also do


var logName2 = function (lang1, lang2) {
  console.log('Logged: '+ this.getFullName());
}.bind(person);
logName2('en','es');


logName.call(person, 'en', 'es')

logName.apply(person, ['en', 'es']);



(function (lang1, lang2) {
  console.log('Logged: '+ this.getFullName());
  console.log('Arguments: '+lang1+' '+lang2);
  console.log('-----------')
}).apply(person,['en','fr']);
