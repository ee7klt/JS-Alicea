var a = 3;
console.log(typeof a);  // returns number (the primitive)

// not Number the constructor since i didn't make 'a' using a constructor

var b= 'hello';
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // object. not so useful
//more useful:
console.log(d.toString) // converts contents of array to string
console.log(Object.prototype.toString.call(d)); // better!  [object Array]
// call the function Object.prototype.toString with 'this' bound to 'd'

function Person(name) {
  this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);  // true.  anywhere down the prototype chain, do i find this type of object: person?

console.log(typeof undefined); // undefined isn't anything so its type is undefined
console.log(typeof null); // object. bug

var z = function() {

};
console.log(typeof z); // function
console.log(Object.prototype.toString.call(z));  [object Function]
