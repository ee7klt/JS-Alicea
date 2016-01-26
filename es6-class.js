// ES6 code transformed to ES5 using Babel transpiler

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
  function Person(firstname, lastname) {
    _classCallCheck(this, Person);

    this.firstname = firstname;
    this.lastname = lastname;
  }

  _createClass(Person, [{
    key: 'greet',
    value: function greet() {
      return 'Hi ' + this.firstname;
    }
  }]);

  return Person;
})();

var john = new Person('John', 'Doe');
console.log(john.greet());




var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InformalPerson = (function (_Person) {
  _inherits(InformalPerson, _Person);

  function InformalPerson(firstname, lastname) {
    _classCallCheck(this, InformalPerson);

    _get(Object.getPrototypeOf(InformalPerson.prototype), 'constructor', this).call(this, firstname, lastname);
  }

  _createClass(InformalPerson, [{
    key: 'greet',
    value: function greet() {
      return 'Yo ' + this.firstname;
    }
  }]);

  return InformalPerson;
})(Person);


var peter = new InformalPerson('peter','lynch');
console.log(peter.greet());
//
// ES6 code below
// class Person  {
// constructor (firstname,lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
//
// greet() {
//   return 'Hi' + firstname;
// }
//
// }
//
// var john = new Person('John', 'Doe');
//
// class InformalPerson extends Person {
//   constructor(firstname, lastname) {
//     super(firstname,lastname);
//   }
//
//   greet() {
//     console.log() 'Yo ' + firstname);
//   }
// }
