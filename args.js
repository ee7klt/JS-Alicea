var a = function (x) {
  console.log(x);
}

var b = function (x) {
  console.log(arguments);
}


a(1);
a(1,2);
b(1);
b(1,2)
