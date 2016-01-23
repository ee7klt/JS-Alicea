var a = 3;
var b = new Number(3);

a == b; //returns true because == coerces type. it forces a (primitive) and b(Object) to be the same type.
a === b; // false. a is primitive, b is object containing a primitive
// they're not the same type there's no way they can be equal

//instead of using built-in contructors, use literals, use the actual primitive values.

// but ok to use it as a function like so

var c = Number("3") //without new keyword
