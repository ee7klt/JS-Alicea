// by value (primitives)

var a = 3;
var b ;


b = a;
a = 2;

console.log(b)
console.log(a)


// by reference (all objects (including functions))
var c = {greeting: 'hi'};
var d;
d = c;
console.log(d)
c.greeting='hello'   // mutate

console.log(c)
console.log(d)


// by reference (even when objects passed by parameters)


function changeGreeting(obj) {
  obj.greeting = 'Hola'
}

changeGreeting(d)
console.log(c)
console.log(d)


// equals operator sets up new memory space (new address)
c = {greeting: 'howdy'};
