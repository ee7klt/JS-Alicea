function greet(name) {
    name = name || '<Your Name Here>'
  console.log('Hello ' + name)
}

greet()



// aside: polluting the global scope
var a = 1
function foo() {
  a = 2;
  b = 1;
}
foo()
console.log(a)
console.log(b)   // global scope polluted by non-use of var b
