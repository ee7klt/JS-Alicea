function a() {
  b();
  var c;
}

function b() {
  console.log('called b');
  var d = 1;
}

console.log(d)

a();

var d = 2;

console.log(d)
