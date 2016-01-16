var a = function (x) {
  console.log(x);
}

var b = function (x) {
  console.log(x)
  console.log(arguments);
}


a(1);   // returns 1
a(1,2); // returns 1
b(1);   // returns [1]
b(1,2,3)  // returns 1 and [1,2,3]
